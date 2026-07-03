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

export type Artist = {
  slug: string;
  name: string;
  country: string;
  countryFlag: string;
  genre: string;
  avatarGradient: string;
  initials: string;
  bio: string;
  oeuvres: string[];
  sorties: Release[];
  concerts: Concert[];
};

export const artists: Artist[] = [
  {
    slug: "amina-diallo",
    name: "Amina Diallo",
    country: "Sénégal",
    countryFlag: "🇸🇳",
    genre: "Mbalax",
    avatarGradient: "from-orange-400 to-rose-500",
    initials: "AD",
    bio: "Née à Dakar, Amina Diallo a grandi bercée par les percussions sabar de son quartier natal. Après des débuts remarqués comme choriste, elle se lance en solo en 2015 et impose rapidement un mbalax modernisé, mêlant productions électroniques et instruments traditionnels wolof. Sa voix puissante et ses textes engagés sur la condition des femmes ouest-africaines lui valent une reconnaissance internationale, notamment lors de ses tournées en Europe et en Amérique du Nord.",
    oeuvres: [
      "Téranga (court-métrage musical, 2018)",
      "Sabar Session Live (captation concert, 2021)",
      "Collaboration avec l'Orchestre National du Sénégal (2022)",
    ],
    sorties: [
      { title: "Ndeye", type: "Album", year: 2019 },
      { title: "Dakar la nuit", type: "Single", year: 2021 },
      { title: "Yaakaar", type: "Album", year: 2023 },
      { title: "Sabar Boy", type: "Single", year: 2024 },
    ],
    concerts: [
      { date: "12 septembre 2026", ville: "Dakar", pays: "Sénégal", salle: "Grand Théâtre National" },
      { date: "3 octobre 2026", ville: "Paris", pays: "France", salle: "La Cigale" },
      { date: "20 novembre 2026", ville: "Abidjan", pays: "Côte d'Ivoire", salle: "Palais de la Culture" },
    ],
  },
  {
    slug: "kwame-osei",
    name: "Kwame Osei",
    country: "Ghana",
    countryFlag: "🇬🇭",
    genre: "Highlife / Afrobeats",
    avatarGradient: "from-yellow-400 to-amber-600",
    initials: "KO",
    bio: "Originaire de Kumasi, Kwame Osei a réinventé le highlife traditionnel ghanéen en y injectant des sonorités afrobeats et hip-hop. Multi-instrumentiste formé au conservatoire d'Accra, il compose lui-même la majorité de ses morceaux à la guitare et au clavier. Ses textes, souvent chantés en Twi et en anglais, abordent aussi bien la fête que les réalités sociales du Ghana contemporain. Il est considéré comme l'un des artisans du renouveau du highlife auprès de la jeune génération.",
    oeuvres: [
      "Documentaire 'Highlife Reborn' (2020)",
      "Bande originale du film ghanéen 'Azaa' (2022)",
      "Résidence artistique au Chale Wote Street Art Festival (2023)",
    ],
    sorties: [
      { title: "Kumasi Nights", type: "Album", year: 2018 },
      { title: "Aseda", type: "Single", year: 2020 },
      { title: "Gold Coast Stories", type: "Album", year: 2022 },
      { title: "Sankofa", type: "EP", year: 2025 },
    ],
    concerts: [
      { date: "5 août 2026", ville: "Accra", pays: "Ghana", salle: "National Theatre of Ghana" },
      { date: "14 septembre 2026", ville: "Londres", pays: "Royaume-Uni", salle: "O2 Academy Brixton" },
    ],
  },
  {
    slug: "zanele-mokoena",
    name: "Zanele Mokoena",
    country: "Afrique du Sud",
    countryFlag: "🇿🇦",
    genre: "Amapiano",
    avatarGradient: "from-purple-400 to-fuchsia-600",
    initials: "ZM",
    bio: "Révélée dans les townships de Johannesburg, Zanele Mokoena fait partie de la nouvelle vague amapiano qui a conquis les dancefloors du continent puis du monde entier. DJ et productrice, elle mêle basses profondes, log drums et samples de jazz sud-africain pour créer un son reconnaissable entre mille. Ses sets en club et ses clips visuellement soignés font d'elle une figure incontournable de la scène électronique africaine actuelle.",
    oeuvres: [
      "Série de mixes 'Piano Sessions' (2021-2024)",
      "Collaboration visuelle avec le studio d'art contemporain Nirox (2023)",
    ],
    sorties: [
      { title: "Emzini", type: "Single", year: 2020 },
      { title: "Isgubhu", type: "Album", year: 2022 },
      { title: "Umbuso", type: "Single", year: 2023 },
      { title: "Piano Republic", type: "Album", year: 2025 },
    ],
    concerts: [
      { date: "18 juillet 2026", ville: "Johannesburg", pays: "Afrique du Sud", salle: "Ticketpro Dome" },
      { date: "9 août 2026", ville: "Lagos", pays: "Nigéria", salle: "Eko Convention Centre" },
      { date: "27 septembre 2026", ville: "Amsterdam", pays: "Pays-Bas", salle: "Melkweg" },
    ],
  },
  {
    slug: "youssef-benali",
    name: "Youssef Benali",
    country: "Maroc",
    countryFlag: "🇲🇦",
    genre: "Gnawa Fusion",
    avatarGradient: "from-emerald-400 to-teal-600",
    initials: "YB",
    bio: "Petit-fils d'un maalem gnawa d'Essaouira, Youssef Benali perpétue la tradition spirituelle du guembri tout en la confrontant au jazz, au rock et à l'électronique. Ses concerts, entre transe rituelle et improvisation moderne, ont fait sensation au Festival Gnaoua d'Essaouira avant de tourner en Europe. Il travaille aujourd'hui à faire dialoguer patrimoine immatériel marocain et musiques actuelles.",
    oeuvres: [
      "Installation sonore 'Lila Moderne' (musée Mohammed VI, 2021)",
      "Ciné-concert pour le film muet 'Le Fils du Caïd' (2023)",
    ],
    sorties: [
      { title: "Guembri Electric", type: "Album", year: 2017 },
      { title: "Essaouira Trance", type: "Album", year: 2020 },
      { title: "Baraka", type: "Single", year: 2023 },
      { title: "Lila", type: "EP", year: 2024 },
    ],
    concerts: [
      { date: "22 août 2026", ville: "Essaouira", pays: "Maroc", salle: "Festival Gnaoua - Scène Moulay Hassan" },
      { date: "6 octobre 2026", ville: "Marseille", pays: "France", salle: "Le Silo" },
    ],
  },
  {
    slug: "chiamaka-nwosu",
    name: "Chiamaka Nwosu",
    country: "Nigéria",
    countryFlag: "🇳🇬",
    genre: "Afrobeats / R&B",
    avatarGradient: "from-sky-400 to-indigo-600",
    initials: "CN",
    bio: "Lagosienne pur jus, Chiamaka Nwosu a percé sur les réseaux sociaux avant de signer avec un label indépendant nigérian. Sa voix soul, posée sur des productions afrobeats léchées, en a fait l'une des voix féminines montantes de la scène de Lagos. Elle collabore régulièrement avec des producteurs d'Accra et de Londres, et milite activement pour une meilleure rémunération des artistes indépendants africains sur les plateformes de streaming.",
    oeuvres: [
      "Série documentaire 'Lagos Sound' (2022, 3 épisodes)",
      "Collection capsule avec un créateur de mode lagosien (2024)",
    ],
    sorties: [
      { title: "Naija Girl", type: "Single", year: 2021 },
      { title: "Golden Hour", type: "EP", year: 2022 },
      { title: "Eko Nights", type: "Album", year: 2024 },
      { title: "Amara", type: "Single", year: 2026 },
    ],
    concerts: [
      { date: "1 août 2026", ville: "Lagos", pays: "Nigéria", salle: "Terra Kulture Arena" },
      { date: "15 septembre 2026", ville: "Toronto", pays: "Canada", salle: "History" },
      { date: "2 novembre 2026", ville: "Bruxelles", pays: "Belgique", salle: "AB Club" },
    ],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
