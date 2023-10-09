import { IBook } from '../types/globalTypes';
import { Link } from 'react-router-dom';
// import { addToCart } from '../redux/features/cart/cartSlice';

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {

  // const dispatch = useAppDispatch();
  // const handleAddProduct = (book: IBook) => {
  //   dispatch(addToCart(book));
  //   toast({
  //     description: 'Product Added',
  //   });
  // };

  return (
    <div>
      <div className="rounded-2xl h-[500px] flex flex-col items-center justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${book._id}`} className="items-center justify-center">
          <img className='w-[250px] h-[300px]' src={book?.image} alt="book" />
        <h1 className="text-xl font-semibold">{book?.title}</h1>
        <p>Author: {book?.author}</p>
        <p className="text-sm">Genre: {book?.genre}</p>
        <p className="text-sm">Publication Date: {book?.publication_date}</p>

        {/* <p className="text-sm">
          Availability: {book?.status ? 'In stock' : 'Out of stock'}
        </p> */}

        </Link>
      </div>
    </div>
  );
}
