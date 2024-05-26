export type Auth = {
  email: string,
  password: string
}

export type Variant = {
  size: string[];
  color: string;
  price: string;
};

export type Product = {
  article: string;
  brand: string;
  createdAt: string;
  id: string;
  material: string;
  model: string;
  name: string;
  photos: string[];
  updatedAt: string;
  var: string;
  variants: Variant[];
};

 export type ProductRequestAdd = {
  article?: string
   category?: string
  name?: string
  brand?: string
  model?: string
  material?: string
  photos?: FileList | null
  color?: string
  size?: string
  price?: number
}

export type ProductReceive = {
  products: Product[]
};
