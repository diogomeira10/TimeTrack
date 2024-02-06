import classNames from 'classnames';
import useNavigationContext from "../hooks/NavigationContext";


function Link ({to, children, className, activeClassName}) { // to is the path that we are navigating to, whenever the user clicks on this thing. Children its going to be some text that we want to show inside of the anchor element.
     
    const {navigate, currentPath} = useNavigationContext();

    const classes = classNames('text-orange-500',
     className, // the className is to whenever some other developer uses our link component, they can easily add in some additional class name prop and customize our link in there for their particular use case.
    currentPath === to && activeClassName
     ) 

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault() // the entire goal of the link function is to make sure that clicking on an anchor element does not trigger a total page refresh.
       
        navigate(to);
        
    }
    
    return <a className={classes} href={to} onClick= {handleClick}>{children}</a>
}

export default Link ;