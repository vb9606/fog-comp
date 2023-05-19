export interface Article {
    title: string;
    category: string;
    rating: number;
    author: string;
    imageUrl: string;
    summary: string;
  }

export interface Review {
  author: string;
  authorImage: string;
  rating: number;
  review: string;
}
