-- Schéma de l'annuaire artiste.africa : artistes + leurs œuvres, sorties et concerts.

create extension if not exists "pgcrypto";

create table if not exists public.artistes (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  country text not null,
  country_flag text,
  genre text not null,
  avatar_gradient text,
  initials text,
  bio text,
  created_at timestamptz not null default now()
);

create table if not exists public.oeuvres (
  id uuid primary key default gen_random_uuid(),
  artiste_id uuid not null references public.artistes (id) on delete cascade,
  description text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.sorties (
  id uuid primary key default gen_random_uuid(),
  artiste_id uuid not null references public.artistes (id) on delete cascade,
  title text not null,
  type text not null check (type in ('Album', 'Single', 'EP')),
  year integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.concerts (
  id uuid primary key default gen_random_uuid(),
  artiste_id uuid not null references public.artistes (id) on delete cascade,
  event_date date not null,
  ville text not null,
  pays text not null,
  salle text not null,
  created_at timestamptz not null default now()
);

create index if not exists oeuvres_artiste_id_idx on public.oeuvres (artiste_id);
create index if not exists sorties_artiste_id_idx on public.sorties (artiste_id);
create index if not exists concerts_artiste_id_idx on public.concerts (artiste_id);

-- RLS : annuaire public, donc lecture ouverte à tous, aucune écriture publique.

alter table public.artistes enable row level security;
alter table public.oeuvres enable row level security;
alter table public.sorties enable row level security;
alter table public.concerts enable row level security;

create policy "Lecture publique des artistes"
  on public.artistes for select
  using (true);

create policy "Lecture publique des oeuvres"
  on public.oeuvres for select
  using (true);

create policy "Lecture publique des sorties"
  on public.sorties for select
  using (true);

create policy "Lecture publique des concerts"
  on public.concerts for select
  using (true);
