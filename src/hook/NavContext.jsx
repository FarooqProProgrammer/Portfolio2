import { createContext, useState } from "react";

export const NavContext = createContext();


export const NavProvider = ({ children }) => {
    const [NavEnabled, setNavEnabled] = useState(false);

    const ToggleNavEnabled = () => {
        setNavEnabled(!NavEnabled)
    }

    return (
        <NavContext.Provider value={{ NavEnabled, ToggleNavEnabled }}>
            {children}
        </NavContext.Provider>
    )
}