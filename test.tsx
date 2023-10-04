// import { useForm } from "react-hook-form";
// import { useAppDispatch } from "../redux/hook/hook";

import { ChangeEvent, FormEvent, useState } from "react";
import { usePostBookMutation } from "../redux/features/books/bookApi";

type IBookData = {
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
  publication_date: string;
  rating: number;
  comments: string;
};

export default function BookEntry() {
  // const { register, handleSubmit, reset, formState: { errors } } = useForm<IBookData>();
  // // const onSubmit: SubmitHandler<IBookData> = data => console.log(data);
  // const dispatch = useAppDispatch();

  // const onSubmit = (data: IBookData) => {
  //   console.log(data);
  //   dispatch(createUser({email:data.email, password:data.password}));
  //   reset();
  // };



  const [inputValue, setInputValue] = useState<string>('');
  const [postBook, {isLoading, isError, isSuccess}] = usePostBookMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    const options = {
      data: {book: inputValue},
    };
    postBook(options);

    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };


  return (
    <div className="">
      <h1 className='font-bold text-4xl text-center'>Book Entry</h1>
      <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Title"
          {...register("title")}
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />
              
        <input
         placeholder="Author"
          {...register("author")}
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Price"
          {...register("price")}
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Image"
          {...register("image")}
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Genre"
          {...register("genre")}
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Publication Date"
          {...register("publication_date")}
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Rating"
          {...register("rating")}
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Comments"
          {...register("comments")}
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />
       
       <input
          type="submit"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-submit-button-class"
        />

      </form>
    </div>
  );
}
