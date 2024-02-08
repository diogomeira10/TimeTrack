import SubSideBarTracks from "../../components/SubSideBarTracks";
import { getTopTracksLast4Weeks } from "../../functions/functions";
import { TrackCard } from "../../components/cards/TracksCard";


function Weeks4Tracks() {
  const data = getTopTracksLast4Weeks();

  const renderedTracks = data.map((element, i) => {
    return (
      <TrackCard
        name={element[0]}
        time={Math.round(element[1])}
        position={i + 1}
      />
    );
  });

  return (
    <div>
      <SubSideBarTracks />
      <div>{renderedTracks}</div>
    </div>
  );
}

export default Weeks4Tracks