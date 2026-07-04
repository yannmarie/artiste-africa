import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtistBySlug, getArtistSlugs } from "@/lib/artists";
import ArtistAvatar from "@/components/ArtistAvatar";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getArtistSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = await getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-neutral-500 hover:underline dark:text-neutral-400"
      >
        ← Retour à l&apos;annuaire
      </Link>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <ArtistAvatar initials={artist.initials} gradient={artist.avatarGradient} size="lg" />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white">
            {artist.name}
          </h1>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            {artist.countryFlag} {artist.country}
          </p>
          <span className="mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
            {artist.genre}
          </span>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Biographie</h2>
        <p className="mt-3 leading-relaxed text-neutral-700 dark:text-neutral-300">
          {artist.bio}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Œuvres</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-300">
          {artist.oeuvres.map((oeuvre) => (
            <li key={oeuvre}>{oeuvre}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Sorties</h2>
        <div className="mt-3 overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
              <tr>
                <th className="px-4 py-2 font-medium">Titre</th>
                <th className="px-4 py-2 font-medium">Type</th>
                <th className="px-4 py-2 font-medium">Année</th>
              </tr>
            </thead>
            <tbody>
              {artist.sorties
                .slice()
                .sort((a, b) => b.year - a.year)
                .map((sortie) => (
                  <tr
                    key={sortie.title}
                    className="border-t border-black/5 dark:border-white/5"
                  >
                    <td className="px-4 py-2 text-neutral-900 dark:text-white">
                      {sortie.title}
                    </td>
                    <td className="px-4 py-2 text-neutral-600 dark:text-neutral-400">
                      {sortie.type}
                    </td>
                    <td className="px-4 py-2 text-neutral-600 dark:text-neutral-400">
                      {sortie.year}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 mb-16">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
          Concerts à venir
        </h2>
        {artist.concerts.length === 0 ? (
          <p className="mt-3 text-neutral-500 dark:text-neutral-400">
            Aucun concert programmé pour le moment.
          </p>
        ) : (
          <ul className="mt-3 space-y-3">
            {artist.concerts.map((concert) => (
              <li
                key={`${concert.date}-${concert.ville}`}
                className="flex flex-col justify-between gap-1 rounded-xl border border-black/10 p-4 sm:flex-row sm:items-center dark:border-white/10"
              >
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">
                    {concert.ville}, {concert.pays}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {concert.salle}
                  </p>
                </div>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {concert.date}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
