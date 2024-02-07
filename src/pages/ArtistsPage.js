import SubSideBarArtists from "../components/SubSideBarArtists"
import ArtistCard from "../components/cards/ArtistsCard"
import { calculateTopArtists } from "../functions/functions"


function ArtistsPage(params) {

    const artistsList = calculateTopArtists()

    const renderedArtistsList = artistsList.map((element, i) => {
        return <ArtistCard artist={element[0]} time={element[1]} indice={i + 1}/>
    })


    return (
        <div>
            {renderedArtistsList}
            <SubSideBarArtists />
            <div className="text-white"><ArtistCard /></div>
        </div>
    )
}

export default ArtistsPage