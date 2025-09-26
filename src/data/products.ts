import { Product, ProductCategory, SkinConcern } from '../types/product';

export const skinConcerns: SkinConcern[] = [
  {
    id: 'acne',
    name: 'Acne-Prone',
    icon: '🎯',
    description: 'Breakouts and blemishes'
  },
  {
    id: 'dryness',
    name: 'Dryness',
    icon: '💧',
    description: 'Dehydrated and flaky skin'
  },
  {
    id: 'aging',
    name: 'Fine Lines',
    icon: '⏰',
    description: 'Signs of aging and wrinkles'
  },
  {
    id: 'sensitivity',
    name: 'Sensitivity',
    icon: '🌸',
    description: 'Reactive and irritated skin'
  },
  {
    id: 'hyperpigmentation',
    name: 'Dark Spots',
    icon: '✨',
    description: 'Uneven skin tone and discoloration'
  }
];

export const serumProducts: Product[] = [
  {
    id: 'serum-1',
    name: 'The Ordinary Niacinamide 10% + Zinc 1%',
    brand: 'The Ordinary',
    price: 7.90,
    image: 'https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Reduces blemishes', 'Controls oil production', 'Minimizes pores'],
    rating: 4.3,
    reviewSnippet: '"A game-changer for oily, acne-prone skin" - Byrdie Beauty Editor',
    keyIngredients: ['Niacinamide', 'Zinc PCA']
  },
  {
    id: 'serum-2',
    name: 'Skinceuticals CE Ferulic',
    brand: 'SkinCeuticals',
    price: 169.00,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Brightens skin', 'Antioxidant protection', 'Reduces fine lines'],
    rating: 4.7,
    reviewSnippet: '"The gold standard of vitamin C serums" - Dermatologist Approved',
    keyIngredients: ['L-Ascorbic Acid', 'Vitamin E', 'Ferulic Acid']
  },
  {
    id: 'serum-3',
    name: 'Paula\'s Choice 2% BHA Liquid Exfoliant',
    brand: 'Paula\'s Choice',
    price: 32.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Unclogs pores', 'Smooths texture', 'Reduces blackheads'],
    rating: 4.5,
    reviewSnippet: '"Gentle yet effective for combination skin" - Beauty Expert',
    keyIngredients: ['Salicylic Acid', 'Green Tea Extract']
  }
];

export const moisturizerProducts: Product[] = [
  {
    id: 'moisturizer-1',
    name: 'CeraVe Daily Moisturizing Lotion',
    brand: 'CeraVe',
    price: 16.99,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['24-hour hydration', 'Restores skin barrier', 'Non-comedogenic'],
    rating: 4.4,
    reviewSnippet: '"Perfect for combination skin types" - Byrdie Editor Pick',
    keyIngredients: ['Ceramides', 'Hyaluronic Acid', 'MVE Technology']
  },
  {
    id: 'moisturizer-2',
    name: 'Neutrogena Hydro Boost Water Gel',
    brand: 'Neutrogena',
    price: 18.97,
    image: 'https://images.pexels.com/photos/6621374/pexels-photo-6621374.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Lightweight hydration', 'Oil-free formula', 'Plumps skin'],
    rating: 4.2,
    reviewSnippet: '"Refreshing gel texture that doesn\'t clog pores" - Beauty Review',
    keyIngredients: ['Hyaluronic Acid', 'Olive Extract']
  },
  {
    id: 'moisturizer-3',
    name: 'Olay Regenerist Micro-Sculpting Cream',
    brand: 'Olay',
    price: 28.99,
    image: 'https://images.pexels.com/photos/4465833/pexels-photo-4465833.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Firms skin', 'Reduces fine lines', 'Smooths texture'],
    rating: 4.3,
    reviewSnippet: '"Anti-aging powerhouse at drugstore prices" - Skincare Expert',
    keyIngredients: ['Niacinamide', 'Peptides', 'Amino-Peptides']
  }
];

