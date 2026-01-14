export const sportsData = [
  /* ===================== MAJOR SPORTS ===================== */

  {
    id: 'basketball',
    name: 'Basketball',
    category: 'major',
    image: 'images/Sports/BasketBall.webp',
    description: 'Fast-paced basketball matches showcasing teamwork, agility, and shooting precision.',
    rules: [
      'Standard FIBA rules apply',
      'Fouls and free throws strictly enforced',
      'Referee decisions are final'
    ],
    teamSize: '3v3 : 3 + 1 substitute\n5v5 : 5 + 7 substitutes',
    spocDetails:'Javali : 8296563377\nVeer : 8618100779',
    format: 'League + Knockout',
    gif_image: 'images/Gifs/Basketball.gif',
    registrations: [
      { label: 'Men’s 3v3', link: 'https://forms.gle/gN4HTLT8MWbUKq9o9' },
      { label: 'Men’s 5v5', link: 'https://forms.gle/Xvfqdq399hU83HgX7' },
      { label: 'Women’s 3v3', link: 'https://forms.gle/ptJbqjrbwTocCCmaA' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'volleyball',
    name: 'Volleyball',
    category: 'major',
    image: 'images/Sports/VolleyBall.avif',
    description: 'Competitive volleyball games showcasing teamwork and athleticism.',
    rules: [
      'Maximum team size: 8 players',
      'Best of 3 sets',
      '25 points per set',
      'Rotational serving system',
      'Standard volleyball rules apply'
    ],
    teamSize: '6 + 2 substitutes',
    spocDetails: 'Likith : 6300291397\nRishik : 9296809005',
    format: 'League + Knockout',
    gif_image: 'images/Gifs/Volleyball.gif',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/gZLCK7MDSSrAA91s7' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'badminton',
    name: 'Badminton',
    category: 'major',
    image: 'images/Sports/Badminton.png',
    description: 'High-intensity badminton matches testing speed, reflexes, and stamina.',
    rules: [
      'Singles and Doubles categories',
      'Best of 3 games(Can be changed based on time constraints)',
      'Knockout format',
      'Standard BWF rules apply',
      'Players must bring their own rackets'
    ],
    teamSize: 'Singles / Doubles',
    spocDetails: 'Sandeep : 9059249917\nJashwant : 8977184134\nNamish : 9986523456',
    format: 'Knockout',
    gif_image: 'images/Gifs/Badminton.gif',
    registrations: [
      { label: 'Mens Singles', link: 'https://forms.gle/PPvyAQYo6TFf7m4ZA' },
      { label: 'Mens Doubles', link: 'https://forms.gle/zzzWTysxyG4c4YRu6' },
      { label: 'Womens Singles', link: 'https://forms.gle/AhS2b46znZVbMSBB7' },
      { label: 'Womens Doubles', link: 'https://forms.gle/63TeCWoUSqaTDDXCA' },
      { label: 'Mixed Doubles', link: 'https://forms.gle/17CU26EUbnAS93SZ7' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'cricket',
    name: 'Cricket',
    category: 'major',
    image: 'images/Sports/Cricket.jpg',
    description: 'Action-packed cricket tournament highlighting batting, bowling, and fielding skills.',
    rules: [
      'Team size: 12 players',
      'Match format: Limited overs',
      'League followed by knockouts',
      'Standard cricket rules apply',
      'Umpire decisions are final'
    ],
    teamSize: '9 + 2 substitutes',
    spocDetails: 'Swaraj : 6281644490\nVarshith Gowda : 9900909983',
    format: 'League + Knockout',
    gif_image: 'images/Gifs/Cricket.gif',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/L9Q9mBmjm7BwTX1z8' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'table-tennis',
    name: 'Table Tennis',
    category: 'major',
    image: 'images/Sports/TableTennis.jpg',
    description: 'Fast reflexes and sharp spins define this table tennis championship.',
    rules: [
      'Singles and Doubles categories',
      'Best of 3 games(Can be changed based on time constraints)',
      '11 points per game',
      'ITTF rules followed',
      'Knockout format'
    ],
    teamSize: 'Singles / Doubles',
    spocDetails: 'Jayesh : 8699099969\nNaman : 9417007767',
    format: 'Knockout',
    gif_image: 'images/Gifs/TableTennis.gif',
    registrations: [
      { label: 'Mens Singles', link: 'https://forms.gle/cyGo2umdE1q6GKoX7' },
      { label: 'Mens Doubles', link: 'https://forms.gle/SkNFogoZNg1PUPF9A' },
      { label: 'Mixed Doubles', link: 'https://forms.gle/ohagYuN4SDvwDZxj7' },
      { label: 'Womens Singles', link: 'https://forms.gle/SPGUdnDghcdeMacv6' },
      { label: 'Womens Doubles', link: 'https://forms.gle/aMszNbqSEc4h4erH9' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'football',
    name: 'Football',
    category: 'major',
    image: 'images/Sports/FootBall.png',
    description: 'Competitive football matches emphasizing teamwork, tactics, and endurance.',
    rules: [
      'Team size: 9 players',
      'Match duration: Two halves',
      'Knockout format',
      'Standard football rules apply',
      'Referee decisions are binding'
    ],
    teamSize: '6 + 3 substitutes',
    spocDetails: 'Yashwanth : 7075921623\nSri Avneesh : 9962084040',
    format: 'Knockout',
    gif_image: 'images/Gifs/Football.gif',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/H3pwor28zYER23sQA' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'chess',
    name: 'Chess',
    category: 'major',
    image: 'images/Sports/Chess.jpg',
    description: 'A battle of strategy and intellect on the chessboard.',
    rules: [
      'Individual participation only',
      'Time control decided by organizers',
      'FIDE rules followed',
      'Fair play is mandatory'
    ],
    teamSize: 'Individual',
    spocDetails: 'Anurag rao : 9845562507',
    format: 'TBD based on entries',
    registrations: [
      { label: 'Register Here', link: 'https://forms.office.com/r/riT4guEyUP' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'tennis',
    name: 'Tennis',
    category: 'major',
    image: 'images/Sports/Tennis.jpg',
    description: 'Singles tennis tournament focusing on technique, stamina, and consistency.',
    rules: [
      'Singles and Doubles categories',
      'Standard tennis scoring',
      'Knockout tournament',
      'Players must bring racquets'
    ],
    teamSize: 'Individual/Doubles',
    spocDetails: 'Arnav : 9049005484\nAmartya : 9063431106',
    format: 'Knockout',
    registrations: [
      { label: 'Mens Singles', link: 'https://forms.gle/RtZ5Ef2CZ6eDwvj19' },
      { label: 'Mens Doubles', link: 'https://forms.gle/aQqtchFj9bQMprq9A' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'throwball',
    name: 'Throwball',
    category: 'major',
    image: 'images/Sports/ThrowBall.jpg',
    description: 'Team-based throwball matches focusing on coordination and quick reflexes.',
    rules: [
      'Team size: 12 players',
      'Best of 3 sets',
      'Catch-and-throw rules apply',
      'No running with the ball',
      'Standard throwball rules followed'
    ],
    teamSize: '7 + 5 substitutes',
    spocDetails: 'Sakina : 7506012652\nTirth : 9898669450',
    format: 'League + Knockout',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/83YBg7sniFbJizir6' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  /* ===================== MINOR SPORTS ===================== */

  {
    id: 'gully-cricket',
    name: 'Gully Cricket',
    category: 'minor',
    image: 'images/Sports/GullyCricket.jpg',
    description: 'Street-style cricket with simplified rules and high energy.',
    rules: [
      'minimum 1 girl player mandatory',
      'No hard ball',
      'One pitch catch rules apply',
      'Umpire decision is final'
    ],
    teamSize: '5 + 1 substitute',
    spocDetails: 'Manvith : 9390539041\nAmitash : 7338450486',
    
    format: 'Knockout',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/Faht41q4Fdia11qa8' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'carrom',
    name: 'Carrom',
    category: 'minor',
    image: 'images/Sports/Carroms.jpg',
    description: 'Precision-based indoor board game competition.',
    rules: [
      'Knockout format',
      'Standard carrom rules',
      'Queen cover mandatory',
      'No foul tolerance'
    ],
    teamSize: 'Doubles',
    spocDetails: 'Puttaraja B : 7975306931',
    format: 'Knockout',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/2pu4HxzeJoE67UpN9' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'tug-of-war',
    name: 'Tug of War (Gym)',
    category: 'minor',
    image: 'images/Sports/TugOfWar.jpg',
    description: 'Strength-based team competition testing coordination and power.',
    rules: [
      'Fixed team size',
      'Best of 3 pulls',
      'No sitting or lying',
      'Footwear mandatory',
      'Referee decision final'
    ],
    teamSize: '5 + 3 substitutes',
    spocDetails: 'Maadhav Patil : 9910093697',
    format: 'Knockout',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/DkeoxBCcDbMxGMBn6' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'pentathlon',
    name: 'Pentathlon (Gym)',
    category: 'minor',
    image: 'images/Sports/Pentathlon.jpg',
    description: 'Multi-discipline fitness challenge testing overall athletic ability.',
    rules: [
      'Five fitness events',
      'Points-based scoring',
      'Individual participation',
      'Time limits enforced',
      'Proper sportswear required'
    ],
    teamSize: 'Individual',
    spocDetails: 'Maadhav Patil : 9910093697',
    format: 'Points Based',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/S8PYuDFbTEq4wS6p8' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  /* ===================== ESPORTS ===================== */

  {
    id: 'clash-royale',
    name: 'Clash Royale',
    category: 'esports',
    image: 'images/Sports/Esports/CLashRoyale.jpeg',
    description: 'Real-time strategy battles in Clash Royale.',
    rules: [
      '1v1 matches',
      'Knockout format',
      'Fair play mandatory',
      'Own accounts only',
      'Stable internet required'
    ],
    teamSize: 'Individual',
    spocDetails: 'Kabir Ahuja : 7888365964',
    format: 'Knockout',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/9ij6oaX1f8KnkpMa6' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'smash-karts',
    name: 'Smash Karts',
    category: 'esports',
    image: 'images/Sports/Esports/SmashKarts.png',
    description: 'Fast-paced kart combat game with multiplayer battles.',
    rules: [
      'Format decided based on registrations',
      'Multiple rounds',
      'Points-based ranking',
      'No external mods',
      'Organizer rules apply'
    ],
    teamSize: '3 players',
    spocDetails: 'Revanth : 9059219192',
    format: 'League',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/p4dnCZLJshSjhErPA' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'fifa',
    name: 'FIFA',
    category: 'esports',
    image: 'images/Sports/Esports/Fifa.png',
    description: 'Competitive FIFA matches showcasing football gaming skills.',
    rules: [
      '1v1 , 2V2 matches',
      'Standard match settings',
      'Knockout format',
      'No custom teams',
      'Controller only'
    ],
    teamSize: 'Individual',
    spocDetails: 'Muawiyah : 9028993731',
    format: 'Knockout',
    registrations: [
      { label: 'Singles', link: 'https://forms.gle/zWbCpL6gjzY8Hcq1A' },
      { label: 'Doubles', link: 'https://forms.gle/7XfEFfptUpHc658u6' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'codm',
    name: 'CODM',
    category: 'esports',
    image: 'images/Sports/Esports/CODM.jpg',
    description: 'Call of Duty Mobile competitive multiplayer battles.',
    rules: [
      '5v5 team format',
      'Search & Destroy / Hardpoint',
      'Knockout rounds',
      'No emulators allowed',
      'Anti-cheat enforced'
    ],
    teamSize: '5 players',
    spocDetails: 'Hardhik : 7330820828',
    format: 'Knockout',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/i5yqCsUw4QkFL8My7' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'valorant',
    name: 'Valorant',
    category: 'esports',
    image: 'images/Sports/Esports/Valorant.png',
    description: 'Tactical FPS esports tournament.',
    rules: [
      '5v5 matches',
      'Standard competitive rules',
      'Knockout format',
      'No cheats or exploits',
      'Admin decision final'
    ],
    teamSize: '5 players',  
    spocDetails: 'Mohith Gupta :8733807658',
    format: 'Knockout',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/CxLUT4R7YtTwP77E8' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  },

  {
    id: 'bgmi',
    name: 'BGMI',
    category: 'esports',
    image: 'images/Sports/Esports/BGMI.webp',
    description: 'Battle royale esports competition.',
    rules: [
      'Squad format',
      'Multiple matches',
      'Points-based ranking',
      'No emulators allowed',
      'Fair play mandatory'
    ],
    teamSize: '4 players',
    spocDetails: 'Ansh : 9624485222',
    format: 'League',
    registrations: [
      { label: 'Register Here', link: 'https://forms.gle/5iw2E1cB5qCsxifA7' }
    ],
    // rulesLink: 'https://example.com/athletics-rules.pdf'
  }
];
