import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";

const sucessNotify = () => toast.success("Book added Sucessfully!");

export default function BookEntry() {
  const [inputValues, setInputValues] = useState({
    title: '',
    author: '',
    price: '',
    image: '',
    genre: '',
    publication_date: '',
    rating: '',
    comments: '',
  });

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValues),
      });

      if (response.ok) {
        console.log('Book successfully added');
        setInputValues({
          title: '',
          author: '',
          price: '',
          image: '',
          genre: '',
          publication_date: '',
          rating: '',
          comments: '',
        });
      } else {
        console.error('Failed to add book');
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    setInputValues((prevInputValues) => {
      if (name === 'price' || name === 'rating') {
        // Convert price and rating to numbers
        return {
          ...prevInputValues,
          [name]: value === '' ? '' : parseFloat(value),
        };
      } else if (name === 'comments') {
        // Convert comments to an array
        return {
          ...prevInputValues,
          [name]: value.split(',').map((comment: string) => comment.trim()),
        };
      } else {
        return {
          ...prevInputValues,
          [name]: value,
        };
      }
    });
  };

  return (
    <div className="">
            <h1 className='font-bold text-4xl text-center mb-6'>Book Entry</h1>
      <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit}>
        {/* Add your input fields here with name attributes corresponding to your MongoDB fields */}
        {/* Example: */}
        <input
          placeholder="Title"
          value={inputValues.title}
          onChange={handleChange}
          name="title"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
          required
        />

        <input
         placeholder="Author"
         value={inputValues.author}
         onChange={handleChange}
         name="author"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
          required
        />

        <input
         placeholder="Price"
         value={inputValues.price}
         onChange={handleChange}
         name="price"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Image"
         value={inputValues.image}
         onChange={handleChange}
         name="image"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
          required
        />

        <input
         placeholder="Genre"
         value={inputValues.genre}
         onChange={handleChange}
         name="genre"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
          required
        />

        <input
         placeholder="Publication Date"
         value={inputValues.publication_date}
         onChange={handleChange}
         name="publication_date"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
          required
        />

        <input
         placeholder="Rating"
         value={inputValues.rating}
         onChange={handleChange}
         name="rating"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Comments"
         value={inputValues.comments}
         onChange={handleChange}
         name="comments"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
          type="submit" onClick={sucessNotify}
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-submit-button-class"
        />
        <Toaster />
      </form>
      
    </div>
  );
}
