import { Outlet } from 'react-router-dom';
import AllPath from '../Navber/AllPath';
import Navbar from '../Navber/Navber';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AllPath></AllPath>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;