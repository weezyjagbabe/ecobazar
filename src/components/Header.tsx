import {CiLocationOn} from "react-icons/ci";
import {Link} from "react-router-dom";
import categories from "../Categories.ts";

function Header() {
    return (
        <header>
            <div className="text-sm py-3 shadow">
                <div className="flex justify-between items-center text-gray-400 max-w-7xl mx-4 sm:mx-auto">
                    <span className="flex"> <CiLocationOn/> Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                    <span> Login / Sign up</span>
                </div>

            </div>
            <div className="flex justify-between max-w-7xl mx-4 sm:mx-auto py-6">
                <Link to="/"> <img src="/logo.svg" alt="logo"/></Link>
                <div className="flex items-center gap-3">
                    <img src="/bag.svg" alt="cart"/>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-xs"> Shopping cart</span>
                        <span className="text-sm"> £53.00</span>
                    </div>
                </div>

            </div>
            <div className="bg-[#333333] text-white py-4 ">
                <div className="flex items-center justify-between max-w-7xl mx-4 sm:mx-auto">
                    <ul className="flex justify-between sm:justify-start gap-x-6 text-sm ">
                        {
                            categories.map((category, i) => (
                                <Link to={`?category=${category}`} key={i} className='filter'> {category}</Link>
                            ))
                        }
                        <Link to='.'> Clear filter </Link>
                    </ul>
                    <Link to="/add" className="px-6 py-2 bg-white text-black hidden sm:flex hover:bg-gray-100"> Add a
                        product </Link>
                </div>

            </div>
        </header>
    )
}

export default Header;