import { ProductType } from "./ProductType";

type Product = {
  id: number;
  name: string;
  type: ProductType;
  image: string;
  description: string;
  price: number;
  amount: number;
};

type Review = {
  id: number;
  comment: string;
  rating: number;
};

export type { Product, Review };
