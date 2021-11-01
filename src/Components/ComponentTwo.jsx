import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Context.jsx';
import '../App.css';

const ComponentTwo = () => {

    let { state, dispatch } = useContext(GlobalContext);

    const login = () => {
        dispatch({
            type: "USER_LOGIN",
            payload: {
                name: "Virtual Developers",
                email: "VirtualDevelopers@gmail.com"
            }
        })
    }

    const logout = () => {
        dispatch({
            type: "USER_LOGOUT"
        })
    }

    const ToogleTheme = () => {
        dispatch({
            type: "TOOGLE_THEME"
        })
    }

    return (
        <div className={(state.Darktheme === true) ? "DarkMode" : "LightMode"}>
            <h1>HI I am component one</h1><br />
            <p>
                username: {state.user.name}<br />
                email: {state.user.email}
            </p>
            <br />
            <h3>{(state.Darktheme === true) ? "Dark theme activated" : "Light Theme activated"}</h3>
            <br />
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
            <button onClick={ToogleTheme}>Change theme</button>
        </div>
    )
}

export default ComponentTwo;