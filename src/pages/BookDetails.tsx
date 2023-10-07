import { Button } from '../components/ui/button';
import { useParams } from 'react-router-dom';
import { useDeleteBookMutation, useGetSingleBookQuery } from '../redux/features/books/bookApi';
import BookReview from '../components/BookReview';
import { toast } from '../components/ui/use-toast';


export default function BookDetails() {
  const { id } = useParams();

  const {data:book, isLoading, error} = useGetSingleBookQuery(id);
  console.log("from book details",book)

    const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async () => {
    try {
      await deleteBook(id).unwrap();
      // toast.success('Book deleted successfully !');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading book details</p>;
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center mx-auto border-b border-gray-300">
        <div className="w-[50%] flex justify-center">
          <img className='w-[250px] h-[300px]' src={book?.image} alt="" />
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
          <Button className='mr-4'>Edit</Button>
          <Button  onClick={handleDelete}>Delete</Button>
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
}
