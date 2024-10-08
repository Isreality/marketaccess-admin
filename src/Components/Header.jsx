import "../style.css";
import { TbMathGreater } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { RxCaretRight } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
import fisher from '../img/fisher.jpg';

const Header = (props) => {
    return ( 
        <div className="px-8 py-4 border-b border-disable">

            <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-start p-2 md:p-0 items-center text-sm gap-0 text-black2">
                    <p className="cursor-pointer">Home</p>
                    <RxCaretRight className="text-primary font-medium cursor-pointer"/>
                    <Link to={props.link} className="text-primary font-medium">{props.title}</Link>
                </div>

                <div className="flex flex-row items-center sm:ml-96 gap-3">
                    {/* <button className="py-2 px-6 bg-primary text-white text-sm rounded-md">Admin</button> */}
                    {/* <CgProfile className="h-8 w-8 text-black3"/> */}
                    {/* <div className="bg-light p-2 rounded-full"><IoNotifications className="text-primary h-5 w-5"/></div> */}
                    {/* <Link to="/Settings"><img src={fisher} alt="" className="h-8 w-8 rounded-full"/></Link> */}
                </div>
            </div>

        </div>
     );
}
 
export default Header;
