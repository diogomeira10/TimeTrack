import SubSideBarArtists from "../../components/SubSideBarArtists"
import { getTopArtistsLastYear } from "../../functions/functions";
import ArtistCard from "../../components/cards/ArtistsCard";

function LastYearArtists () {

    const data = getTopArtistsLastYear()

    const renderedData = data.map((element,i) => {
        return <ArtistCard artist={element[0]} time={Math.round(element[1])} indice={i + 1}/>
    })



return  (
<div>
<div><SubSideBarArtists/></div>
<div>{renderedData}</div>
</div>
    )
}


export default LastYearArtists;