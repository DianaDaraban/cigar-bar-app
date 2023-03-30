const dataItems = [
  {
    id: 1,
    brand: 'avo',
    strength: 'full',
    size: 'toro',
    occasion: 'golf',
    title: 'Syncro Ritmo Special Toro',
    price: '12.99',
    img: 'avo-ritmo-special.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'toro',
      wrapper: 'Ecuador',
      binder: 'Mexico',
      filler: 'mixed',
      strength: 'full',
    },
  },
  {
    id: 2,
    brand: 'avo',
    strength: 'full',
    size: 'robusto',
    occasion: 'golf',
    title: 'Syncro Ritmo Robusto',
    price: '11.99',
    img: 'avo-ritmo-robusto.jpg',
    description: {
      length: 5,
      ring: 50,
      size: 'robusto',
      wrapper: 'Ecuador',
      binder: 'Mexico',
      filler: 'Mixed',
      strength: 'full',
    },
  },
  {
    id: 3,
    brand: 'avo',
    strength: 'mild',
    size: 'robusto',
    occasion: 'groomsmen',
    title: 'Classic No.2',
    price: '10.99',
    img: 'avo_classic_no2.jpg',
    description: {
      length: 6.5,
      ring: 50,
      size: 'robusto',
      wrapper: 'Ecuador',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic/ Nicaragua',
      strength: 'mild',
    },
  },
  {
    id: 4,
    brand: 'avo',
    strength: 'medium',
    size: 'toro',
    occasion: 'groomsmen',
    title: 'XO Legato',
    price: '12.99',
    img: 'avo_xo_legato.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'toro',
      wrapper: 'Ecuador Connecticut',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic',
      strength: 'medium',
    },
  },
  {
    id: 5,
    brand: 'avo',
    strength: 'full',
    size: 'robusto',
    occasion: 'golf',
    title: 'Syncro Nicaragua Robusto',
    price: '11.99',
    img: 'avo_syncro_nicaragua.jpg',
    description: {
      length: 5,
      ring: 50,
      size: 'robusto',
      wrapper: 'Ecuador Connecticut',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic/ Nicaragua/ Peru',
      strength: 'full',
    },
  },
  {
    id: 6,
    brand: 'avo',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Syncro Fogata Special Toro',
    price: '11.99',
    img: 'avo_fogata_special.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'toro',
      wrapper: 'Habano 200',
      binder: 'San Andres',
      filler: 'Dominican Republic/ Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 7,
    brand: 'Arturo Fuente',
    strength: 'mild',
    size: 'robusto',
    occasion: 'golf',
    title: 'Chateau Fuente',
    price: '6.40',
    img: 'arturo_fuente_chateau_fuente.jpg',
    description: {
      length: 4.5,
      ring: 50,
      size: 'robusto',
      wrapper: 'Connecticut',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic',
      strength: 'mild',
    },
  },
  {
    id: 8,
    brand: 'Arturo Fuente',
    strength: 'medium',
    size: 'churchill',
    occasion: 'golf',
    title: 'Don Carlos Presidente',
    price: '13.99',
    img: 'arturo_fuente_Don_Carlos.jpg',
    description: {
      length: 6.5,
      ring: 50,
      size: 'churchill',
      wrapper: 'Cameroon',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic',
      strength: 'medium',
    },
  },
  {
    id: 9,
    brand: 'Arturo Fuente',
    strength: 'full',
    size: 'belicoso',
    occasion: 'golf',
    title: 'Opus X Belicoso XXX',
    price: '34.99',
    img: 'arturo_fuente_opus_x.jpg',
    description: {
      length: 4.6,
      ring: 49,
      size: 'belicoso',
      wrapper: 'Dominican',
      binder: 'Dominican',
      filler: 'Dominican',
      strength: 'full',
    },
  },
  {
    id: 10,
    brand: 'Arturo Fuente',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Chateau Queen B',
    price: '9.99',
    img: 'arturo_fuente_chateau_queen_b.jpg',
    description: {
      length: 5.5,
      ring: 52,
      size: 'toro',
      wrapper: 'Ecuadorian',
      binder: 'Dominican',
      filler: 'Dominican',
      strength: 'medium',
    },
  },
  {
    id: 11,
    brand: 'ashton',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Symmetry Sublime',
    price: '14.99',
    img: 'ashton_symmetry_sublime.jpg',
    description: {
      length: 6,
      ring: 52,
      size: 'toro',
      wrapper: 'Ecuadorian',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic/ Nicaragua',
      strength: 'medim',
    },
  },
  {
    id: 12,
    brand: 'ashton',
    strength: 'medium',
    size: 'churchill',
    occasion: 'golf',
    title: 'VSG Spellbound',
    price: '16.99',
    img: 'ashton_vsg.jpg',
    description: {
      length: 7.5,
      ring: 54,
      size: 'toro',
      wrapper: 'Ecuadorian',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic/ Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 13,
    brand: 'ashton',
    strength: 'mild',
    size: 'belicoso',
    occasion: 'golf',
    title: 'Cabinet Belicoso',
    price: '12.99',
    img: 'Ashton-Cabinet-Belicoso.jpg',
    description: {
      length: 6,
      ring: 52,
      size: 'belicoso',
      wrapper: 'Dominican Republic',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic',
      strength: 'mild',
    },
  },
  {
    id: 14,
    brand: 'ashton',
    strength: 'mild',
    size: 'robusto',
    occasion: 'golf',
    title: 'Cabinet No.6',
    price: '13.99',
    img: 'ashton_cabinet_no6.jpg',
    description: {
      length: 5.75,
      ring: 52,
      size: 'robusto',
      wrapper: 'Connecticut',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic',
      strength: 'mild',
    },
  },
  {
    id: 15,
    brand: 'cohiba',
    strength: 'medium',
    size: 'robusto',
    occasion: 'golf',
    title: 'Royale Robusto',
    price: '19.99',
    img: 'cohiba-royale.jpg',
    description: {
      length: 5,
      ring: 54,
      size: 'robusto',
      wrapper: 'Nicaragua',
      binder: 'Dominican Republic',
      filler: 'Honduras/ Dominican/ Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 16,
    brand: 'cohiba',
    strength: 'medium',
    size: 'robusto',
    occasion: 'golf',
    title: 'Blue Robusto',
    price: '13.99',
    img: 'cohiba-blue.jpg',
    description: {
      length: 5.5,
      ring: 50,
      size: 'robusto',
      wrapper: 'Hondoras',
      binder: 'Honduras',
      filler: 'Honduras/ Dominican Republic/ Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 17,
    brand: 'cohiba',
    strength: 'medium',
    size: 'robusto',
    occasion: 'golf',
    title: 'Red Dot Toro Tubos',
    price: '24.99',
    img: 'cohiba-red.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'robusto',
      wrapper: 'Hondoran Corojo',
      binder: 'Honduran Corojo',
      filler: 'Honduras/ Dominican Republic/ Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 18,
    brand: 'davidoff',
    strength: 'full',
    size: 'robusto',
    occasion: 'groomsmen',
    title: 'Aniversario Special R',
    price: '28.99',
    img: 'davidoff-aniversario-special-r.jpg',
    description: {
      length: 5.5,
      ring: 50,
      size: 'robusto',
      wrapper: 'Ecuador',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic',
      strength: 'full',
    },
  },
  {
    id: 19,
    brand: 'davidoff',
    strength: 'medium',
    size: 'robusto',
    occasion: 'groomsmen',
    title: 'Winston Churchill Late Hour Robusto',
    price: '18.99',
    img: 'Davidoff-Winston-Churchill-Late-Hour.jpg',
    description: {
      length: 5,
      ring: 52,
      size: 'robusto',
      wrapper: 'Ecuador',
      binder: 'Mexico/Ecuador',
      filler: 'Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 20,
    brand: 'davidoff',
    strength: 'medium',
    size: 'robusto',
    occasion: 'golf',
    title: 'Royal Release Robusto',
    price: '94.99',
    img: 'davidoff_royal.jpg',
    description: {
      length: 5,
      ring: 54,
      size: 'robusto',
      wrapper: 'Dominican Republic',
      binder: 'Ecuador Habano',
      filler: 'Dominican Republic',
      strength: 'medium',
    },
  },
  {
    id: 21,
    brand: 'davidoff',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Limited Edition 2022 Gran Toro',
    price: '49.99',
    img: 'Davidoff-Limited-Edition-2022.jpg',
    description: {
      length: 5.5,
      ring: 58,
      size: 'toro',
      wrapper: 'Ecuador',
      binder: 'Brazil',
      filler: 'Brazil',
      strength: 'medium',
    },
  },
  {
    id: 22,
    brand: 'davidoff',
    strength: 'medium',
    size: 'belicoso',
    occasion: 'golf',
    title: 'Millenium Piramide',
    price: '29.99',
    img: 'davidoff_millenium.jpg',
    description: {
      length: 6,
      ring: 52,
      size: 'belicoso',
      wrapper: 'Ecuador',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic',
      strength: 'medium',
    },
  },
  {
    id: 23,
    brand: 'davidoff',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Millenium Toro',
    price: '28.99',
    img: 'Davidoff-Millennium-Blend-Toro.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'toro',
      wrapper: 'Ecuador',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic',
      strength: 'medium',
    },
  },
  {
    id: 24,
    brand: 'el rey del mundo',
    strength: 'medium',
    size: 'robusto',
    occasion: 'golf',
    title: 'Robusto Supremo',
    price: '12.99',
    img: 'el-rey-del-mundo-robusto-supremo.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'robusto',
      wrapper: 'Honduras',
      binder: 'Honduras',
      filler: 'Honduras',
      strength: 'medium',
    },
  },
  {
    id: 25,
    brand: 'el rey del mundo',
    strength: 'medium',
    size: 'robusto',
    occasion: 'golf',
    title: 'Robusto',
    price: '10.99',
    img: 'el-rey-del-mundo-robusto.jpg',
    description: {
      length: 5,
      ring: 54,
      size: 'robusto',
      wrapper: 'Honduras',
      binder: 'Honduras',
      filler: 'Honduras',
      strength: 'medium',
    },
  },
  {
    id: 26,
    brand: 'foundation cigars',
    strength: 'full',
    size: 'robusto',
    occasion: 'golf',
    title: 'Highclere Castle Robusto',
    price: '14.99',
    img: 'foundation-cigars-highclere-castle.jpg',
    description: {
      length: 6,
      ring: 52,
      size: 'robusto',
      wrapper: 'Ecuador (Habano)',
      binder: 'Brazil (Mata Fina)',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 27,
    brand: 'foundation cigars',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'The Tabernacle Toro',
    price: '13.99',
    img: 'foundation-cigars-tabernacle.jpg',
    description: {
      length: 6,
      ring: 52,
      size: 'toro',
      wrapper: 'Connecticut Broadleaf',
      binder: 'Mexican San Andres',
      filler: 'Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 28,
    brand: 'foundation cigars',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Wiseman Toro',
    price: '13.99',
    img: 'Foundation-Wise-Man.jpg',
    description: {
      length: 6,
      ring: 56,
      size: 'toro',
      wrapper: 'San Andres Mexican',
      binder: 'Corojo ’99 (Jalapa)',
      filler: 'Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 29,
    brand: 'illusione',
    strength: 'full',
    size: 'toro',
    occasion: 'golf',
    title: 'Epernay Le Monde',
    price: '11.99',
    img: 'illusione_epernay_le-monde.jpg',
    description: {
      length: 6.25,
      ring: 54,
      size: 'toro',
      wrapper: 'Corojo',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 30,
    brand: 'illusione',
    strength: 'full',
    size: 'toro',
    occasion: 'golf',
    title: 'Epernay MJ12',
    price: '11.99',
    img: 'illusione-illusione-mj12.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'toro',
      wrapper: 'San Andres',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 31,
    brand: 'oliva',
    strength: 'full',
    size: 'robusto',
    occasion: 'golf',
    title: 'Melanio Robusto',
    price: '14.99',
    img: 'oliva-nicaragua-serie-v-melanio.jpg',
    description: {
      length: 5,
      ring: 52,
      size: 'robusto',
      wrapper: 'Mexican San Andres',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 32,
    brand: 'oliva',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Serie V Double Toro',
    price: '13.99',
    img: 'Oliva-Serie-V-Double-Toro.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'toro',
      wrapper: 'Mexican San Andres',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 33,
    brand: 'padron',
    strength: 'medium',
    size: 'parejo',
    occasion: 'golf',
    title: 'Damaso 17',
    price: '21.99',
    img: 'Damaso_No17.jpg',
    description: {
      length: 7,
      ring: 54,
      size: 'parejo',
      wrapper: 'Connecticut',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 34,
    brand: 'padron',
    strength: 'full',
    size: 'robusto',
    occasion: 'golf',
    title: '1964 Anniversary Exclusivo Natural',
    price: '16.99',
    img: 'padron-1964.jpg',
    description: {
      length: 5.5,
      ring: 50,
      size: 'robusto',
      wrapper: 'Nicaragua',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 35,
    brand: 'padron',
    strength: 'full',
    size: 'belicoso',
    occasion: 'golf',
    title: '1926 No.2 Maduro',
    price: '19.99',
    img: 'padron-cigars-padron-1926-2.jpg',
    description: {
      length: 5.5,
      ring: 52,
      size: 'belicoso',
      wrapper: 'Nicaragua',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 36,
    brand: 'padron',
    strength: 'full',
    size: 'parejo',
    occasion: 'golf',
    title: '1926 No.35 Maduro',
    price: '18.99',
    img: 'padron-1926-no35.jpg',
    description: {
      length: 4,
      ring: 48,
      size: 'parejo',
      wrapper: 'Nicaragua',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 37,
    brand: 'padron',
    strength: 'full',
    size: 'toro',
    occasion: 'golf',
    title: '1964 Anniversary Imperial Maduro',
    price: '16.99',
    img: 'Padron-Cigar-Imperial-Maduro.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'toro',
      wrapper: 'Nicaragua',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 38,
    brand: 'padron',
    strength: 'full',
    size: 'robusto',
    occasion: 'golf',
    title: '1964 Anniversary Exclusivo Maduro',
    price: '16.99',
    img: 'padron-1964-aniversary.jpg',
    description: {
      length: 5.5,
      ring: 50,
      size: 'robusto',
      wrapper: 'Nicaragua',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 39,
    brand: 'partagas',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Decadas 2021 Toro',
    price: '22.99',
    img: 'ca-decadas-2-1600.jpg',
    description: {
      length: 6,
      ring: 52,
      size: 'toro',
      wrapper: 'Cameroon',
      binder: 'Connecticut',
      filler: 'Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 40,
    brand: 'partagas',
    strength: 'full',
    size: 'parejo',
    occasion: 'golf',
    title: 'Black Label Clasico',
    price: '12.99',
    img: 'Partagas-Black-Label-Clasico.jpg',
    description: {
      length: 5.25,
      ring: 54,
      size: 'parejo',
      wrapper: 'Connecticut Medio Tiempo',
      binder: 'Dominican Republic',
      filler: 'Dominican Republic / Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 41,
    brand: 'partagas',
    strength: 'medium',
    size: 'churchill',
    occasion: 'golf',
    title: 'Heritage Churchill',
    price: '13.99',
    img: 'Partagas-Heritage.jpg',
    description: {
      length: 7,
      ring: 49,
      size: 'churchill',
      wrapper: 'Honduras',
      binder: 'Connecticut Broadleaf',
      filler: 'Dominican Republic / Honduras / Mexico',
      strength: 'medium',
    },
  },
  {
    id: 42,
    brand: 'partagas',
    strength: 'medium',
    size: 'robusto',
    occasion: 'golf',
    title: 'Cortado Robusto',
    price: '9.99',
    img: 'partagas-cortado-robusto.jpg',
    description: {
      length: 6,
      ring: 52,
      size: 'robusto',
      wrapper: 'Ecuador Connecticut Shade',
      binder: 'Indonesia',
      filler: 'Honduras / Mexico / Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 43,
    brand: 'rocky patel',
    strength: 'full',
    size: 'robusto',
    occasion: 'golf',
    title: 'Decade Torpedo',
    price: '16.99',
    img: 'Rocky-Patel-Cigars-Decade-Torpedo.jpg',
    description: {
      length: 6.5,
      ring: 52,
      size: 'robusto',
      wrapper: 'Ecuador',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 44,
    brand: 'rocky patel',
    strength: 'full',
    size: 'robusto',
    occasion: 'golf',
    title: 'Decade Toro',
    price: '15.99',
    img: 'Rocky-Patel-Cigars-Decade-Toro.jpg',
    description: {
      length: 6,
      ring: 52,
      size: 'robusto',
      wrapper: 'Ecuador',
      binder: 'Nicaragua',
      filler: 'Nicaragua',
      strength: 'full',
    },
  },
  {
    id: 45,
    brand: 'camacho',
    strength: 'medium',
    size: 'robusto',
    occasion: 'golf',
    title: 'Connecticut Robusto',
    price: '10.99',
    img: 'Camacho-Connecticut-Robusto.jpg',
    description: {
      length: 5,
      ring: 50,
      size: 'robusto',
      wrapper: 'Ecuador Connecticut',
      binder: 'Honduras',
      filler: 'Dominican Republic',
      strength: 'medium',
    },
  },
  {
    id: 46,
    brand: 'camacho',
    strength: 'full',
    size: 'toro',
    occasion: 'golf',
    title: 'Corojo Toro',
    price: '11.99',
    img: 'Camacho-Corojo-Toro.jpg',
    description: {
      length: 6,
      ring: 50,
      size: 'toro',
      wrapper: 'Honduran Corojo',
      binder: 'Honduran Corojo',
      filler: 'Honduras',
      strength: 'full',
    },
  },
  {
    id: 47,
    brand: 'camacho',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Connecticut Toro',
    price: '11.99',
    img: 'Camacho-Connecticut-Toro.jpg',
    description: {
      length: 6,
      ring: 50,
      size: 'toro',
      wrapper: 'Ecuador Connecticut',
      binder: 'Honduras',
      filler: 'Dominican Republic',
      strength: 'medium',
    },
  },
  {
    id: 48,
    brand: 'bolivar',
    strength: 'medium',
    size: 'toro',
    occasion: 'golf',
    title: 'Cofradia 654',
    price: '6.99',
    img: 'bolivar-cofradia-654.jpg',
    description: {
      length: 6,
      ring: 54,
      size: 'toro',
      wrapper: 'Connecticut Broadleaf',
      binder: 'Connecticut Broadleaf',
      filler: 'Honduras/ Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 49,
    brand: 'bolivar',
    strength: 'medium',
    size: 'churchill',
    occasion: 'golf',
    title: 'Cofradia 754',
    price: '7.99',
    img: 'bolivar-cofradia-754.jpg',
    description: {
      length: 7,
      ring: 54,
      size: 'churchill',
      wrapper: 'Connecticut Broadleaf',
      binder: 'Connecticut Broadleaf',
      filler: 'Honduras/ Nicaragua',
      strength: 'medium',
    },
  },
  {
    id: 50,
    brand: 'bolivar',
    strength: 'medium',
    size: 'robusto',
    occasion: 'golf',
    title: 'Cofradia 554',
    price: '5.99',
    img: 'bolivar-cofradia-554.jpg',
    description: {
      length: 5,
      ring: 54,
      size: 'robusto',
      wrapper: 'Connecticut Broadleaf',
      binder: 'Connecticut Broadleaf',
      filler: 'Honduras/ Nicaragua',
      strength: 'medium',
    },
  },
]

export default dataItems
