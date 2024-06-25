import { Outlet } from "react-router-dom";
import Header from "../static/HeaderSection";
import Footer from "../static/FooterSection";

const WebLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default WebLayout;