import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Blogs", path: "/blogs" },
        { title: "Services", path: "/services" },
        { title: "Contact", path: "/contact" }
    ]
  

  return (
    <nav className="bg-slate-100 w-full border-b md:border-0 fixed z-10">
    <div className="items-center px-4 max-w-screen-xl mx-auto md:flex justify-end md:px-8">
        <div className="flex items-center justify-between py-3 md:block">
              <Link to={"/"}>
                  <img
                      src="/LOGOAAPM.png" 
                      className='w-14 rounded-full'
                  />
              </Link>
            <div className="md:hidden">
                <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
            <ul className=" justify-end gap-5 items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {
                    navigation.map((item, idx) => {
                        return (
                          <li key={idx} onClick={()=>{
                            window.scroll(0,0);
                          }} className="text-gray-600 text-lg font-semibold hover:text-cyan-500">
                              <Link
                               onClick={()=>setState(false)} to={item.path}>
                                  { item.title }
                              </Link>
                          </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar