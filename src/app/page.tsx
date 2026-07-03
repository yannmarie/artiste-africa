import { artists } from "@/data/artists";
import ArtistCard from "@/components/ArtistCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          artiste.africa
        </h1>
        <p className="mt-3 text-neutral-500 dark:text-neutral-400">
          L&apos;annuaire des artistes musicaux africains
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {artists.map((artist) => (
          <ArtistCard key={artist.slug} artist={artist} />
        ))}
      </div>
    </main>
  );
}
