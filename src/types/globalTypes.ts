  export interface IBook {
    _id: number;
    title?: string;
    author: string;
    price: number;
    image: string;
    genre?: string
    publication_date?: string;
    rating?: number;
    comments?: string[];
  }