export const sunscreenProducts: Product[] = [
  {
    id: 'sunscreen-1',
    name: 'EltaMD UV Clear Broad-Spectrum SPF 46',
    brand: 'EltaMD',
    price: 37.00,
    image: 'https://images.pexels.com/photos/4465832/pexels-photo-4465832.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Broad spectrum protection', 'Lightweight formula', 'Calms sensitive skin'],
    rating: 4.6,
    reviewSnippet: '"Dermatologist favorite for acne-prone skin" - Medical Review',
    keyIngredients: ['Zinc Oxide', 'Niacinamide', 'Hyaluronic Acid'],
    spf: 46
  },
  {
    id: 'sunscreen-2',
    name: 'La Roche-Posay Anthelios Melt-In Milk SPF 60',
    brand: 'La Roche-Posay',
    price: 35.99,
    image: 'https://images.pexels.com/photos/6621371/pexels-photo-6621371.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Water resistant', 'Fast absorbing', 'No white cast'],
    rating: 4.4,
    reviewSnippet: '"Perfect for daily wear under makeup" - Beauty Editor',
    keyIngredients: ['Avobenzone', 'Homosalate', 'Octisalate'],
    spf: 60
  }
];

export const foundationProducts: Product[] = [
  {
    id: 'foundation-1',
    name: 'Fenty Beauty Pro Filt\'r Soft Matte Foundation',
    brand: 'Fenty Beauty',
    price: 40.00,
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Full coverage', 'Long-wearing', 'Oil-controlling'],
    rating: 4.5,
    reviewSnippet: '"Inclusive shade range with amazing coverage" - Makeup Artist Approved',
    keyIngredients: ['Climate-adaptive technology', 'Oil-absorbing powders'],
    shadeRange: ['Fair', 'Light', 'Medium', 'Deep'],
    finish: 'matte'
  },
  {
    id: 'foundation-2',
    name: 'NARS Natural Radiant Longwear Foundation',
    brand: 'NARS',
    price: 50.00,
    image: 'https://images.pexels.com/photos/3297593/pexels-photo-3297593.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Natural finish', '16-hour wear', 'Buildable coverage'],
    rating: 4.3,
    reviewSnippet: '"Perfect balance of coverage and natural look" - Pro MUA',
    keyIngredients: ['Raspberry extract', 'Apple extract', 'Sodium Hyaluronate'],
    shadeRange: ['Fair', 'Light', 'Medium', 'Deep'],
    finish: 'satin'
  }
];

export const treatmentProducts: Product[] = [
  {
    id: 'treatment-1',
    name: 'Kiehl\'s Creamy Eye Treatment with Avocado',
    brand: 'Kiehl\'s',
    price: 32.00,
    image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Hydrates delicate eye area', 'Reduces puffiness', 'Gentle formula'],
    rating: 4.2,
    reviewSnippet: '"Cult classic for good reason" - Beauty Veteran',
    keyIngredients: ['Avocado Oil', 'Shea Butter', 'Beta-Carotene']
  },
  {
    id: 'treatment-2',
    name: 'Sunday Riley Good Genes Glycolic Acid Treatment',
    brand: 'Sunday Riley',
    price: 122.00,
    image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: ['Brightens complexion', 'Smooths texture', 'Reduces dark spots'],
    rating: 4.4,
    reviewSnippet: '"Luxury treatment that delivers results" - Skincare Enthusiast',
    keyIngredients: ['Lactic Acid', 'Licorice', 'Lemongrass']
  }
];

export const getPersonalizedRecommendations = (skinType: string, concerns: string[]): ProductCategory[] => {
  return [
    {
      id: 'serums',
      title: 'Power Serums for Your Skin Type',
      subtitle: `Transform your skin with these editor-approved serums designed for ${skinType.toLowerCase()} skin`,
      description: 'Concentrated treatments that target your specific concerns with proven ingredients.',
      products: serumProducts
    },
    {
      id: 'moisturizers',
      title: 'Hydration Heroes',
      subtitle: `Lock in moisture with these dermatologist-recommended creams perfect for ${concerns.join(' and ')}`,
      description: 'Essential daily moisturizers that work with your skin type, not against it.',
      products: moisturizerProducts
    },
    {
      id: 'sunscreen',
      title: 'Your Daily Defense',
      subtitle: 'Protect your beautiful skin with these lightweight, non-comedogenic SPF favorites',
      description: 'Non-negotiable sun protection that feels weightless and works under makeup.',
      products: sunscreenProducts
    },
    {
      id: 'foundations',
      title: 'Your Perfect Match Foundation',
      subtitle: 'Flawless coverage that works with your skin, not against it',
      description: 'Complexion perfectors matched to your skin tone and type for a natural finish.',
      products: foundationProducts
    },
    {
      id: 'treatments',
      title: 'Targeted Solutions',
      subtitle: 'Address your specific skin concerns with these expert-recommended treatments',
      description: 'Specialized products that tackle your unique skin challenges with precision.',
      products: treatmentProducts
    }
  ];
};