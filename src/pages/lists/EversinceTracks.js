import SubSideBarTracks from "../../components/SubSideBarTracks";
import { getTopTracks } from "../../functions/functions";
import { TrackCard } from "../../components/cards/TracksCard";

function EverSinceTracks() {


    const musicList = getTopTracks()

    const renderedArtistsList = musicList.map((element, i) => {
        return <TrackCard name={element[0]} time={Math.round(element[1])} position={i + 1}/>
    })



  return(
  <div>
    <SubSideBarTracks />
    <div>{renderedArtistsList}</div>
  </div>
   )
}

export default EverSinceTracks;
