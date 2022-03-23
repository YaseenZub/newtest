import { Navigate, Outlet } from "react-router";

function PublicRoutes(props){
    const isnotAuth=props.isnotAuth;
    return isnotAuth ? <Outlet /> : <Navigate to="/profile" />;
}

export default PublicRoutes;