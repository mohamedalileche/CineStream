import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import useState from "react-hook-use-state";
import { Link } from "react-router-dom";





const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return(
    <>
    <div className='NavBar flex justify-between items-center p-[3rem] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <div>
            <h1 className="logo text-[25px] w-full text-3xl font-bold text-[#cc0101ea]">
                <strong>Cine</strong>Stream</h1>
        </div> 
        <div className="p-4 menu flex gap-8 hidden md:flex">
        <li className="p-4 menuList text-[#cc0101ea] ">
        <Link to="/Categorie">Categories</Link></li>
        <li className="p-4 menuList text-[#cc0101ea] ">Series</li>
        <li className="p-4 menuList text-[#cc0101ea] ">
        <Link to="/Inscription">Inscription</Link></li>
        </div>
        <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-xl font-bold text-[#cc0101ea] m-4">
          CineStream
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">Formation</li>
          <li className="p-4 border-b border-gray-600">Événements</li>
          <li className="p-4 border-b border-gray-600">Accueil</li>
        </ul>
      </div>
      

    </div>
    <div className=" flex justify-center items-center ">
            <div className="flex space-x-1 ">
                <input
                    type="text"
                    className=" align-center w-full px-4 py-2 text-700 bg-white border rounded-full focus:border-400 focus:ring-300 "
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-[#cc0101ea] rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </>
    
  )
};

export default NavBar
