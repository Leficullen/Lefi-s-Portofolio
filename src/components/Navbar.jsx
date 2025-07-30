import {useState, useEffect} from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect (()=> {
        const handleScroll = ()=> {
            if (window.scrollY > 100) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };


    }, [] );



  return (
    <header className={` bg-transparent  top-0 left-0 w-full flex z-50 transition-all duration-300 ease-in-out ${active? "fixed bg-zinc-950 gradient-border my-3 rounded-3xl mx-auto flex justify-center px-4":""}`}>
        <div className={`container ${active? "":""}`}>
            <div className="flex items-center justify-between relative w-full">
                <div className="px-4">
                    <a href="#home" className="primary bg-clip-text font-semibold md:text-3xl text-2xl py-5 block hover:scale-105 smooth"> Leficullen</a>
                </div>
                <div className="flex items-center px-4">
                    <button onClick={()=> {
                        setHamburgerActive(!hamburgerActive); 
                        setMenuActive(!menuActive);
                    }}
                        id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden ">
                        <span className={`hamburger-line origin-top-left ${hamburgerActive? "hamburger-active-1 bg-red-700":""}`}></span>
                        <span className={`hamburger-line ${hamburgerActive? "hamburger-active-2":""}`}></span>
                        <span className={`hamburger-line origin-bottom-left  ${hamburgerActive? "hamburger-active-3 bg-red-700":""}`}></span>
                    </button>
                </div>
                <nav class={`lg:block lg:static lg:max-w-full ${menuActive? "block absolute py-3 bg-zinc-950 shadow-pink-500 shadow-sm rounded-lg max-w-[200px] w-full right-4 top-full gradient-border":"hidden"}`}>
                    <ul className="block lg:flex">
                        <li className="group">
                            <a href="#about" className="text-lg font-semibold py-1 px-5 group-hover:primary hover:scale-105 smooth bg-clip-text flex"><i className="ri-user-fill"></i>About</a>
                        </li>
                        <li className="group">
                            <a href="#project" className="text-lg font-semibold py-1 px-5 group-hover:primary hover:scale-105 smooth bg-clip-text flex"><i className="ri-computer-fill"></i>Projects <i className="ri-arrow-down-s-line ri-sm group-hover:rotate-180 smooth tra invisible lg:visible"></i>
                            </a>
                            <ul className="absolute right-80 mt-2 w-32 bg-zinc-950 border border-zinc-700 rounded-md p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth z-50 gradient-border">
                                <li className="group"> <a href="#project-website" className=" p-2 text-base font-semibold group-hover:primary bg-clip-text smooth block hover:scale-105">Website</a></li>
                                <li className="group"> <a href="#project-video" className=" p-2 text-base font-semibold group-hover:primary bg-clip-text smooth block hover:scale-105">Video</a></li>
                                <li className="group"> <a href="#project-graphic" className=" p-2 text-base font-semibold group-hover:primary bg-clip-text smooth block hover:scale-105">Graphic</a></li>
                                
                            </ul>
                            
                        </li>
                        <li className="group">
                            <a href="#about" className="text-lg font-semibold py-1 px-5 group-hover:primary hover:scale-105 smooth bg-clip-text flex"><i class="ri-medal-fill"></i>Achievements</a>
                        </li>
                        <li className="group">
                            <a href="#about" className="text-lg font-semibold py-1 px-5 group-hover:primary hover:scale-105 smooth bg-clip-text flex"><i class="ri-phone-fill"></i>Contact</a>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
};

export default Navbar