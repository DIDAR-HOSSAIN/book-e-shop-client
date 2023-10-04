/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useToast } from '../components/ui/use-toast';
import { useAppDispatch, useAppSelector } from '../redux/hook/hook';
import { IBook } from '../types/globalTypes';
import {setPriceRange} from '../redux/features/books/bookSlice'
import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../redux/features/books/bookApi';
import Footer from '../layouts/Footer';

export default function Home() {

  const {data, isLoading, error} = useGetBooksQuery(undefined);
  console.log(isLoading);
  console.log(error);
  console.log(data);

  const { toast } = useToast();

  const {priceRange, status} = useAppSelector((state)=>state.book);
  const dispatch = useAppDispatch();

  const handleSlider = (value: number[]) => {
    dispatch(setPriceRange(value[0]));
  };

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

  return (
    <>
    <h1 className='text-center font-bold text-4xl'>Top 10 Recently Added Books</h1>
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-12 grid grid-cols-3 gap-10 pb-20">
        {booksData?.map((book:IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
