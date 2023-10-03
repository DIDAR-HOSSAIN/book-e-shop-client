import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useGetCommentQuery, usePostCommentMutation } from '../redux/features/books/bookApi';
import commentsIcon  from '../assets/images/commentsIcon.png';

interface IProps {
  id: string | undefined;
}

// const data = [
//   'Bhalo na',
//   'Ki shob ghori egula??',
//   'Eta kono product holo ??',
//   '200 taka dibo, hobe ??',
// ];

export default function BookReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const {data} = useGetCommentQuery(id, {refetchOnMountOrArgChange:true, pollingInterval:1000});
  //refetchOnMountOrArgChange:true, mana other component modda click kora back asla page refresh hoba.
  // polling interval 1000 mama 1 second por por page refresh hoba.
    console.log("fbd",data)
  const [postComment, {isLoading, isError, isSuccess}] = usePostCommentMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    const options = {
      id: id,
      data: {comment: inputValue},
    };
    console.log('book rebiew page', data)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    postComment(options);

    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment:string, index:number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src={commentsIcon} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}