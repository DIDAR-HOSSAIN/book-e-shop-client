import { useToast } from '../components/ui/use-toast';
import { useAppDispatch, useAppSelector } from '../redux/hook/hook';
import { IBook } from '../types/globalTypes';
import {setPriceRange} from '../redux/features/books/bookSlice'
import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../redux/features/books/bookApi';

export default function Books() {

  const {data, isLoading, error} = useGetBooksQuery(undefined);
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
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative">
      <div className="col-span-12 grid grid-cols-3 gap-10 pb-20">
        {booksData?.map((book:IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
