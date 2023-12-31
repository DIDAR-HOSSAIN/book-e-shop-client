import { Button } from '../components/ui/button';
import { useParams } from 'react-router-dom';
import { useDeleteBookMutation, useGetSingleBookQuery } from '../redux/features/books/bookApi';
import BookReview from '../components/BookReview';
import toast, { Toaster } from 'react-hot-toast';

export default function BookDetails() {
  const { id } = useParams();

  const { data: book, isLoading, error } = useGetSingleBookQuery(id);
  console.log(isLoading);
  console.log(error);

  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async () => {
    try {
      await deleteBook(id).unwrap();
      console.log(deleteBook)
      toast.success('Book deleted successfully')
    } catch (error) {
      console.error('Error deleting book:', error);
      // Show toast notification on error
      toast.error('Error deleting book');
    }
  };

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
          <h1 className="text-3xl font-semibold">Publication Date: {book?.publication_date}</h1>
          <p className="text-xl">Rating: {book?.rating}</p>
          <Button className='mr-4'>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
          <Toaster />
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
}
