import SubSideBarTracks from "../../components/SubSideBarTracks";
import { getTopTracksLastYear } from "../../functions/functions";
import { TrackCard } from "../../components/cards/TracksCard";

function LastYearTracks() {

  const data = getTopTracksLastYear()

  const renderedItems = data.map((element,i) => {
    return  <TrackCard
    name={element[0]}
    time={Math.round(element[1])}
    position={i + 1}
  />
  })


  return (
    <div>
      <div>
        <SubSideBarTracks />
        {renderedItems}
      </div>
    </div>
  );
}

export default LastYearTracks;
