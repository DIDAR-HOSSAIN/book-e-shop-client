import { Button } from '../components/ui/button';
import { useParams } from 'react-router-dom';
import { useGetSingleBookQuery } from '../redux/features/books/bookApi';
import BookReview from '../components/BookReview';


export default function BookDetails() {
  const { id } = useParams();

  const {data:book, isLoading, error} = useGetSingleBookQuery(id);
  console.log("from book details",book)

  return (
    <>
      <div className="flex h-screen items-center justify-center mx-auto border-b border-gray-300">
        <div className="w-[50%] flex justify-center">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Book Title: {book?.title}</h1>
          <h1 className="text-3xl font-semibold">Author: {book?.author}</h1>
          <h1 className="text-3xl font-semibold">Price: {book?.price}</h1>
          <h1 className="text-3xl font-semibold">Genre: {book?.genre}</h1>
          <h1 className="text-3xl font-semibold">Pubilication Date: {book?.publication_date}</h1>
          <p className="text-xl">Rating: {book?.rating}</p>
          {/* <ul className="space-y-1 text-lg">
            {book?.comments?.map((comment:string) => (
              <li key={comment}>{comment}</li>
              ))}
          </ul> */}
          <Button>Add to cart</Button>
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
}
