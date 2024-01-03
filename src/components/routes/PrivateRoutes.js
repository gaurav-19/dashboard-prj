import { Navigate, Route, Routes } from "react-router-dom";
import Overview from "../screens/Overview";
import CreditDetails from "../screens/CreditDetails";
import ContactInfo from "../screens/ContactInfo";
import Header from "../common/Header";
import Navbar from "../common/Navbar";

const PrivateRoutes = () => {

    const Myroutes = () => {
        return (<Routes>
            <Route path="/" element={<Overview />}/>
            <Route path="/creditdetail/" element={<CreditDetails />}/>
            <Route path="/contactinfo/" element={<ContactInfo />}/>
            <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>)
    }

    return(<>
    <Header/>
    <div className="">
        <Navbar/>
        
        <div className="d-none d-md-block content">
            <Myroutes/>
        </div>

        <div className="d-block d-md-none">
            <Myroutes/>
        </div>
    </div>
    </>)

}

export default PrivateRoutes;