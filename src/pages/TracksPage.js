import TrackCard from "../components/cards/TracksCard";
import SubSideBarTracks from "../components/SubSideBarTracks";
import { calculateTopTracks } from "../functions/functions";


function TracksPage(params) {
  return (
    <div>
      <div className="text-white">
        <TrackCard />
        <SubSideBarTracks />
      </div>
    </div>
  );
}

export default TracksPage;
