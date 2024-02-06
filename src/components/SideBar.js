import Link from "./Links"

function SideBar () {

    const links = [
        {label:'Profile', path:'/profile'},
        {label: 'Artists', path: '/'}, 
        {label: 'Tracks', path: "/tracks"},
    ] 

    const renderedLinks = links.map((link) => {   
        return <Link 
                activeClassName='font-bold border-l-4 border-orange-500 pl-2' 
                className="mb-3" 
                key={link.label} 
                to={link.path}
                >
                
                        {link.label}
                 
                </Link>
    }) 

    return (
        <div className='fixed bottom-10 left-0 right-0 mt-6 flex justify-around border border-black h-8'>
            {renderedLinks}
        </div>
    )

};

export default SideBar;



// if we returned this:
// <Link />
// <Link />
// <Link />
// <Link />
// it would get really tedious because if we ever want to make a change or maybe add some CSS, or classname to this different link things right here, we would have to go through and update every single one.
// Instead  We're going to create an array of objects that are going to represent the individual links that we want to show to a user.
//We're then going to map over that array of objects, and for every object we'll produce a link component using the label to specify what we want to show inside the link and path to specify the address the
//user is going to go to whenever a user clicks on the link.