export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: IRating;
  }
  
interface IRating {
  count: number;
  rate: number;
}