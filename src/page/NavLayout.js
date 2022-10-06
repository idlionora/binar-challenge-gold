import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Outlet } from "react-router-dom";
import { FooterComp } from "../components/Footer";
import { NavbarComp } from "../components/Header";

function NavLayout() {
    return (
        <>
        <NavbarComp/>
        <Outlet/>
        <FooterComp/>
        </>
    )
}

export default NavLayout;