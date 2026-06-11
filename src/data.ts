import { Play, Film, Gamepad2, Mic, Piano, Music, Radio, Tv, Keyboard, Clapperboard, MonitorPlay, Presentation } from 'lucide-react';

export const MUSIC_CATEGORIES = [
  {
    id: 'cinematic',
    title: 'Cinematic / Emotional',
    description: 'Piano-driven and orchestral pieces for drama, romance, reflection, documentaries, and emotional scenes.',
    useCases: 'Drama, documentary, romance, reflective moments.',
    icon: Film,
    audioSrc: '/audio/25-Black and White.mp3', // Placeholder audio
  },
  {
    id: 'adventure',
    title: 'Adventure / Fantasy',
    description: 'Melodic themes for magical worlds, journeys, RPGs, animation, and fantasy storytelling.',
    useCases: 'RPG, animation, worldbuilding, main themes.',
    icon: Tv,
    audioSrc: '/audio/2-Piratas 1.mp3',
  },
  {
    id: 'epic',
    title: 'Epic / Action',
    description: 'Energetic, bold, high-impact cues for battles, trailers, sports, heroic moments, and climactic scenes.',
    useCases: 'Trailers, action, boss battles, sports.',
    icon: MonitorPlay,
    audioSrc: '/audio/Final Boss.mp3',
  },
  {
    id: 'dark',
    title: 'Dark / Suspense / Drama',
    description: 'Tension, mystery, and atmospheric cues for thrillers, dramatic reveals, and psychological scenes.',
    useCases: 'Thriller, mystery, horror-lite, drama.',
    icon: Clapperboard,
    audioSrc: '/audio/Nightmare.mp3',
  },
  {
    id: 'game',
    title: 'Game / Retro / Chiptune',
    description: 'Loopable and game-inspired music influenced by NES, GBA, tower defense, arcade, and retro aesthetics.',
    useCases: 'Game loops, menus, levels, retro titles.',
    icon: Gamepad2,
    audioSrc: '/audio/Theme_6.ogg',
  },
  {
    id: 'latin',
    title: 'Pop / Arrangements',
    description: 'Arrangements and productions blending pop energy, contemporary harmony, and live performance.',
    useCases: 'Artists, live bands, sync, branded content.',
    icon: Music,
    audioSrc: '/audio/Himno de Placer.mp3',
  },
  {
    id: 'piano',
    title: 'Piano / Intimate',
    description: 'Expressive piano music for emotional storytelling, intimate moments, and reflective scenes.',
    useCases: 'Drama, romance, solo piano, documentary.',
    icon: Piano,
    audioSrc: '/audio/Clarity.mp3',
  },
  {
    id: 'lofi',
    title: 'Lo-fi / Chill',
    description: 'Warm, relaxed, and textural cues for lifestyle content, study moods, urban visuals, and soft transitions.',
    useCases: 'Lifestyle, background, vlogs, chill scenes.',
    icon: Radio,
    audioSrc: '/audio/5-A las 6 pm (V).mp3',
  },
];

export const PROJECTS = [
  {
    id: 'mistakes',
    title: 'Mistakes',
    type: 'Piano EP / Original Instrumental Release',
    role: 'Composer, Pianist, Producer',
    description: 'An intimate piano project built around raw emotion, improvisation, and personal storytelling.',
    tags: ['Piano', 'Emotional', 'Instrumental'],
    image: '/images/Mistakes.png',
    audioSrc: '/audio/Cuestión de Tiempo.mp3',
    link: 'https://open.spotify.com/album/7laqikCbd9bt9MvRfAx5XG', // Add your link here
  },
  {
    id: 'feelings',
    title: 'Feelings',
    type: 'Piano Single',
    role: 'Composer, Pianist, Producer',
    description: 'An emotional piano piece that reached over 1.5M streams on Amazon Music.',
    tags: ['Piano', 'Emotional', 'Streaming'],
    image: '/images/feelings.png',
    audioSrc: '/audio/Feelings.mp3',
    link: 'https://open.spotify.com/track/68wqSzfzcx0Z3kTGYM7QwI', // Add your link here
  },
  {
    id: 'desconocidos',
    title: 'Desconocidos Pt.1',
    type: 'Lo-Fi Fusion EP',
    role: 'Production, Arrangement, Original',
    description: 'An Indie Dominican award-nominated Lo-Fi fusion project released under the alter ego Mr. Keys.',
    tags: ['Lo-Fi', 'Fusion', 'Production'],
    image: '/images/Desconocidos Portada Oficial.png', // Placeholder
    audioSrc: '/audio/lovers.mp3', // Placeholder
    link: 'https://open.spotify.com/album/4a6qupqsVuBbLaYCFjntck', 
  },
  {
    id: 'arrangements',
    title: 'Arrangements & Artist Collaborations',
    type: 'Production / Arrangement',
    role: 'Arranger, Producer, Keyboardist',
    description: 'Arrangements and productions for artists, live bands, and creative projects across Latin, pop, cinematic, and contemporary styles.',
    tags: ['Arranging', 'Production', 'Artists'],
    image: '/images/soy.jpg',
    youtubeId: 'J-g-nWjY9CA', // Reemplaza esto con el ID de tu video de YouTube (e.g. dQw4w9WgXcQ)
    link: 'https://youtu.be/J-g-nWjY9CA', // Add your link here
  },
  {
    id: 'live-music',
    title: 'Live Music Direction',
    type: 'Performance / Event Music',
    role: 'Music Director, Pianist, Arranger',
    description: 'Experience supporting live performances, band arrangements, rehearsals, and event music coordination.',
    tags: ['Live', 'Direction', 'Performance'],
    image: '/images/name.jpg',
    youtubeId: 'v=oSiHkKZnK-g', // Reemplaza esto con el ID de tu video
    link: 'https://youtu.be/oSiHkKZnK-g?list=RDoSiHkKZnK-g', // Add your link here
  },
  {
    id: 'short-film',
    title: 'Fetch Composers Choice Contest',
    type: 'Film Scoring',
    role: 'Composer',
    description: 'Original score created for a short film contest entry, demonstrating cinematic arrangement and atmospheric storytelling.',
    tags: ['Film', 'Scoring', 'Cinematic'],
    image: '/images/maxresdefault.jpg', // Placeholder
    youtubeId: 'v=OoCfn91Hcpw', 
    link: 'https://youtu.be/OoCfn91Hcpw', 
  },
];

