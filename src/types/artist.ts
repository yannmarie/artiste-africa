export type Release = {
  title: string;
  type: "Album" | "Single" | "EP";
  year: number;
};

export type Concert = {
  date: string; // format lisible, ex: "12 septembre 2026"
  ville: string;
  pays: string;
  salle: string;
};

export type ArtistSummary = {
  slug: string;
  name: string;
  country: string;
  countryFlag: string;
  genre: string;
  avatarGradient: string;
  initials: string;
};

export type Artist = ArtistSummary & {
  bio: string;
  oeuvres: string[];
  sorties: Release[];
  concerts: Concert[];
};
