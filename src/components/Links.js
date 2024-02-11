import classNames from 'classnames';
import useNavigationContext from "../hooks/NavigationContext";


function Link ({to, children, className, activeClassName}) { 
     
    const {navigate, currentPath} = useNavigationContext();

    const classes = classNames('text-orange-500',
     className, 
    currentPath === to && activeClassName
     ) 

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault()
       
        navigate(to);
        
    }
    
    return <a className={classes} href={to} onClick= {handleClick}>{children}</a>
}

export default Link ;