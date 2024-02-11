import SubSideBarArtists from "../../components/SubSideBarArtists"
import { getTopArtistsLast4Weeks } from "../../functions/functions"
import ArtistCard from "../../components/cards/ArtistsCard"


function Weeks4Artists () {

    const data = getTopArtistsLast4Weeks()

    const renderedItems = data.map((element,i) => {
        return <ArtistCard artist={element[0]} time={Math.round(element[1])} indice={i + 1}/>
    })



    return (
    <div> 
        <div>
             <SubSideBarArtists />
        </div>
        {renderedItems}
        </div>
        )
}

export default Weeks4Artists