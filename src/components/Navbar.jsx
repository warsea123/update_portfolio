export const  Navbar = () =>{
    return(
          <header className="bg-orange-500 fixed w-full z-10 top-0 left-0 shadow-md">
            <nav className="flex justify-around items-center p-4">
                <div className="text-lg font-semibold text-white hover:text-orange-200">
                    <a href="#home">My Portfolio</a>
                </div>
                <ul className="flex space-x-4">
                    <li><a href="#about" className="text-white hover:text-orange-200">About</a></li>
                    <li><a href="#projects" className="text-white hover:text-orange-200">Projects</a></li>
                    <li><a href="#contact" className="text-white hover:text-orange-200">Contact</a></li>
                </ul>
            </nav>



            {/*mobile menu */}
            
          </header>
        
    )
}
