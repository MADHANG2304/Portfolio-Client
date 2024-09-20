import { UserPen, CircleX } from "lucide-react";
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const nameref = useRef(null);
  const emailref = useRef(null);
  const numberref = useRef(null);
  const passwordref = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(nameref.current.value);
    console.log(emailref.current.value);
    console.log(numberref.current.value);
    console.log(passwordref.current.value);
  };


  const navlinks = [
  {
    title : "Home",
    path : "/"
  },
  {
    title : "Profile",
    path : "/Profile"
  },
  {
    title : "Projects",
    path : "/Projects"
  },
  {
    title : "Contact",
    path : "/Contact"
  },
]

  

  const [visible, setVisible] = useState(false);
  return (
    <>
      <nav className="h-11 w-[auto] flex bg-slate-500 rounded-md m-5 justify-between bg-opacity-60">
        <div className="text-white p-1 ml-2 text-2xl font-extrabold">
          Portfolio
        </div>
        <div className="flex ">
          <ul className="flex  gap-4 mr-3">

            {navlinks.map((navdata, index) => (
              
              <NavLink key ={index} to={navdata.path}>
                <li className="text-white hover:underline h-11 p-2 w-18">{navdata.title}</li>
              </NavLink>
            ))}
          </ul>

          <div className="h-11 w-14 bg-zinc-700 hover:bg-red-300 rounded-md">
            <UserPen
              onClick={() => setVisible(true)}
              className="mt-2 ml-4  text-white "
            />
          </div>
        </div>
      </nav>

      {/* Login form dynamic routing */}
      {visible && (
        <>
          <div className="h-screen w-full  backdrop-blur-sm flex justify-center items-center m-5 absolute">
            <div className="h-auto w-1/4 bg-slate-500   rounded-md flex flex-col justify-center items-center">
              <form
                className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4  m-6  "
                onSubmit={handleLogin}
              >
                <div className="flex justify-evenly w-[100%]">
                  <u className="text-white">
                    <h1 className="font-extrabold text-3xl font-serif text-white mr-10">
                      Sign In Form
                    </h1>
                  </u>
                  <CircleX
                    className="mt-2"
                    onClick={() => setVisible(!visible)}
                  ></CircleX>
                </div>
                <input
                  type="text"
                  ref={nameref}
                  id="name"
                  placeholder="Name"
                  className="bg-slate-700 w-full font-bold rounded-lg h-10 p-3  focus:ring-4 focus:ring-white focus:border-transparent focus:outline-none "
                ></input>
                <input
                  type="email"
                  ref={emailref}
                  id="email"
                  placeholder="Email"
                  className="bg-slate-700 w-full font-bold rounded-lg h-10 p-3 focus:ring-4 focus:ring-white focus:border-transparent focus:outline-none"
                ></input>
                <input
                  type="number"
                  ref={numberref}
                  id="phone"
                  placeholder="Phone Number"
                  className="bg-slate-700 w-full font-bold rounded-lg h-10 p-3 focus:ring-4 focus:ring-white focus:border-transparent focus:outline-none"
                ></input>
                <input
                  type="password"
                  ref={passwordref}
                  id="password"
                  placeholder="Password"
                  className="bg-slate-700 w-full font-bold rounded-lg h-10 p-3 focus:ring-4 focus:ring-white focus:border-transparent focus:outline-none"
                ></input>
                <button
                  type="submit"
                  className="bg-red-200  h-[20%] w-[50%] rounded-md text-white font-bold focus:ring-4 focus:ring-black focus:border-transparent focus:outline-none hover:bg-red-500 "
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
