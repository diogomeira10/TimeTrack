import SideBar from "./components/SideBar";
import Route from "./components/Route";
import ArtistsPage from "./pages/ArtistsPage";
import TracksPage from "./pages/TracksPage";
import ProfilePage from "./pages/ProfilePage";
import { ArtistPage } from "./pages/ArtistPage";
import logo from "./images/logo.png";
import EverSinceTracks from "./pages/lists/EversinceTracks";
import LastYearArtists from "./pages/lists/LastYearArtists";
import LastYearTracks from "./pages/lists/LastYearTracks";
import Months6Artists from "./pages/lists/Months6Artists";
import Months6Tracks from "./pages/lists/Months6Tracks";
import Weeks4Artists from "./pages/lists/Weeks4Artists";
import Weeks4Tracks from "./pages/lists/Weeks4Tracks";

function App() {
  return (
    <div className="App">
      <div className="flex justify-between mb-16">
        <p
          style={{ fontFamily: "Montserrat Alternates, sans-serif" }}
          className="text-white font-bold text-3xl mt-12 ml-12"
        >
          <span className="text-gray-300">Time</span>
          <span className="text-orange-500">Track</span>
        </p>
        <img className="mr-4 mt-4" src={logo} alt="logo" />
      </div>

      <SideBar />
      <div>
        <Route path="/profile">
          {/* <ProfilePage /> */}
          <ProfilePage />
        </Route>
        <Route path="/tracks">
          <TracksPage />
        </Route>
        <Route path="/artists">
          <ArtistsPage />
        </Route>

        <Route path="/eversincetracks">
          <EverSinceTracks />
        </Route>
        <Route path="/last4weekstracks">
          <Weeks4Tracks />
        </Route>
        <Route path="/last6monthstracks">
          <Months6Tracks />
        </Route>
        <Route path="/lastyeartracks">
          <LastYearTracks />
        </Route>
        <Route path="/eversinceartists">
          <ArtistsPage />
        </Route>
        <Route path="/last4weeksartists">
          <Weeks4Artists />
        </Route>
        <Route path="/last6monthsartists">
          <Months6Artists />
        </Route>
        <Route path="/lastyearartists">
          <LastYearArtists />
        </Route>
      </div>
    </div>
  );
}

export default App;
