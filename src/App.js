import SideBar from "./components/SideBar";
import Route from "./components/Route";
import ArtistsPage from "./pages/ArtistsPage";
import TracksPage from "./pages/TracksPage";
import GenresPage from "./pages/ProgilePage";
import logo from './images/logo.png';

function App() {
  /* const links = [
    {label: 'Artists', path: '/'}, 
    {label: 'Tracks', path: "/tracks"},
    {label: 'Albums', path: '/albums'},
    {label:'Genres', path:'/genres'},
]  */


  return (
    <div className="App">
      <div className="flex justify-between">
        <p className="text-white text-3xl mt-12 ml-12">Time Track</p>
        <img className="mr-4 mt-4" src={logo} />
      </div>
      
      <SideBar />
      <div>
        <Route path="/profile">
          <GenresPage />
        </Route>
        <Route path="/tracks">
          <TracksPage />
        </Route>
        <Route path="/">
          <ArtistsPage />
        </Route>
      </div>
    </div>
  );
}

export default App;






/* 

import Route from "./Components/Route";
import SideBar from "./Components/SideBar";
import AccordionPage from './Pages/AccordionPage';
import DropdownPage from './Pages/DropdownPage'
import ButtonPage from './Pages/ButtonPage';
import ModalPage from './Pages/ModalPage'
import TablePage from './Pages/TablePage'
import CounterPage from './Pages/CounterPage';

function App () {

 return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <SideBar />
        <div className="col-span-5">
            <Route path="/accordion">
                <AccordionPage/>
            </Route>
            <Route path='/'>
                <DropdownPage/>
            </Route>
            <Route path="/buttons">
                <ButtonPage/>
            </Route>
            <Route path="/modal">
                <ModalPage/>
            </Route>
            <Route path='/table'>
                <TablePage/>
            </Route>
            <Route path='/demo'>
                <CounterPage initialCount={10} />
            </Route>

        </div>
    </div>
    
 )
        

};

export default App; */