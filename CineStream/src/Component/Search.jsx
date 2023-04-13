import React from 'react'

// Icon importées
import {AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return(
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
    );
  
}

export default Search
