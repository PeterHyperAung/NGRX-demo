export type NGRX = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


export const intialState: NGRX = {
  products: [],
  loading: false,
  error: null
}
