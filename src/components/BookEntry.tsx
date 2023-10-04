import { useState } from 'react';

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

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
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
        // Reset form values after successful submission
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

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="">
      <h1 className='font-bold text-4xl text-center'>Book Entry</h1>
      <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit}>
        {/* Add your input fields here with name attributes corresponding to your MongoDB fields */}
        {/* Example: */}
        <input
          placeholder="Title"
          value={inputValues.title}
          onChange={handleChange}
          name="title"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Author"
         value={inputValues.author}
         onChange={handleChange}
         name="author"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
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
        />

        <input
         placeholder="Genre"
         value={inputValues.genre}
         onChange={handleChange}
         name="genre"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
        />

        <input
         placeholder="Publication Date"
         value={inputValues.publication_date}
         onChange={handleChange}
         name="publication_date"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-custom-class"
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
          type="submit"
          className="min-h-[40px] border border-solid border-black px-2 w-1/3 my-submit-button-class"
        />
      </form>
    </div>
  );
}
