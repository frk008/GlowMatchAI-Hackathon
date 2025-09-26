export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  benefits: string[];
  rating: number;
  reviewSnippet: string;
  keyIngredients: string[];
  shadeRange?: string[];
  finish?: 'matte' | 'dewy' | 'satin';
  spf?: number;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  products: Product[];
}

export interface SkinConcern {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface PersonalizedRecommendations {
  skinType: string;
  skinTone: string;
  concerns: SkinConcern[];
  categories: ProductCategory[];
}