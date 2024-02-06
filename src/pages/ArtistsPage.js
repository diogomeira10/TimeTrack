import SubSideBarArtists from "../components/SubSideBarTracks"
import ArtistCard from "../components/cards/ArtistsCard"


function ArtistsPage(params) {
    return (
        <div >
            <SubSideBarArtists />
            <div className="text-white"><ArtistCard /></div>
        </div>
    )
}

export default ArtistsPage