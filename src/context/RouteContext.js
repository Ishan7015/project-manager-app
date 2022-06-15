import { createContext, useState } from "react";

const routeContext = createContext();

export function RouteProvider({ children }) {
    const [route, setRoute] = useState('signin');

    //Function to change current route for rerouting
    const onRouteChange = (newRoute) => {
        setRoute(newRoute);
    }

    return (
        <routeContext.Provider value={{route, onRouteChange}}>
            {children}
        </routeContext.Provider>
    )
}

export default routeContext;