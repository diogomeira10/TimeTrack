import Link from "./Links"

function SubSideBarTracks(params) {
    
    /* const {navigate, currentPath} = useNavigationContext();
    to={currentPath + link.path} */
    const links = [
        {label: 'Ever Since', path:'/eversincetracks'},
        {label: 'Last 4 Weeks', path: '/last4weekstracks'}, 
        {label: 'Last 6 Months', path: "/last6monthstracks"},
        {label: 'Last Year', path: "/lastyeartracks"}
    ] 

    const renderedLinks = links.map((link) => {   
        return <Link 
                activeClassName='font-bold border-b-2 border-orange-500 pl-2' 
                className="mb-20" 
                key={link.label} 
                to={link.path}
                >
                        {link.label}
                </Link>
    }) 
    return (
        <div className='bg-slate-100 pt-3 align-middle text-sm fixed top-20 left-0 right-0 mt-6 flex justify-around h-12'>
            {renderedLinks}
        </div>
    )

};





export default SubSideBarTracks