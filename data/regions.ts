export interface Sanctuary {
  name: string;
  kanji: string;
  location: string;
  period: string;
  description: string;
  culturalNote: string;
}

export interface Landmark {
  title: string;
  type: string;
  location: string;
  description: string;
}

export interface CulinaryItem {
  dish: string;
  japanese: string;
  description: string;
}

export interface RegionData {
  id: string;
  slug: string;
  name: string;
  kanji: string;
  romaji: string;
  tagline: string;
  provinces: string[]; // Prefectures
  overview: string;
  keyStats: {
    prefectures: number;
    unescoSites: string;
    bestSeason: string;
    gatewayTransit: string;
  };
  sanctuaries: Sanctuary[];
  naturalLandscapes: Landmark[];
  culinaryHighlights: CulinaryItem[];
  craftsAndTraditions: string[];
  travelTips: {
    transport: string;
    etiquette: string;
    recommendedStay: string;
  };
  colorAccent: string;
}

export const JAPAN_REGIONS: RegionData[] = [
  {
    id: 'hokkaido',
    slug: 'hokkaido',
    name: 'Hokkaido',
    kanji: '北海道',
    romaji: 'Hokkaidō',
    tagline: 'Northern wilderness, sacred volcanic peaks, and indigenous Ainu heritage',
    provinces: ['Hokkaido (Sapporo, Hakodate, Asahikawa, Otaru, Furano, Shiretoko, Kushiro, Obihiro)'],
    overview: 'Japan’s vast northernmost island is renowned for untouched alpine caldera lakes, smoking geothermal vents, deep powder snow, and expansive flower meadows. Distinct from mainland Honshu, Hokkaido preserves ancient Ainu heritage and magnificent protected wilderness parks.',
    keyStats: {
      prefectures: 1,
      unescoSites: 'Shiretoko National Park (Natural World Heritage)',
      bestSeason: 'Year-Round (Winter Powder Skiing / Summer Alpine Blooms)',
      gatewayTransit: 'New Chitose Airport (CTS) / Hokkaido Shinkansen to Hakodate',
    },
    sanctuaries: [
      {
        name: 'Hokkaido Jingu',
        kanji: '北海道神宮',
        location: 'Sapporo (Maruyama Park)',
        period: 'Founded 1869 CE',
        description: 'Hokkaido’s primary Shinto shrine stands surrounded by virgin forest and ancient giant elms in Sapporo. Established during the Meiji Restoration to enshrine the guardian deities of Hokkaido’s pioneer development.',
        culturalNote: 'One of the few shrines celebrating both cherry blossoms and plum blossoms blooming simultaneously in early May due to the northern climate.',
      },
      {
        name: 'Kamiti Kamuy-kotan',
        kanji: '神居古潭',
        location: 'Asahikawa Valley',
        period: 'Ancient Ainu Sacred Ground',
        description: 'A dramatic ravine on the Ishikari River revered by the Ainu as the dwelling place of river deities and powerful spirits.',
        culturalNote: 'Respect the marked spiritual viewing platforms and learn about Ainu folklore at the adjacent heritage exhibits.',
      },
    ],
    naturalLandscapes: [
      {
        title: 'Shiretoko Peninsula',
        type: 'UNESCO World Natural Heritage',
        location: 'Eastern Hokkaido',
        description: 'One of the lowest-latitude sea ice formation areas in the northern hemisphere, home to brown bears, Blakiston’s fish owls, and Steller’s sea eagles.',
      },
      {
        title: 'Daisetsuzan National Park',
        type: 'Alpine Wilderness',
        location: 'Central Hokkaido',
        description: 'Known in the Ainu language as "Kamui Mintara" (Playground of the Gods), featuring Asahidake, the highest volcanic summit in Hokkaido.',
      },
      {
        title: 'Noboribetsu Jigokudani',
        type: 'Geothermal Valley & Hot Springs',
        location: 'Iburi Subprefecture',
        description: 'The "Hell Valley" where sulfurous steam rises from boiling volcanic vents feeding historic mineral hot-spring baths.',
      },
    ],
    culinaryHighlights: [
      {
        dish: 'Sapporo Miso Ramen',
        japanese: '札幌味噌ラーメン',
        description: 'Thick wavy noodles served in a rich, piping-hot broth flavored with local fermented miso, butter, sweet corn, and tender char siu pork.',
      },
      {
        dish: 'Hokkaido Uni & Kani Kaisendon',
        japanese: '海鮮丼',
        description: 'Steamed sushi rice bowl heaped with pristine cold-water sea urchin, king crab legs, and glistening salmon roe (ikura).',
      },
      {
        dish: 'Genghis Khan (Jingisukan)',
        japanese: 'ジンギスカン',
        description: 'Thinly sliced tender mutton or lamb grilled over a convex helmet-shaped iron skillet with onions and bean sprouts.',
      },
    ],
    craftsAndTraditions: [
      'Ainu Nibutani-ita wooden carved trays and Nibutani-attus bark weaving (Officially recognized Traditional Crafts)',
      'Otaru mouth-blown studio glassware and kerosene oil lamps',
      'Asahikawa precision timber woodworking and furniture',
    ],
    travelTips: {
      transport: 'JR Hokkaido Rail Pass offers seamless travel between Sapporo, Hakodate, and Asahikawa. A rental car is ideal for exploring eastern national parks.',
      etiquette: 'At natural hot spring onsens, thoroughly wash and rinse before soaking, and never bring footwear or soap into the mineral baths.',
      recommendedStay: '5 to 8 days to comfortably experience Sapporo, Otaru, and either Daisetsuzan or Shiretoko.',
    },
    colorAccent: '#4f8096',
  },
  {
    id: 'tohoku',
    slug: 'tohoku',
    name: 'Tohoku',
    kanji: '東北',
    romaji: 'Tōhoku',
    tagline: 'Cliffside mountain temples, golden halls, and primeval beech forests',
    provinces: ['Aomori', 'Iwate', 'Miyagi', 'Akita', 'Yamagata', 'Fukushima'],
    overview: 'Comprising six northern prefectures on Honshu, Tohoku is an evocative realm of dramatic mountain temples, deep onsen valleys, feudal samurai castle towns, and storied summer festivals (Nebuta, Kanto, Tanabata). It remains one of Japan’s most authentic and unspoiled spiritual destinations.',
    keyStats: {
      prefectures: 6,
      unescoSites: 'Hiraizumi (Chuson-ji) & Shirakami Sanchi (Ancient Beech Forest)',
      bestSeason: 'Autumn (October–November Foliage) / Summer (August Matsuri)',
      gatewayTransit: 'Tohoku Shinkansen (Tokyo to Sendai: 90 mins / Shin-Aomori: 3 hrs)',
    },
    sanctuaries: [
      {
        name: 'Yamadera (Risshaku-ji)',
        kanji: '山寺 (宝珠山立石寺)',
        location: 'Yamagata Prefecture',
        period: 'Founded 860 CE by Ennin (Jikaku Daishi)',
        description: 'Clustered along steep forested rock cliffs, Yamadera comprises over 30 sub-temples reached by climbing 1,015 stone steps. Immortalized by haiku master Matsuo Basho with his verse: "Stillness—sinking into the rocks, the cicada’s cry."',
        culturalNote: 'Climb early in the morning when the morning mountain mist rises through towering cedars to the Godaido observation deck.',
      },
      {
        name: 'Chuson-ji & Konjikido (Golden Hall)',
        kanji: '中尊寺 金色堂',
        location: 'Hiraizumi, Iwate Prefecture',
        period: 'Founded 850 CE; Golden Hall completed 1124 CE',
        description: 'The crowning jewel of the Northern Fujiwara clan’s Buddhist Utopia, the Konjikido is completely covered inside and out in gold leaf and mother-of-pearl raden inlay, housing three Pure Land Buddhist altars.',
        culturalNote: 'UNESCO World Cultural Heritage site representing the Buddhist concept of the Pure Land heaven realized on earth.',
      },
      {
        name: 'Dewasanzan (Three Sacred Mountains of Dewa)',
        kanji: '出羽三山',
        location: 'Yamagata Prefecture (Gassan, Hagurosan, Yudonosan)',
        period: 'Centuries-old Shugendo mountain asceticism',
        description: 'The spiritual heart of Shugendo mountain worship, featuring Mount Haguro’s ancient Five-Story Pagoda standing among 500-year-old cedars, representing death and rebirth.',
        culturalNote: 'Ascetic pilgrims known as Yamabushi still blow horagai conch shells and undergo waterfall purification rites here.',
      },
    ],
    naturalLandscapes: [
      {
        title: 'Matsushima Bay',
        type: 'Three Views of Japan (Nihon Sankei)',
        location: 'Miyagi Prefecture',
        description: 'Over 260 pine-clad islets scattered across calm coastal waters, celebrated in classic Japanese poetry for over a millennium.',
      },
      {
        title: 'Oirase Mountain Stream & Lake Towada',
        type: 'National Special Place of Scenic Beauty',
        location: 'Aomori Prefecture',
        description: 'A 14-kilometer moss-draped river gorge flanked by cascading waterfalls and dense deciduous virgin forests.',
      },
      {
        title: 'Ginzan Onsen',
        type: 'Taisho-era Hot Spring Town',
        location: 'Yamagata Prefecture',
        description: 'Picturesque riverside hot-spring hamlet with multistory wooden ryokan inns and gas lamps resembling a historic woodblock print.',
      },
    ],
    culinaryHighlights: [
      {
        dish: 'Sendai Gyutan-yaki',
        japanese: '仙台牛たん焼き',
        description: 'Specially aged, charcoal-grilled beef tongue served with barley rice, spicy pickled vegetables, and clear oxtail broth.',
      },
      {
        dish: 'Morioka Wanko Soba',
        japanese: 'わんこそば',
        description: 'Playful eating tradition of endless bite-sized bowls of buckwheat noodles served rhythmically until you cap your bowl.',
      },
      {
        dish: 'Akita Kiritanpo Nabe',
        japanese: 'きりたんぽ鍋',
        description: 'Mashed freshly harvested rice toasted around cedar skewers, simmered in Hinai-jidori chicken broth with maitake mushrooms and leeks.',
      },
    ],
    craftsAndTraditions: [
      'Nambu Tekki cast-iron tea kettles from Morioka with heat-retaining hobnail patterns',
      'Tsugaru-nuri layered lacquerware featuring multi-hued mottled patterns polished over 50 coats',
      'Aomori Nebuta Festival monumental illuminated washi-paper parade floats',
    ],
    travelTips: {
      transport: 'JR East Tohoku Area Pass grants 5 consecutive days of unlimited travel on all Tohoku Shinkansen lines and regional trains.',
      etiquette: 'When visiting remote mountain shrines like Dewasanzan, tread softly along stone paths and preserve the quiet atmosphere.',
      recommendedStay: '4 to 6 days covering Sendai, Matsushima, Yamadera, and Hiraizumi.',
    },
    colorAccent: '#92614b',
  },
  {
    id: 'kanto',
    slug: 'kanto',
    name: 'Kanto',
    kanji: '関東',
    romaji: 'Kantō',
    tagline: 'Tokyo’s vibrant pulse, ancient Kamakura temples, and Nikko’s mountain sanctuaries',
    provinces: ['Tokyo', 'Kanagawa', 'Chiba', 'Saitama', 'Tochigi', 'Gunma', 'Ibaraki'],
    overview: 'Centering on Tokyo, the Kanto plain is Japan’s most populous region, where hyper-futuristic neon districts seamlessly intertwine with ancient religious landmarks like Asakusa’s Senso-ji and Nikko’s ornate UNESCO mountain shrines.',
    keyStats: {
      prefectures: 7,
      unescoSites: 'Shrines and Temples of Nikko / Le Corbusier National Museum of Western Art',
      bestSeason: 'Spring (Sakura in March–April) & Autumn (November Foliage)',
      gatewayTransit: 'Tokyo Haneda (HND) / Narita (NRT) / Tokyo & Shinjuku Train Terminals',
    },
    sanctuaries: [
      {
        name: 'Senso-ji',
        kanji: '浅草寺',
        location: 'Asakusa, Tokyo',
        period: 'Founded 645 CE',
        description: 'Tokyo’s oldest Buddhist temple, dedicated to Kannon Bodhisattva of Mercy. Marked by the colossal red Kaminarimon (Thunder Gate) paper lantern and the historic Nakamise market approach.',
        culturalNote: 'Cleanse hands and mouth at the dragon water fountain and draw an omikuji fortune paper from the wooden canisters.',
      },
      {
        name: 'Meiji Jingu',
        kanji: '明治神宮',
        location: 'Shibuya, Tokyo',
        period: 'Completed 1920 CE',
        description: 'A serene 70-hectare forest sanctuary created from 100,000 trees donated from across Japan, dedicated to Emperor Meiji and Empress Shoken right next to bustling Harajuku.',
        culturalNote: 'Witness traditional Shinto weddings with the bride in a pure white shiromuku kimono led under a large red parasol.',
      },
      {
        name: 'Nikko Toshogu Shrine',
        kanji: '日光東照宮',
        location: 'Nikko, Tochigi Prefecture',
        period: 'Completed 1617 CE / Expanded 1636 CE',
        description: 'The lavish mausoleum of Tokugawa Ieyasu, founder of the Edo Shogunate. Over 500 intricately carved and gilded figures adorn the Yomeimon Gate, including the Three Wise Monkeys and Sleeping Cat.',
        culturalNote: 'UNESCO World Heritage site blending Buddhist and Shinto architecture nestled within ancient Nikko cedars.',
      },
      {
        name: 'Kotoku-in (The Great Buddha of Kamakura)',
        kanji: '高徳院 鎌倉大仏',
        location: 'Kamakura, Kanagawa Prefecture',
        period: 'Cast in 1252 CE',
        description: 'A monumental outdoor bronze statue of Amida Buddha standing 13.35 meters tall. Formerly enclosed in a grand wooden hall that was washed away by a 15th-century tsunami.',
        culturalNote: 'Visitors can enter the hollow interior of the bronze sculpture to examine the 750-year-old medieval casting techniques.',
      },
    ],
    naturalLandscapes: [
      {
        title: 'Hakone & Lake Ashi',
        type: 'Fuji-Hakone-Izu National Park',
        location: 'Kanagawa Prefecture',
        description: 'Famous mountain onsen resort offering postcard views of Mount Fuji reflected across Lake Ashi behind the red floating torii of Hakone Shrine.',
      },
      {
        title: 'Kegon Falls & Lake Chuzenji',
        type: 'Scenic Waterfall',
        location: 'Nikko National Park, Tochigi',
        description: 'Nearly 100-meter-high plunge waterfall discharging from Lake Chuzenji through dramatic basalt lava columns.',
      },
    ],
    culinaryHighlights: [
      {
        dish: 'Edomae Nigiri Sushi',
        japanese: '江戸前寿司',
        description: 'Fresh seafood lightly cured in red vinegar, soy, or kelp placed on warm seasoned vinegared rice, perfected in old Edo.',
      },
      {
        dish: 'Tokyo Shoyu Ramen & Tsukemen',
        japanese: '東京醤油ラーメン',
        description: 'Clear chicken, dashi, and dark soy broth noodles, or thick dipping noodles served with concentrated dipping broth.',
      },
      {
        dish: 'Monjayaki',
        japanese: 'もんじゃ焼き',
        description: 'Tokyo’s savory pan-fried batter specialty loaded with cabbage, squid, mentaiko (pollock roe), and melted cheese, eaten with tiny spatulas.',
      },
    ],
    craftsAndTraditions: [
      'Edo Kiriko cut glassware featuring brilliant diamond and geometric light-refracting cuts',
      'Tokyo Honzome traditional stencil resist-dyeing for yukata and tenugui cotton cloths',
      'Kamakura-bori carved cedar lacquerware with deep relief carvings',
    ],
    travelTips: {
      transport: 'Navigate Tokyo with digital Suica/Pasmo IC cards on your phone. For excursions to Nikko or Kamakura, use Tobu Nikko Passes or Enoshima-Kamakura Day Passes.',
      etiquette: 'Keep escalators clear on the right side in Tokyo (people stand on the left). Phone conversations are strictly prohibited on trains.',
      recommendedStay: '4 to 7 days to absorb Tokyo’s major quarters alongside day trips to Kamakura and Nikko.',
    },
    colorAccent: '#c83e2b',
  },
  {
    id: 'chubu',
    slug: 'chubu',
    name: 'Chubu',
    kanji: '中部',
    romaji: 'Chūbu',
    tagline: 'The Japanese Alps, historic thatched farmhouses, and Mount Fuji’s sacred slopes',
    provinces: ['Nagano', 'Niigata', 'Toyama', 'Ishikawa', 'Fukui', 'Gifu', 'Shizuoka', 'Aichi', 'Yamanashi'],
    overview: 'Bridging eastern and western Honshu, Chubu is crowned by the soaring 3,000-meter peaks of the Japanese Alps and sacred Mount Fuji. It encompasses the historic samurai arts of Kanazawa, the UNESCO thatched villages of Shirakawa-go, and Nagano’s ancient Buddhist pilgrimage paths.',
    keyStats: {
      prefectures: 9,
      unescoSites: 'Mount Fuji / Historic Villages of Shirakawa-go and Gokayama',
      bestSeason: 'Spring–Autumn for Alpine Treks / Winter for Snow Villages & Skiing',
      gatewayTransit: 'Hokuriku Shinkansen (Tokyo to Kanazawa: 2.5 hrs) / Tokaido Shinkansen (Nagoya)',
    },
    sanctuaries: [
      {
        name: 'Zenko-ji',
        kanji: '善光寺',
        location: 'Nagano City',
        period: 'Founded in the 7th Century CE (642 CE)',
        description: 'One of Japan’s most important pilgrimage destinations, housing the very first Buddhist statue brought to Japan. It welcomes followers of all denominations and gender equally.',
        culturalNote: 'Experience the "Okaidan Meguri" underground passage walk in complete pitch-black darkness to touch the Key to Paradise located directly beneath the hidden Buddha.',
      },
      {
        name: 'Fujisan Hongu Sengen Taisha',
        kanji: '富士山本宮浅間大社',
        location: 'Fujinomiya, Shizuoka Prefecture',
        period: 'Origin dates over 2,000 years ago',
        description: 'The head shrine of all 1,300 Sengen shrines across Japan, established to placate the volcanic spirit of Mount Fuji (Konohanasakuya-hime). Its sacred territory includes the mountain summit itself.',
        culturalNote: 'The crystal-clear Wakutama Pond in the shrine grounds is fed entirely by snowmelt percolating through Mount Fuji’s volcanic layers.',
      },
      {
        name: 'Myoryu-ji (Ninja Temple)',
        kanji: '妙立寺',
        location: 'Kanazawa, Ishikawa Prefecture',
        period: 'Constructed 1643 CE',
        description: 'Though technically a Nichiren Buddhist temple, it was cleverly fortified with hidden staircases, trapdoors, escape tunnels, and secret observation rooms to guard the Maeda samurai clan.',
        culturalNote: 'Advanced reservations are required for the guided labyrinth tour through 23 rooms and 29 stairs.',
      },
    ],
    naturalLandscapes: [
      {
        title: 'Shirakawa-go & Gokayama',
        type: 'UNESCO World Cultural Heritage',
        location: 'Gifu & Toyama Prefectures',
        description: 'Isolated mountain valley villages of steep, thatched-roof "Gassho-zukuri" (hands in prayer) timber houses engineered to withstand heavy winter snowfalls.',
      },
      {
        title: 'Kamikochi (Chubu Sangaku National Park)',
        type: 'Special Natural Monument',
        location: 'Nagano Prefecture',
        description: 'A pristine highland plateau along the Azusa River overlooked by the active volcano Mount Yakedake and the majestic Hotaka Mountain Range.',
      },
      {
        title: 'Kenroku-en Garden',
        type: 'Three Great Gardens of Japan',
        location: 'Kanazawa, Ishikawa Prefecture',
        description: 'Exquisite feudal landscape garden embodying the six classical attributes: spaciousness, seclusion, artifice, antiquity, water-courses, and expansive panoramas.',
      },
    ],
    culinaryHighlights: [
      {
        dish: 'Hida Beef Sukiyaki & Nigiri',
        japanese: '飛騨牛',
        description: 'Black-haired Kuroge wagyu raised in the pure mountain air of Gifu, prized for marbling that melts effortlessly on the tongue.',
      },
      {
        dish: 'Shinshu Soba Noodles',
        japanese: '信州そば',
        description: 'Buckwheat noodles crafted with pure Alpine snowmelt water, served chilled on bamboo sieves with fresh wasabi grated from Azumino farms.',
      },
      {
        dish: 'Hitsumabushi (Nagoya Grilled Eel)',
        japanese: 'ひつまぶし',
        description: 'Charcoal-grilled unagi served over rice enjoyed three ways: plain, with wasabi and green onions, and submerged in warm dashi broth (ochazuke).',
      },
    ],
    craftsAndTraditions: [
      'Kanazawa Haku gold leaf craftsmanship producing 99% of all gold leaf in Japan',
      'Wajima-nuri hard-wearing Urushi lacquerware from the Noto Peninsula',
      'Takayama Shunkei lacquerware highlighting natural cedar and cypress grain',
    ],
    travelTips: {
      transport: 'The Hokuriku Shinkansen connects Tokyo, Nagano, Toyama, and Kanazawa. Scenic Highway express buses link Takayama and Shirakawa-go.',
      etiquette: 'In the preserved Gassho-zukuri villages, respect residents’ privacy, never enter marked farmland, and adhere to strict no-smoking rules to protect thatch.',
      recommendedStay: '4 to 6 days covering Kanazawa, Takayama, and Shirakawa-go with an onsen retreat.',
    },
    colorAccent: '#a07842',
  },
  {
    id: 'kansai',
    slug: 'kansai',
    name: 'Kansai',
    kanji: '関西',
    romaji: 'Kansai',
    tagline: 'Kyoto’s imperial heritage, Nara’s ancient capitals, and sacred Mount Koya',
    provinces: ['Kyoto', 'Osaka', 'Nara', 'Hyogo', 'Shiga', 'Wakayama', 'Mie'],
    overview: 'The cultural and spiritual heartland of Japan. Kansai served as the imperial seat of power for over a millennium. Here, thousands of Buddhist temples, Shinto sanctuaries, zen rock gardens, and sacred pilgrimage trails (Kumano Kodo) preserve Japan’s deepest aesthetic and spiritual soul.',
    keyStats: {
      prefectures: 7,
      unescoSites: 'Historic Monuments of Ancient Kyoto / Ancient Nara / Himeji Castle / Sacred Sites and Pilgrimage Routes in the Kii Mountain Range',
      bestSeason: 'Spring (Cherry Blossoms) & Late Autumn (Peak Kyoto Maples)',
      gatewayTransit: 'Kansai International Airport (KIX) / Tokaido-Sanyo Shinkansen (Kyoto & Shin-Osaka)',
    },
    sanctuaries: [
      {
        name: 'Fushimi Inari Taisha',
        kanji: '伏見稲荷大社',
        location: 'Kyoto City',
        period: 'Founded 711 CE',
        description: 'The supreme head shrine of Inari, the Shinto kami of rice, sake, and prosperity. Renowned worldwide for the Senbon Torii—over 10,000 vibrant vermilion torii gates winding up the sacred forested mountain trail.',
        culturalNote: 'Stone fox statues (kitsune) stand guardian throughout, holding keys to rice granaries and jewels in their mouths.',
      },
      {
        name: 'Kinkaku-ji (Golden Pavilion)',
        kanji: '金閣寺 (鹿苑寺)',
        location: 'Northern Kyoto',
        period: 'Built 1397 CE by Shogun Ashikaga Yoshimitsu',
        description: 'A Zen temple whose top two floors are entirely coated in pure gold leaf, reflecting serenely across the mirror-like Kyoko-chi pond surrounded by sculpted pines.',
        culturalNote: 'Topped by a bronze Chinese phoenix (Fenghuang), it epitomizes the opulent Kitayama cultural period.',
      },
      {
        name: 'Todai-ji & Daibutsuden',
        kanji: '東大寺 大仏殿',
        location: 'Nara City',
        period: 'Founded 738 CE / Dedicated 752 CE',
        description: 'One of the world’s largest wooden buildings, housing the Great Bronze Buddha (Daibutsu), a 15-meter-high statue of Vairocana Buddha representing cosmic enlightenment.',
        culturalNote: 'Over 1,000 gentle wild deer roam freely through the temple precinct, venerated as sacred divine messengers of the gods.',
      },
      {
        name: 'Koyasan (Mount Koya & Okunoin)',
        kanji: '高野山 奥之院',
        location: 'Wakayama Prefecture',
        period: 'Founded 816 CE by Kobo Daishi (Kukai)',
        description: 'The world monastic center of Shingon Esoteric Buddhism situated on a high mountain basin. Its sacred cemetery Okunoin holds over 200,000 moss-covered stone stupas and monuments illuminated by thousands of lanterns.',
        culturalNote: 'Stay in a Shukubo (temple lodging) to experience shojin ryori vegetarian cooking and participate in dawn fire rituals (Goma).',
      },
      {
        name: 'Ise Jingu',
        kanji: '伊勢神宮',
        location: 'Ise, Mie Prefecture',
        period: 'Dating back over 2,000 years',
        description: 'The most sacred Shinto shrine complex in all of Japan, dedicated to the Sun Goddess Amaterasu Omikami, progenitor of the Imperial Household.',
        culturalNote: 'Every 20 years, the inner and outer main shrines are completely rebuilt anew (Shikinen Sengu) to preserve eternal purity and ancestral carpentry techniques.',
      },
    ],
    naturalLandscapes: [
      {
        title: 'Kumano Kodo Ancient Pilgrimage Trails',
        type: 'UNESCO World Heritage Pilgrimage',
        location: 'Wakayama, Mie, & Nara',
        description: 'Centuries-old stone-paved pilgrimage routes weaving across misty mountain ridges connecting the three Grand Shrines of Kumano (Hongu, Hayatama, Nachi).',
      },
      {
        title: 'Nachi Falls (Nachi no Otaki)',
        type: 'Sacred Waterfall',
        location: 'Wakayama Prefecture',
        description: 'A thundering 133-meter uninterrupted single drop framed alongside the vermilion three-story pagoda of Seiganto-ji temple.',
      },
    ],
    culinaryHighlights: [
      {
        dish: 'Kyoto Kaiseki Ryori',
        japanese: '懐石料理',
        description: 'The pinnacle of traditional Japanese multi-course dining, carefully balancing seasonal flavors, exquisite ceramics, and culinary poetry.',
      },
      {
        dish: 'Shojin Ryori (Temple Cuisine)',
        japanese: '精進料理',
        description: 'Zen Buddhist vegetarian cooking utilizing tofu, seasonal mountain vegetables, kelp dashi, and seasonal pickles.',
      },
      {
        dish: 'Osaka Dotonbori Street Food (Takoyaki & Okonomiyaki)',
        japanese: 'たこ焼き / お好み焼き',
        description: 'Crisp, molten octopus balls brushed with sweet savory glaze and layered cabbage-egg savory pancakes sprinkled with dancing bonito flakes.',
      },
      {
        dish: 'Kobe Wagyu Beef',
        japanese: '神戸ビーフ',
        description: 'World-famous Tajima beef from Hyogo Prefecture featuring peerless marbling, grilled teppanyaki-style with sea salt and garlic chips.',
      },
    ],
    craftsAndTraditions: [
      'Nishijin-ori silk weaving for kimonos and obi sashes perfected over 1,200 years in Kyoto',
      'Kiyomizu-yaki ceramics and matcha tea ware',
      'Uji green tea cultivation and Chanoyu (Japanese Tea Ceremony) mastery',
    ],
    travelTips: {
      transport: 'Kansai Thru Pass or JR Kansai Area Pass covers rail and subway links across Kyoto, Osaka, Nara, and Kobe effortlessly.',
      etiquette: 'In Kyoto’s historic Gion district, respect working geiko and maiko—do not obstruct paths or photograph without consent. Always remove shoes before stepping onto tatami mats.',
      recommendedStay: '5 to 9 days to do justice to Kyoto’s temples, Nara’s parklands, and an overnight stay on Koyasan.',
    },
    colorAccent: '#e0231c',
  },
  {
    id: 'chugoku',
    slug: 'chugoku',
    name: 'Chugoku',
    kanji: '中国',
    romaji: 'Chūgoku',
    tagline: 'Miyajima’s floating torii, ancient Izumo myths, and the serene Seto Inland Sea',
    provinces: ['Hiroshima', 'Okayama', 'Tottori', 'Shimane', 'Yamaguchi'],
    overview: 'Dominating western Honshu, Chugoku is bordered by the Sea of Japan to the north and the island-studded Seto Inland Sea to the south. It holds Japan’s oldest mythological beginnings at Izumo Taisha, Hiroshima’s moving peace monuments, and Miyajima’s floating Grand Torii.',
    keyStats: {
      prefectures: 5,
      unescoSites: 'Itsukushima Shinto Shrine (Miyajima) & Hiroshima Peace Memorial (Genbaku Dome) / Iwami Ginzan Silver Mine',
      bestSeason: 'Spring & Autumn (Mild Coastal Weather / Clear Skies)',
      gatewayTransit: 'Sanyo Shinkansen (Shin-Osaka to Hiroshima: 85 mins / Okayama: 45 mins)',
    },
    sanctuaries: [
      {
        name: 'Itsukushima Shrine & Grand Torii',
        kanji: '厳島神社 大鳥居',
        location: 'Miyajima Island, Hiroshima Prefecture',
        period: 'Established 593 CE; Reconstructed in current layout 1168 CE by Taira no Kiyomori',
        description: 'A masterwork of pier-supported shrine architecture built directly over a tidal inlet so that at high tide the entire sanctuary and its monumental 16-meter vermilion torii gate appear to float upon the sea.',
        culturalNote: 'At low tide, visitors can walk out onto the tidal mudflats directly to the base of the colossal camphor-wood torii gate.',
      },
      {
        name: 'Izumo Taisha',
        kanji: '出雲大社',
        location: 'Izumo, Shimane Prefecture',
        period: 'One of Japan’s oldest shrines, recorded in the Kojiki (712 CE)',
        description: 'Dedicated to Okuninushi no Mikoto, deity of relationships and marriage. Features the largest shimenawa (sacred twisted straw rope) in Japan, weighing 5.2 tons and hanging from the Kaguraden hall.',
        culturalNote: 'Every tenth lunar month (Kamiarizuki, the "Month with Gods"), all eight million Shinto deities across Japan are believed to assemble at Izumo.',
      },
      {
        name: 'Motonosumi Shrine',
        kanji: '元乃隅神社',
        location: 'Nagato, Yamaguchi Prefecture',
        period: 'Established 1955 CE',
        description: 'A striking cliffside path of 123 vermilion torii gates curving down toward the crashing blue waves of the Sea of Japan.',
        culturalNote: 'The shrine’s donation box is mounted high above the final torii gate; landing a coin inside is said to grant your wish.',
      },
    ],
    naturalLandscapes: [
      {
        title: 'Tottori Sand Dunes',
        type: 'Geological Natural Monument',
        location: 'Tottori Prefecture',
        description: 'Sprawling coastal sand dunes spanning 16 kilometers along the Sea of Japan, sculpted continuously by ocean winds.',
      },
      {
        title: 'Shimanami Kaido',
        type: 'Island-hopping Sea Route',
        location: 'Hiroshima to Ehime (Seto Inland Sea)',
        description: 'A world-famous 70-kilometer cycling expressway crossing seven bridges over tranquil island waters.',
      },
    ],
    culinaryHighlights: [
      {
        dish: 'Hiroshima-style Okonomiyaki',
        japanese: '広島風お好み焼き',
        description: 'Layered savory pancake with a thin crepe base, mountain of shredded cabbage, yakisoba noodles, pork belly, fried egg, and rich Otafuku sauce.',
      },
      {
        dish: 'Seto Inland Sea Grilled Oysters (Kaki)',
        japanese: '牡蠣の浜焼き',
        description: 'Fresh plump oysters harvested from the nutrient-rich waters of Hiroshima Bay, grilled over hot coals with lemon or ponzu.',
      },
      {
        dish: 'Izumo Soba',
        japanese: '出雲そば',
        description: 'Dark, fragrant buckwheat noodles ground with the husk, served in a three-tier circular lacquer box (Warigo soba).',
      },
    ],
    craftsAndTraditions: [
      'Bizen-yaki unglazed stoneware pottery from Okayama with natural ash flame marks fired in wood-burning kilns',
      'Miyajima shakushi wooden rice ladles carved from sweet-smelling cherry wood',
      'Hiroshima Kumano makeup and calligraphy brushes crafted by master brushmakers',
    ],
    travelTips: {
      transport: 'The JR Sanyo-San’in Area Pass offers 7 days of unlimited travel on the Sanyo Shinkansen (including Hello Kitty Shinkansen) and scenic coastal trains.',
      etiquette: 'On Miyajima Island, deer roam freely; do not feed or pet them, and take all litter with you back to the ferry terminal.',
      recommendedStay: '3 to 5 days including Hiroshima, Miyajima, and Kurashiki.',
    },
    colorAccent: '#3b6f84',
  },
  {
    id: 'shikoku',
    slug: 'shikoku',
    name: 'Shikoku',
    kanji: '四国',
    romaji: 'Shikoku',
    tagline: 'The 88-Temple Henro pilgrimage, 3,000-year-old onsens, and secluded emerald gorges',
    provinces: ['Tokushima', 'Kagawa', 'Ehime', 'Kochi'],
    overview: 'Separated from Honshu by the Seto Inland Sea, Shikoku is Japan’s fourth largest island. It is globally revered for the historic 1,200-kilometer 88-Temple Pilgrimage founded by Kobo Daishi, secluded mountain gorges like the Iya Valley, and historic Dogo Onsen.',
    keyStats: {
      prefectures: 4,
      unescoSites: 'Seto Inland Sea Biosphere / Cultural Pilgrimage Routes Nominee',
      bestSeason: 'Spring (March–May) & Autumn (October–November)',
      gatewayTransit: 'Okayama to Takamatsu via Seto Ohashi Bridge (Marine Liner: 55 mins) / Matsuyama Airport',
    },
    sanctuaries: [
      {
        name: 'The 88-Temple Pilgrimage (Shikoku Henro)',
        kanji: '四国八十八箇所',
        location: 'Circuit spanning all four prefectures',
        period: 'Founded 9th Century CE by Kobo Daishi (Kukai)',
        description: 'A 1,200-kilometer circular Buddhist pilgrimage circuit tracing Kukai’s spiritual steps through 88 sacred temples, divided into four spiritual stages: Awakening (Tokushima), Asceticism (Kochi), Enlightenment (Ehime), and Nirvana (Kagawa).',
        culturalNote: 'Pilgrims wear white robes (byakue), woven sedge hats (sugegasa), and carry a kongozue wooden walking staff representing the spirit of Kobo Daishi accompanying them (Dogo Ninin: "Two traveling together").',
      },
      {
        name: 'Kotohira-gu (Konpira-san)',
        kanji: '金刀比羅宮',
        location: 'Kotohira, Kagawa Prefecture',
        period: 'Origin dates to early antiquity',
        description: 'Perched on the forested slopes of Mount Zozu, this revered shrine protects mariners and sea voyages. Reaching the main shrine requires climbing 785 stone steps (1,368 steps to the inner shrine).',
        culturalNote: 'Pilgrims who could not travel would traditionally send their pet dogs ("Konpira-inu") wearing small pouch necklaces to complete the pilgrimage on their behalf.',
      },
      {
        name: 'Dogo Onsen Honkan',
        kanji: '道後温泉 本館',
        location: 'Matsuyama, Ehime Prefecture',
        period: 'Historic bathhouse built 1894 CE; Hot springs active 3,000 years',
        description: 'Japan’s oldest documented hot spring, featuring a magnificent three-story wooden bathhouse topped by the Shinrokaku tower with red stained-glass windows and a white heron emblem.',
        culturalNote: 'Served as the direct visual inspiration for Yubaba’s bathhouse in Studio Ghibli’s Academy Award-winning film "Spirited Away."',
      },
    ],
    naturalLandscapes: [
      {
        title: 'Iya Valley Vine Bridges (Kazurabashi)',
        type: 'Historic Suspension Bridge',
        location: 'Miyoshi, Tokushima Prefecture',
        description: 'Ancient 45-meter-long suspension bridges hand-woven from hardy mountain kiwi vines across rushing jade-green river gorges.',
      },
      {
        title: 'Ritsurin Garden',
        type: 'National Special Place of Scenic Beauty',
        location: 'Takamatsu, Kagawa Prefecture',
        description: 'A landscape masterpiece cultivated over 100 years by feudal lords, featuring 1,400 manicured black pine trees and the iconic crescent Moon Bridge.',
      },
      {
        title: 'Naruto Whirlpools',
        type: 'Tidal Phenomenon',
        location: 'Naruto Strait, Tokushima',
        description: 'Fierce tidal currents between the Pacific Ocean and Seto Inland Sea creating natural whirlpools up to 20 meters in diameter.',
      },
    ],
    culinaryHighlights: [
      {
        dish: 'Sanuki Udon',
        japanese: '讃岐うどん',
        description: 'Kagawa’s legendary handmade wheat noodles famous for their firm, chewy "koshi" texture, served in golden dashi broth with tempura flakes and spring onions.',
      },
      {
        dish: 'Katsuo no Tataki',
        japanese: '鰹のタタキ',
        description: 'Thick bonito fillets seared over raging rice straw fires in Kochi to impart smoky aroma, sliced thick with garlic, ginger, and coarse sea salt.',
      },
      {
        dish: 'Sudachi & Citrus Delights',
        japanese: 'すだち',
        description: 'Aromatic green citrus native to Tokushima, squeezed fresh over soba, grilled fish, or infused into refreshing chilled seltzers.',
      },
    ],
    craftsAndTraditions: [
      'Awa Shimi indigo dyeing from Tokushima ("Japan Blue") fermented using natural Sukumo leaves',
      'Tosa uchihamono hand-forged kitchen cutlery and blades from Kochi',
      'Awa Odori dance festival in August with spirited traditional shamisen and drums',
    ],
    travelTips: {
      transport: 'All Shikoku Rail Pass covers all JR Shikoku lines, Kotoden, Iyotetsu, and Tosa Kuroshio railways.',
      etiquette: 'If you encounter Henro pilgrims in white robes, locals practice "Osettai"—the warm tradition of offering small tokens, snacks, or tea to support their journey.',
      recommendedStay: '4 to 6 days covering Takamatsu, Iya Valley, Matsuyama, and Kochi.',
    },
    colorAccent: '#547d5f',
  },
  {
    id: 'kyushu-okinawa',
    slug: 'kyushu-okinawa',
    name: 'Kyushu & Okinawa',
    kanji: '九州・沖縄',
    romaji: 'Kyūshū & Okinawa',
    tagline: 'Volcanic calderas, mythological gorges, ancient subtropical cedars, and the Ryukyu Kingdom',
    provinces: ['Fukuoka', 'Saga', 'Nagasaki', 'Kumamoto', 'Oita', 'Miyazaki', 'Kagoshima', 'Okinawa'],
    overview: 'Japan’s southernmost major island and subtropical archipelago. Kyushu boasts dramatic active volcanic craters (Mount Aso, Sakurajima), rich onsen towns (Beppu, Yufuin), and Japan’s mythological birthplace at Takachiho. Okinawa preserves the distinct island culture and coral paradises of the ancient Ryukyu Kingdom.',
    keyStats: {
      prefectures: 8,
      unescoSites: 'Yakushima Island (Primeval Ancient Cedar Forests) / Sites of Japan’s Meiji Industrial Revolution / Gusuku Sites of the Kingdom of Ryukyu / Amami-Oshima & Northern Okinawa',
      bestSeason: 'Spring & Autumn for Kyushu / March–November for Okinawa Beaches',
      gatewayTransit: 'Kyushu Shinkansen (Hakata to Kagoshima: 80 mins) / Naha Airport (OKA)',
    },
    sanctuaries: [
      {
        name: 'Takachiho Gorge & Amano Iwato Shrine',
        kanji: '高千穂峡 / 天岩戸神社',
        location: 'Miyazaki Prefecture',
        period: 'Mythological Origin',
        description: 'A volcanic canyon of vertical columnar basalt cliffs framing the emerald Gokase River. Adjacent is the cave shrine where the Sun Goddess Amaterasu is said to have hid in ancient mythology, bringing darkness to the world.',
        culturalNote: 'Watch nighttime Takachiho Kagura performances depicting the comic and sacred dances of the gods.',
      },
      {
        name: 'Dazaifu Tenmangu',
        kanji: '太宰府天満宮',
        location: 'Dazaifu, Fukuoka Prefecture',
        period: 'Established 919 CE',
        description: 'Dedicated to Sugawara no Michizane, the patron deity of scholarship and literature. Over 6,000 plum trees (including the legendary Flying Plum Tree "Tobiume") bloom gloriously each February.',
        culturalNote: 'Students from across Japan visit to pray for success in entrance examinations and touch the bronze sacred oxen.',
      },
      {
        name: 'Sefa-utaki',
        kanji: '斎場御嶽',
        location: 'Nanjo, Okinawa Prefecture',
        period: 'Supreme sacred site of the Ryukyu Kingdom',
        description: 'An ancient natural sacred grove of towering limestone rock fissures on a forested coastal cliff overlooking the holy island of Kudaka.',
        culturalNote: 'Historically, only high priestesses (Kikoe-okimi) were permitted entry. Walk quietly and respect all prayer altars.',
      },
    ],
    naturalLandscapes: [
      {
        title: 'Mount Aso & Caldera',
        type: 'Active Volcanic Caldera',
        location: 'Kumamoto Prefecture',
        description: 'One of the world’s largest volcanic calderas spanning 25 kilometers, with an active smoking crater lake at Nakadake surrounded by green grassland plateaus.',
      },
      {
        title: 'Yakushima Island (Jomon Sugi)',
        type: 'UNESCO World Natural Heritage',
        location: 'Kagoshima Prefecture',
        description: 'Primeval subtropical rainforest island featuring thousand-year-old Yakusugi cedar trees and moss-covered valleys that inspired Studio Ghibli’s "Princess Mononoke."',
      },
      {
        title: 'Beppu Hells (Jigoku Meguri)',
        type: 'Geothermal Wonder',
        location: 'Beppu, Oita Prefecture',
        description: 'Japan’s premier onsen capital, featuring bubbling cobalt-blue hot springs (Umi Jigoku) and red clay pools (Chinoike Jigoku).',
      },
    ],
    culinaryHighlights: [
      {
        dish: 'Hakata Tonkotsu Ramen',
        japanese: '博多豚骨ラーメン',
        description: 'Rich, creamy pork bone broth simmered for 18 hours, served with thin firm noodles and red pickled ginger at Fukuoka’s bustling outdoor Yatai food stalls.',
      },
      {
        dish: 'Kagoshima Kurobuta Pork & Miyazaki Wagyu',
        japanese: '黒豚 / 宮崎牛',
        description: 'Prized Berkshire black pork served in paper-thin shabu-shabu slices, and Japan’s reigning prime minister award-winning wagyu beef.',
      },
      {
        dish: 'Okinawan Soba & Goya Chanpuru',
        japanese: '沖縄そば / ゴーヤチャンプルー',
        description: 'Hearty wheat noodle soup topped with tender braised pork belly (Rafute), alongside stir-fried bitter melon, island tofu, and egg.',
      },
    ],
    craftsAndTraditions: [
      'Arita-yaki and Imari porcelain from Saga Prefecture with brilliant overglaze enamels',
      'Hakata Ningyo delicately sculpted and painted clay dolls',
      'Okinawan Bingata vibrant stencil-dyed textiles and Ryukyu mouth-blown glass',
    ],
    travelTips: {
      transport: 'JR Kyushu Rail Pass covers all Kyushu Shinkansen and scenic sight-seeing express trains (Yufuin no Mori, Aso Boy!). In Okinawa, rent a car or use the Yui Rail monorail in Naha.',
      etiquette: 'At natural hot springs in Beppu and Kurokawa, always respect local bathhouse customs and preserve tranquility.',
      recommendedStay: '5 to 8 days to explore Fukuoka, Aso, Beppu, or a dedicated island stay in Okinawa.',
    },
    colorAccent: '#bf4334',
  },
];

export function getRegionBySlug(slug: string): RegionData | undefined {
  return JAPAN_REGIONS.find((r) => r.slug.toLowerCase() === slug.toLowerCase() || r.id.toLowerCase() === slug.toLowerCase());
}
