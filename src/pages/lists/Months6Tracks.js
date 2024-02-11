import SubSideBarTracks from "../../components/SubSideBarTracks";
import { getTopTracksLast6Months } from "../../functions/functions";
import { TrackCard } from "../../components/cards/TracksCard";

function Months6Tracks() {

  const data = getTopTracksLast6Months();

  const renderedTracks = data.map((element,i) => {
    return <TrackCard
    name={element[0]}
    time={Math.round(element[1])}
    position={i + 1}
  />
});

  return (
    <div>
      <SubSideBarTracks />
      <div>{renderedTracks}</div>
    </div>
  );
}

export default Months6Tracks;
