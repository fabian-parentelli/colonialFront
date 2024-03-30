import { createContext, useContext, useState } from "react";
import { registerApi } from '../helpers/users/regsiter.api.js';
import { loginApi } from "../helpers/users/login.api.js";
import { currentApi } from "../helpers/users/current.api.js";
import { updateUserApi } from '../helpers/users/updateUser.api.js';

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        isLogged: false,
        data: null,
        error: null,
        logged: false,
        registered: false,
        update: false
    });

    const register = async (user) => {
        setLoading(true);
        const registerData = await registerApi(user);
        if (registerData.error) setUser({ error: registerData.error });
        if (registerData.data.status === 'success') setLoading(false);
        return setUser({ registered: true });
    };

    const login = async (user) => {
        setLoading(true);
        const loginData = await loginApi(user);
        if (loginData.error) {
            setUser({ error: loginData.error, logged: false, isLogged: false });
        };
        if (loginData.status === 'success') {
            localStorage.setItem('token', loginData.accesToken);
            setUser({...user, logged: true, isLogged: true });
        };
        setLoading(false);
    };

    const isLogin = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const dataUser = await currentApi(token);
            if (dataUser.error) {
                localStorage.removeItem('token');
                return setUser({ isLogged: false, logged: false });
            };
            setUser({ isLogged: true, data: dataUser, logged: true });
        } else {
            // Por el momento Nada
        };
    };

    const logout = () => {
        setUser({ isLogged: false, data: null, error: null, logged: false, registered: false });
        localStorage.removeItem('token');
    };

    const updateUser = async (user) => {
        setLoading(true);
        const userUpdate = await updateUserApi(user);
        if (userUpdate.error) {
            setUser({ error: userUpdate.error, logged: false, isLogged: false });
        };
        if (userUpdate.status === 'success') {
            localStorage.setItem('token', userUpdate.accesToken);
            setUser({ isLogged: true, data: userUpdate, logged: true, update: true });
        };
        setLoading(false);
    };

    return (
        <LoginContext.Provider
            value={{
                user, setUser, register, loading, login, isLogin, logout, updateUser
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;