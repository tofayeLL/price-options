import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";


const NavBar = () => {
      const [open, setOpen] = useState(false);

    const routesData = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/gallery", name: "Gallery" }
      ];




    return (
        <nav className="my-10 rounded-lg">
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden ">
                {
                    open === true ? <GrClose></GrClose> :  <RiMenu2Fill ></RiMenu2Fill>

                }
            

            </div>
           <ul className={`md:flex justify-around  duration-1000
           ${open ? 'top-12' : '-top-60'}
           absolute md:static bg-yellow-300  p-6 ml-2 md:ml-0`}>

             {
                routesData.map(route => <Link key={route.id} route={route}></Link>)
            }

           </ul>
            
        </nav>
    );
};

export default NavBar;