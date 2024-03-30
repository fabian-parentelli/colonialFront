import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Sidebar from '../components/Sidebar/Sidebar';
import { useLoginContext } from "../context/LoginContext";

import Body from '../components/Body/Body';
import Login from "../components/user/Login/Login";
import Register from "../components/user/Register/Register";
import WhatEmail from "../components/user/recoverPassword/WhatEmail/WhatEmail";
import NewPassword from "../components/user/recoverPassword/NewPassword/NewPassword";

import UpdateUser from "../components/user/UpdateUser/UpdateUser";
import Console from "../components/Console/Console";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import OredrUser from "../components/OrderUser/OrderUser";
import VewOrderUserId from "../components/OrderUser/VewOrderUserId/VewOrderUserId";

const RoutesComp = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <Nav />
            {user.logged && <Sidebar />}
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/what_email" element={<WhatEmail />} />
                <Route path="/password/:token" element={<NewPassword />} />
                <Route path="/cart" element={<Cart />} />

                {user.logged &&
                    <>
                        <Route path="/console/*" element={<Console />} />
                        <Route path="/updateuser" element={<UpdateUser />} />
                        <Route path="/orderuser" element={<OredrUser />} />
                        <Route path="/veworderuserid/:id" element={<VewOrderUserId />} />
                    </>
                }
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RoutesComp;