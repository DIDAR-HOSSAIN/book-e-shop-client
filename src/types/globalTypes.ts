export interface IBook {
    _id: number;
    title: string;
    author: string;
    genre: string
    reviews: string[]
    image: string;
    price: number;
    features: string[];
    rating: number;
    publication_date: number;
  }

  "_id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "price": 10.99,
    "image": "https://example.com/to-kill-a-mockingbird.jpg",
    "genre": "Fiction",
    "publication_date": "1960-07-11",
    "rating": 4.6,
    "reviews": [
      {
        "rating": 4.6,
        "review_text": "A powerful exploration of racial injustice and moral growth."
      },
      {
        "rating": 4.0,
        "review_text":