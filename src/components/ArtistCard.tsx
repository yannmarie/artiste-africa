import Link from "next/link";
import { Artist } from "@/data/artists";
import ArtistAvatar from "@/components/ArtistAvatar";

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link
      href={`/artistes/${artist.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-neutral-900"
    >
      <div className="flex aspect-square items-center justify-center bg-neutral-100 p-6 dark:bg-neutral-800">
        <ArtistAvatar initials={artist.initials} gradient={artist.avatarGradient} />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h2 className="text-lg font-semibold text-neutral-900 group-hover:underline dark:text-white">
          {artist.name}
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {artist.countryFlag} {artist.country}
        </p>
        <span className="mt-2 inline-block w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
          {artist.genre}
        </span>
      </div>
    </Link>
  );
}
