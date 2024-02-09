import Link from "./Links"

function SideBar () {

    const links = [
        {label:'Profile', path:'/profile'},
        {label: 'Artists', path: '/artists'}, 
        {label: 'Tracks', path: "/tracks"},
    ] 

    const renderedLinks = links.map((link) => {   
        return <Link 
                activeClassName='font-bold border-b-2 border-orange-500' 
                className="mb-3 mt-3" 
                key={link.label} 
                to={link.path}
                >
                        {link.label}
                </Link>
    }) 

    return (
        <div className="">
            <div className='bg-neutral-600 rounded-xl font-bold fixed bottom-5 left-6 right-6 mt-6 flex justify-around align-middle h-12'>
            {renderedLinks}</div>
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