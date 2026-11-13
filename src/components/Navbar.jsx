import {useState} from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

export const  Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
          <header className="bg-orange-500 fixed w-full z-10 top-0 left-0 shadow-md">
            <nav className="flex justify-around items-center p-4">
                <div className="text-lg font-semibold text-white hover:text-orange-200">
                    <a href="#home">My Portfolio</a>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li><a href="#about" className="text-white hover:text-orange-200">About</a></li>
                    <li><a href="#projects" className="text-white hover:text-orange-200">Projects</a></li>
                    <li><a href="#contact" className="text-white hover:text-orange-200">Contact</a></li>
                </ul>

                <div className="hidden md:flex">
                    <a href="https://github.com/jammel" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200">
                        <FaGithub className="w-6 h-6"  />
                    </a>
                </div>

                 <button
                onClick={()=> setIsOpen(!isOpen)}
                className = "text-white md:hidden top-left-4 text-2xl transition-colors hover:text-orange-200 focus:outline-none"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
                
            </button>
            </nav>



            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col items-center gap-5 py-5 bg-orange-600">
                    <li>
                        <a href="#about" onClick={() => setIsOpen(false)} className="text-white hover:text-orange-200">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#projects" onClick={() => setIsOpen(false)} className="text-white hover:text-orange-200">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-orange-200">
                            Contact
                        </a>
                    </li>

                </ul>
            </div>
            
          </header>
        
    )
}
