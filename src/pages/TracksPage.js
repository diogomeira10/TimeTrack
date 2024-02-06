import TrackCard from "../components/cards/TracksCard";
import SubSideBarTracks from "../components/SubSideBarTracks";

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
