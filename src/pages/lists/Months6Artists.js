import SubSideBarArtists from "../../components/SubSideBarArtists";
import { getTopArtistsLast6Months } from "../../functions/functions";
import ArtistCard from "../../components/cards/ArtistsCard";

function Months6Artists() {

  const data = getTopArtistsLast6Months()

  const renderedItems = data.map((element,i) => {
   return <ArtistCard artist={element[0]} time={Math.round(element[1])} indice={i + 1}/>
  })

  return (
    <div>
      <SubSideBarArtists /> 
      {renderedItems}
    </div>
  );
}

export default Months6Artists;
