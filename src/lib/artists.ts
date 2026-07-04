import { supabase } from "@/lib/supabase";
import type { Artist, ArtistSummary, Release } from "@/types/artist";

const DEFAULT_GRADIENT = "from-neutral-400 to-neutral-600";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatConcertDate(isoDate: string): string {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00`));
}

export async function getArtists(): Promise<ArtistSummary[]> {
  const { data, error } = await supabase
    .from("artistes")
    .select("slug, name, country, country_flag, genre, avatar_gradient, initials")
    .order("name");

  if (error) throw error;

  return data.map((row) => ({
    slug: row.slug,
    name: row.name,
    country: row.country,
    countryFlag: row.country_flag ?? "",
    genre: row.genre,
    avatarGradient: row.avatar_gradient ?? DEFAULT_GRADIENT,
    initials: row.initials ?? "",
  }));
}

export async function getArtistSlugs(): Promise<string[]> {
  const { data, error } = await supabase.from("artistes").select("slug");
  if (error) throw error;
  return data.map((row) => row.slug);
}

export async function getArtistBySlug(slug: string): Promise<Artist | null> {
  const { data, error } = await supabase
    .from("artistes")
    .select(
      `slug, name, country, country_flag, genre, avatar_gradient, initials, bio,
       oeuvres(description),
       sorties(title, type, year),
       concerts(event_date, ville, pays, salle)`
    )
    .eq("slug", slug)
    .order("year", { referencedTable: "sorties", ascending: false })
    .order("event_date", { referencedTable: "concerts", ascending: true })
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return {
    slug: data.slug,
    name: data.name,
    country: data.country,
    countryFlag: data.country_flag ?? "",
    genre: data.genre,
    avatarGradient: data.avatar_gradient ?? DEFAULT_GRADIENT,
    initials: data.initials ?? "",
    bio: data.bio ?? "",
    oeuvres: data.oeuvres.map((o) => o.description),
    sorties: data.sorties.map((s) => ({
      title: s.title,
      type: s.type as Release["type"],
      year: s.year,
    })),
    concerts: data.concerts.map((c) => ({
      date: formatConcertDate(c.event_date),
      ville: c.ville,
      pays: c.pays,
      salle: c.salle,
    })),
  };
}
