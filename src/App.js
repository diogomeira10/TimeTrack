import SideBar from "./components/SideBar";
import Route from "./components/Route";
import ArtistsPage from "./pages/ArtistsPage";
import TracksPage from "./pages/TracksPage";
import ProfilePage from "./pages/ProfilePage";
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
      <div className="flex h-48 w-80 justify-between">
        <p
          style={{ fontFamily: "Montserrat Alternates, sans-serif" }}
          className="text-white font-bold text-3xl mt-20 mb-1 ml-8">
          <div>
            <span className="text-gray-500">Time</span>
            <span className="text-orange-500">Track</span>
          </div>  
        </p>        
      </div>
      
      <SideBar />
      <div>
        <Route path="/profile">
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
        {/* <Route path="/last4weeksartists">
          <Weeks4Artists />
        </Route>
        <Route path="/last6monthsartists">
          <Months6Artists />
        </Route>
        <Route path="/lastyearartists">
          <LastYearArtists />
        </Route> */}
      </div>
    </div>
  );
}

export default App;
