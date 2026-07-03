# artiste.africa

Annuaire des artistes musicaux africains. Chaque artiste dispose d'une fiche
avec sa biographie, la liste de ses œuvres, ses sorties (albums/singles/EP)
et ses concerts à venir.

Le projet utilise pour l'instant des **données de test stockées directement
dans le code** (`src/data/artists.ts`), en attendant le branchement d'une
vraie base de données.

## Stack technique

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com)

## Installation

Prérequis : [Node.js](https://nodejs.org) 20+ et npm.

```bash
npm install
```

## Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Autres commandes

```bash
npm run build   # build de production
npm run start   # démarre le build de production
npm run lint    # vérifie le code avec ESLint
```

## Structure du projet

- `src/app/page.tsx` — page d'accueil listant tous les artistes
- `src/app/artistes/[slug]/page.tsx` — fiche de détail d'un artiste
- `src/data/artists.ts` — données de test des artistes (à remplacer par une
  vraie base de données par la suite)
- `src/components/` — composants réutilisables (carte artiste, avatar)