export const GAME_CREDITS = [
  {
    id: 'velhotorni',
    title: 'Velhotorni',
    type: '8-bit / Retro Fantasy Game',
    role: 'Composer, Sound Designer',
    scope: 'Original music and sound effects',
    context: 'Game jam / indie demo',
    link: 'https://jake-aldridge.itch.io/velhotorni', // Placeholder link
    description: 'Original 8-bit music and sfx, blending retro game aesthetics with playful character-driven energy.',
    image: '/images/velo_5.png', // Placeholder image path
    audioSrc: '/audio/Theme_1_Auto.mp3',
  },
  {
    id: 'astroclimb',
    title: 'AstroClimb',
    type: 'Retro / Arcade / Space Game',
    role: 'Composer, Sound Designer',
    scope: 'Original music and sound effects',
    context: 'Game jam / indie demo',
    link: 'https://denzioed.itch.io/astroclimb',
    description: 'Composed music and sfx for a retro climbing game with arcade energy and sci-fi atmosphere.',
    image: '/images/astro_climb.png',
    audioSrc: '/audio/Space 1 Loop.mp3',
  },
  {
    id: 'greens-dungeon',
    title: 'Green’s Dungeon',
    type: 'Mobile Text RPG',
    role: 'Music & Sound Effects Contributor',
    scope: 'Contributed music and sound effects',
    context: 'Mobile indie RPG',
    link: 'https://rondi-zax-studio.itch.io/greens-dungeon', 
    description: 'Composed music and sfx for a text RPG, supporting dungeon exploration and interactive player progression.',
    image: '/images/gd_3.png',
    audioSrc: '/audio/Batalla Normal.mp3',
  },
  {
    id: 'dungeonmania',
    title: 'Dungeonmania',
    type: 'Dungeon / Fantasy Game',
    role: 'Composer',
    scope: 'Original music',
    context: 'Game jam / indie demo',
    link: 'https://wifitrust.itch.io/dungeonmania',
    description: 'Composed original music for a dungeon-themed game, supporting fantasy exploration and adventure-driven gameplay.',
    image: '/images/dungeon.png', 
    audioSrc: '/audio/Final Boss Battle 1.mp3',
  },
  {
    id: 'quota',
    title: 'Quota',
    type: 'Experimental / Game Jam Project',
    role: 'Composer',
    scope: 'Original music',
    context: 'Game jam / demo',
    link: 'https://calzark.itch.io/quota',
    description: 'Created musical support for a compact interactive experience.',
    image: '/images/quota.png', 
    audioSrc: '/audio/Danger_Level.mp3',
  }
];

export const SERVICES = [
  {
    id: 'scoring',
    title: 'Original Scoring',
    description: 'Music for short films, games, animation, documentaries, trailers, and branded stories.',
    icon: Film,
  },
  {
    id: 'game',
    title: 'Game Music',
    description: 'Loopable themes, adaptive music concepts, retro/chiptune, orchestral, hybrid, and emotional game music.',
    icon: Gamepad2,
  },
  {
    id: 'arranging',
    title: 'Arranging & Orchestration',
    description: 'Arrangements for artists, ensembles, live bands, piano, strings, horns, and contemporary productions.',
    icon: Play,
  },
  {
    id: 'production',
    title: 'Music Production',
    description: 'Production for artists, instrumental releases, soundtracks, pop, Latin, lo-fi, cinematic, and hybrid music.',
    icon: Mic,
  },
  {
    id: 'piano',
    title: 'Piano / Keyboard Recording',
    description: 'Expressive piano, synths, keys, textures, and melodic parts for recordings and live projects.',
    icon: Keyboard,
  },
  {
    id: 'direction',
    title: 'Music Direction',
    description: 'Live show arrangements, band direction, rehearsal preparation, and event music coordination.',
    icon: Presentation,
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: "Emilio understands emotion and storytelling immediately.",
    author: "Director / Producer",
  },
  {
    id: '2',
    quote: "His arrangements bring clarity, energy, and musicality to every project.",
    author: "Artist / Collaborator",
  },
  {
    id: '3',
    quote: "A creative collaborator who combines strong musicianship with technical precision.",
    author: "Event Producer",
  },
];
