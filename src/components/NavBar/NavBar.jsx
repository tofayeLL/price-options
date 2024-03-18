import Link from "../Link/Link";


const NavBar = () => {


    const routesData = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/gallery", name: "Gallery" }
      ];




    return (
        <nav>
           <ul className="flex justify-between">

             {
                routesData.map(route => <Link key={route.id} route={route}></Link>)
            }

           </ul>
            
        </nav>
    );
};

export default NavBar;