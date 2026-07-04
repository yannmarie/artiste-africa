-- Données de test pour l'annuaire artiste.africa.
-- À exécuter une seule fois (pas de gestion d'idempotence sur oeuvres/sorties/concerts).

insert into public.artistes (slug, name, country, country_flag, genre, avatar_gradient, initials, bio)
values
  (
    'amina-diallo', 'Amina Diallo', 'Sénégal', '🇸🇳', 'Mbalax',
    'from-orange-400 to-rose-500', 'AD',
    'Née à Dakar, Amina Diallo a grandi bercée par les percussions sabar de son quartier natal. Après des débuts remarqués comme choriste, elle se lance en solo en 2015 et impose rapidement un mbalax modernisé, mêlant productions électroniques et instruments traditionnels wolof. Sa voix puissante et ses textes engagés sur la condition des femmes ouest-africaines lui valent une reconnaissance internationale, notamment lors de ses tournées en Europe et en Amérique du Nord.'
  ),
  (
    'kwame-osei', 'Kwame Osei', 'Ghana', '🇬🇭', 'Highlife / Afrobeats',
    'from-yellow-400 to-amber-600', 'KO',
    'Originaire de Kumasi, Kwame Osei a réinventé le highlife traditionnel ghanéen en y injectant des sonorités afrobeats et hip-hop. Multi-instrumentiste formé au conservatoire d''Accra, il compose lui-même la majorité de ses morceaux à la guitare et au clavier. Ses textes, souvent chantés en Twi et en anglais, abordent aussi bien la fête que les réalités sociales du Ghana contemporain. Il est considéré comme l''un des artisans du renouveau du highlife auprès de la jeune génération.'
  ),
  (
    'zanele-mokoena', 'Zanele Mokoena', 'Afrique du Sud', '🇿🇦', 'Amapiano',
    'from-purple-400 to-fuchsia-600', 'ZM',
    'Révélée dans les townships de Johannesburg, Zanele Mokoena fait partie de la nouvelle vague amapiano qui a conquis les dancefloors du continent puis du monde entier. DJ et productrice, elle mêle basses profondes, log drums et samples de jazz sud-africain pour créer un son reconnaissable entre mille. Ses sets en club et ses clips visuellement soignés font d''elle une figure incontournable de la scène électronique africaine actuelle.'
  ),
  (
    'youssef-benali', 'Youssef Benali', 'Maroc', '🇲🇦', 'Gnawa Fusion',
    'from-emerald-400 to-teal-600', 'YB',
    'Petit-fils d''un maalem gnawa d''Essaouira, Youssef Benali perpétue la tradition spirituelle du guembri tout en la confrontant au jazz, au rock et à l''électronique. Ses concerts, entre transe rituelle et improvisation moderne, ont fait sensation au Festival Gnaoua d''Essaouira avant de tourner en Europe. Il travaille aujourd''hui à faire dialoguer patrimoine immatériel marocain et musiques actuelles.'
  ),
  (
    'chiamaka-nwosu', 'Chiamaka Nwosu', 'Nigéria', '🇳🇬', 'Afrobeats / R&B',
    'from-sky-400 to-indigo-600', 'CN',
    'Lagosienne pur jus, Chiamaka Nwosu a percé sur les réseaux sociaux avant de signer avec un label indépendant nigérian. Sa voix soul, posée sur des productions afrobeats léchées, en a fait l''une des voix féminines montantes de la scène de Lagos. Elle collabore régulièrement avec des producteurs d''Accra et de Londres, et milite activement pour une meilleure rémunération des artistes indépendants africains sur les plateformes de streaming.'
  )
on conflict (slug) do nothing;

insert into public.oeuvres (artiste_id, description)
select a.id, x.description
from (values
  ('amina-diallo', 'Téranga (court-métrage musical, 2018)'),
  ('amina-diallo', 'Sabar Session Live (captation concert, 2021)'),
  ('amina-diallo', 'Collaboration avec l''Orchestre National du Sénégal (2022)'),
  ('kwame-osei', 'Documentaire ''Highlife Reborn'' (2020)'),
  ('kwame-osei', 'Bande originale du film ghanéen ''Azaa'' (2022)'),
  ('kwame-osei', 'Résidence artistique au Chale Wote Street Art Festival (2023)'),
  ('zanele-mokoena', 'Série de mixes ''Piano Sessions'' (2021-2024)'),
  ('zanele-mokoena', 'Collaboration visuelle avec le studio d''art contemporain Nirox (2023)'),
  ('youssef-benali', 'Installation sonore ''Lila Moderne'' (musée Mohammed VI, 2021)'),
  ('youssef-benali', 'Ciné-concert pour le film muet ''Le Fils du Caïd'' (2023)'),
  ('chiamaka-nwosu', 'Série documentaire ''Lagos Sound'' (2022, 3 épisodes)'),
  ('chiamaka-nwosu', 'Collection capsule avec un créateur de mode lagosien (2024)')
) as x(slug, description)
join public.artistes a on a.slug = x.slug;

insert into public.sorties (artiste_id, title, type, year)
select a.id, x.title, x.type, x.year
from (values
  ('amina-diallo', 'Ndeye', 'Album', 2019),
  ('amina-diallo', 'Dakar la nuit', 'Single', 2021),
  ('amina-diallo', 'Yaakaar', 'Album', 2023),
  ('amina-diallo', 'Sabar Boy', 'Single', 2024),
  ('kwame-osei', 'Kumasi Nights', 'Album', 2018),
  ('kwame-osei', 'Aseda', 'Single', 2020),
  ('kwame-osei', 'Gold Coast Stories', 'Album', 2022),
  ('kwame-osei', 'Sankofa', 'EP', 2025),
  ('zanele-mokoena', 'Emzini', 'Single', 2020),
  ('zanele-mokoena', 'Isgubhu', 'Album', 2022),
  ('zanele-mokoena', 'Umbuso', 'Single', 2023),
  ('zanele-mokoena', 'Piano Republic', 'Album', 2025),
  ('youssef-benali', 'Guembri Electric', 'Album', 2017),
  ('youssef-benali', 'Essaouira Trance', 'Album', 2020),
  ('youssef-benali', 'Baraka', 'Single', 2023),
  ('youssef-benali', 'Lila', 'EP', 2024),
  ('chiamaka-nwosu', 'Naija Girl', 'Single', 2021),
  ('chiamaka-nwosu', 'Golden Hour', 'EP', 2022),
  ('chiamaka-nwosu', 'Eko Nights', 'Album', 2024),
  ('chiamaka-nwosu', 'Amara', 'Single', 2026)
) as x(slug, title, type, year)
join public.artistes a on a.slug = x.slug;

insert into public.concerts (artiste_id, event_date, ville, pays, salle)
select a.id, x.event_date, x.ville, x.pays, x.salle
from (values
  ('amina-diallo', date '2026-09-12', 'Dakar', 'Sénégal', 'Grand Théâtre National'),
  ('amina-diallo', date '2026-10-03', 'Paris', 'France', 'La Cigale'),
  ('amina-diallo', date '2026-11-20', 'Abidjan', 'Côte d''Ivoire', 'Palais de la Culture'),
  ('kwame-osei', date '2026-08-05', 'Accra', 'Ghana', 'National Theatre of Ghana'),
  ('kwame-osei', date '2026-09-14', 'Londres', 'Royaume-Uni', 'O2 Academy Brixton'),
  ('zanele-mokoena', date '2026-07-18', 'Johannesburg', 'Afrique du Sud', 'Ticketpro Dome'),
  ('zanele-mokoena', date '2026-08-09', 'Lagos', 'Nigéria', 'Eko Convention Centre'),
  ('zanele-mokoena', date '2026-09-27', 'Amsterdam', 'Pays-Bas', 'Melkweg'),
  ('youssef-benali', date '2026-08-22', 'Essaouira', 'Maroc', 'Festival Gnaoua - Scène Moulay Hassan'),
  ('youssef-benali', date '2026-10-06', 'Marseille', 'France', 'Le Silo'),
  ('chiamaka-nwosu', date '2026-08-01', 'Lagos', 'Nigéria', 'Terra Kulture Arena'),
  ('chiamaka-nwosu', date '2026-09-15', 'Toronto', 'Canada', 'History'),
  ('chiamaka-nwosu', date '2026-11-02', 'Bruxelles', 'Belgique', 'AB Club')
) as x(slug, event_date, ville, pays, salle)
join public.artistes a on a.slug = x.slug;
