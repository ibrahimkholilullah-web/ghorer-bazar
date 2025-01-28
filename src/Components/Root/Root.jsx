import { Outlet } from 'react-router-dom';
import AllPath from '../Navber/AllPath';
import Navbar from '../Navber/Navber';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AllPath></AllPath>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;