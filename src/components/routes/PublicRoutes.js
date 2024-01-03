import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../screens/Login";

const PublicRoutes = () => {

    return(<>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
    </>)

}

export default PublicRoutes;