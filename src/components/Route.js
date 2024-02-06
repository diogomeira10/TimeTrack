import useNavigationContext from "../hooks/NavigationContext";

function Route({path, children}) {

    const {currentPath} = useNavigationContext();
    

    if (path === currentPath) {
        return children;
    }

    return null ;


};

export default Route;

//The purpose of the Rout component is to render its children only when the specified path matches the current navigation path