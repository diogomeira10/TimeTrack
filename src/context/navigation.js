import {createContext, useState, useEffect} from 'react';

const NavigationContext = createContext();

function NavigationProvider ({children}) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname); 

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', handler); //popstate it's when the user clicks forward and back when the user is navigating between different addresses that they got to by using that push state function.

        return () => {
            window.removeEventListener('popstate', handler);
        }
    },[])

    const navigate = (to) => { // to is the path that we are going to navigate to... so it could be something like to === '/dropdown'
        window.history.pushState({},'', to)
        setCurrentPath(to)
    };


    
    return <NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>
};


export { NavigationProvider };
export default NavigationContext;