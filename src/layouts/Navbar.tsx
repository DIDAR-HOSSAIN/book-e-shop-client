/* eslint-disable @typescript-eslint/no-floating-promises */
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';
import { HiOutlineSearch } from 'react-icons/hi';
import Cart from '../components/Cart';
import { useAppDispatch, useAppSelector } from '../redux/hook/hook';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase.config';
import { setUser } from '../redux/features/user/userSlice';

export default function Navbar() {
  
  const navigate = useNavigate();
  const {user} = useAppSelector((state)=> state.user);
  const dispatch = useAppDispatch();
  const handleLogOut = ()=>{
    console.log('logOut');
    signOut(auth).then(() => {
      dispatch(setUser(null));
      navigate('/')
    })
  }

  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            {/* <img className="h-8" src={logo} alt="log" /> */}
            <h1 className='font-bold'>Book-E-Shop</h1>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/books">Books</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li>
                <Cart />
              </li>
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                    
                    { !user.email && (
                      <>
                    <Link to={"/login"}>
                    <DropdownMenuItem className="cursor-pointer">
                      Login
                    </DropdownMenuItem>
                    </Link>
                    <Link to={"/signup"}>
                    <DropdownMenuItem className="cursor-pointer">
                      Sign Up
                    </DropdownMenuItem>
                    </Link>
                    </>
                    )}

                    <Link to={"/logout"}>
                    <DropdownMenuItem onClick={handleLogOut} className="cursor-pointer">
                      Logout
                    </DropdownMenuItem>
                    </Link>
                    
                    <DropdownMenuItem className="cursor-pointer">
                      Team
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Subscription
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
