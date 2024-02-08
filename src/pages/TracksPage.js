import SubSideBarTracks from "../components/SubSideBarTracks";
import EverSinceTracks from "./lists/EversinceTracks";

function TracksPage(params) {
  
  return (
    <div className="mb-20">
      <div className="text-white">
        <SubSideBarTracks />
        <EverSinceTracks />
      </div>
    </div>
  );
}

export default TracksPage;
