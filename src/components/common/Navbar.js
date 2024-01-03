import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import AppContext from "./AppContext";

const Navbar = () => {
    const globalContext = useContext(AppContext);
    const [activelink,Setactivelink] = useState('overview');
    const [activeClass,SetactiveClass] = useState('border bg-white text-primary border-primary');

    const logout = () => {
        AuthService.logout();
        globalContext.setcurrentuser(null);
    }

    const MenuOptions = () => {
        return(
        <div className="p-3 px-4 d-flex flex-md-column flex-sm-row justify-content-center">
            <Link onClick={() => Setactivelink('overview')} className={ (activelink === "overview" ? activeClass + ' btn fw-bold ':'btn fw-bold') + ' my-2' } to="/">Overview</Link>
    
            <Link onClick={() => Setactivelink('creditdetail')} className={ (activelink === "creditdetail" ? activeClass + ' btn fw-bold ':'btn fw-bold ') + ' my-2' } to="/creditdetail">Credit details</Link>
    
            <Link onClick={() => Setactivelink('contactinfo')} className={ (activelink === "contactinfo" ? activeClass + ' btn fw-bold ':'btn fw-bold') + ' my-2' } to="/contactinfo">Contact info</Link>
            
            <button onClick={logout} className={'btn btn-outline-danger border-0 my-3 d-md-block d-none'}>Sign out</button>
    </div>)
    }

    return(<>
    {/* Nav bar for big screens */}
    <div className="d-md-block d-none sidebar bg-light">
        <div className="my-4 py-4">
        </div>
        <MenuOptions />
    </div>

    {/* Nav bar for small screens */}
    <div className="d-sm-block d-md-none">
        <MenuOptions />
    </div>
    </>)
}

export default Navbar;