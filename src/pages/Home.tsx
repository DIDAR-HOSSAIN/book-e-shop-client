/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useAppDispatch, useAppSelector } from '../redux/hook/hook';
import { IBook } from '../types/globalTypes';
import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../redux/features/books/bookApi';
import Footer from '../layouts/Footer';

export default function Home() {

  const {data, isLoading, error} = useGetBooksQuery(undefined);
  console.log(isLoading);
  console.log(error);
  console.log(data);

  const {priceRange, status} = useAppSelector((state)=>state.book);
  const dispatch = useAppDispatch();
  console.log(dispatch)

  let booksData;

  if (status) {
    booksData = data?.filter(
      (item: { status: boolean; price: number; }) => item.status === true && item.price < priceRange
    );
  } else if (priceRange > 0) {
    booksData = data?.filter((item: { price: number; }) => item.price < priceRange);
  } else {
    booksData = data;
  }

  const displayedBooks = booksData?.slice(0, 10);

  return (
    <>
    <h1 className='text-center font-bold text-4xl'>Top 10 Recently Added Books</h1>
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-12 grid grid-cols-3 gap-10 pb-20">
        {displayedBooks?.map((book:IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
