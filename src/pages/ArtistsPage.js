import SubSideBarArtists from "../components/SubSideBarArtists";
import ArtistCard from "../components/cards/ArtistsCard";
import { calculateTopArtists, getTopArtistsLast4Weeks, getTopArtistsLast6Months, getTopArtistsLastYear } from "../functions/functions";
import { useState } from "react";
import { ArtistPage } from "./ArtistPage";
import { countPlaysForArtist } from "../functions/functions";
import { countRecordsListenedByArtist } from "../functions/functions";
import { getMostListenedSeasonForArtist } from "../functions/functions";
import { calculatePercentageOfPlays } from "../functions/functions";
import { getPositionInTop100 } from "../functions/functions";
import { getTopSongsByArtist } from "../functions/functions";
import { musicasDiferentesArtista } from "../functions/functions";
import { useEffect } from "react";

import { SearchBar } from "../components/SearchBar";


const INITIAL_TIME_FRAME = "Always";

function ArtistsPage(params) {
  const [artistList, setList] = useState(calculateTopArtists());
  const [songList, setSongList] = useState();
  const [selectedArtist, setSelected] = useState();
  const [timeRangeSelection, setSelection] = useState(INITIAL_TIME_FRAME);
  const [pageTimeRangeSelection, setPageSelection] = useState("Ever Since");
  const totalMinutes = countPlaysForArtist(selectedArtist);
  const totalRecords = countRecordsListenedByArtist(selectedArtist);
  const percentage = calculatePercentageOfPlays(selectedArtist);
  const position = getPositionInTop100(selectedArtist);
  const season = getMostListenedSeasonForArtist(selectedArtist);
  const totalDifferentSongs = musicasDiferentesArtista(selectedArtist);

  const [term, setTerm] = useState('');
  const [showInput, setShowInput] = useState(false);


  const handleChange = (e) => {
    setTerm(e.target.value);
    const filteredList = calculateTopArtists().filter((element) => element[0].toLowerCase().includes(term.toLowerCase()))
    setList(filteredList)
  };

  const handleShowInput = () => {
    setShowInput(!showInput);

  };


  useEffect(() => {
    if (selectedArtist === undefined) return;
    setSongList(getTopSongsByArtist(selectedArtist, timeRangeSelection));
  }, [selectedArtist, timeRangeSelection]);

  
  const handleSetSelection = (newTimeRange) => {
    setPageSelection(newTimeRange);
    if(newTimeRange === "Ever Since") {
      setList(calculateTopArtists())
    } else if (newTimeRange === "Last 4 Weeks") {
      setList(getTopArtistsLast4Weeks())
    } else if(newTimeRange === "Last 6 Months") {
      setList(getTopArtistsLast6Months())
    } else if(newTimeRange === "Last Year") {

      setList(getTopArtistsLastYear())

      setList(getTopArtistsLastYear)

    }
  };

  const renderedArtistsList = artistList.map((element, i) => {
    return (
      <ArtistCard
        onSelect={() => setSelected(element[0])}
        artist={element[0]}
        time={Math.round(element[1])}
        indice={i + 1}
      />
    );
  });

  return (
    <div className="mb-20">

      <SearchBar input={showInput} term={term} onChange={handleChange} handleInput={handleShowInput}/>

      {!selectedArtist || !songList ? (
        <div className=" ">
          {renderedArtistsList}
          <div className="mt-10">
            <SubSideBarArtists setPageTimeRange={handleSetSelection} />
          </div>
          <div className="text-white"></div>
        </div>
      ) : (
        <>
          <ArtistPage
            setSelection={setSelection}
            selection={timeRangeSelection}
            list={songList}
            season={season}
            streamPercentage={percentage}
            totalRecords={totalRecords}
            totalMinutes={totalMinutes}
            onBack={() => setSelected(undefined)}
            artistName={selectedArtist}
            positionTop={position}
            totalDifferentSongs={totalDifferentSongs}
          />
        </>
      )}
    </div>
  );
}

export default ArtistsPage;
