import SubSideBarArtists from "../components/SubSideBarTracks"
import ArtistCard from "../components/cards/ArtistsCard"


function ArtistsPage(params) {
    return (
        <div >
          
            <div className="text-white"><ArtistCard /></div>  
            <SubSideBarArtists />
        </div>
    )
}

export default ArtistsPage