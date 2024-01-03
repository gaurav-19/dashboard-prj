import { useContext } from "react";
import AuthService from "../../services/AuthService";
import AppContext from "./AppContext";

const Header = () => {
    const globalContext = useContext(AppContext);

    const logout = () => {
        AuthService.logout();
        globalContext.setcurrentuser(null);
    }

    return(<nav class="navbar sticky-top bg-white shadow-sm">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100">
            <div className="h3 ps-4 p-0">Dashboard App</div>
            <div className="rounded bg-white d-flex flex-row-reverse justify-content-center align-items-center me-4">
            <div>
            <p className="fw-bold fs-6 m-0">PS Finsec Private Limited</p>
            <p className="small m-0">CIN: U4805UY489HF8FN0FJ84F20</p>
            <a className="small m-0" href="www.psfinsec.com">www.psfinsec.com</a>
            </div>
            <div className="border mx-4 text-secondary image">PS</div>
        </div>
        <div className="align-self-end d-md-none me-2">
            <button onClick={logout} className={'btn fw-bold my-2 text-danger border'}>Sign out</button>
        </div>
        </div>
    </nav>)

}

export default Header;