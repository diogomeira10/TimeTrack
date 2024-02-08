import SubSideBarArtists from "../components/SubSideBarArtists";
import ArtistCard from "../components/cards/ArtistsCard";
import { calculateTopArtists } from "../functions/functions";
import { useState } from "react";
import { ArtistPage } from "./ArtistPage";
import { countPlaysForArtist } from "../functions/functions";
import { countRecordsListenedByArtist } from "../functions/functions";
import { getMostListenedSeasonForArtist } from "../functions/functions";
import { calculatePercentageOfPlays } from "../functions/functions";
import { getPositionInTop100 } from "../functions/functions";
import { getTopSongsByArtist } from "../functions/functions";
import { MiniSongCard } from "../components/cards/MiniSongCard";
import { useEffect } from "react";

const INITIAL_TIME_FRAME = "Always";

function ArtistsPage(params) {
  const [artistList, setList] = useState(calculateTopArtists());
  const [songList, setSongList] = useState();
  const [selectedArtist, setSelected] = useState();
  const [timeRangeSelection, setSelection] = useState(INITIAL_TIME_FRAME);
  const totalMinutes = countPlaysForArtist(selectedArtist);
  const totalRecords = countRecordsListenedByArtist(selectedArtist);
  const percentage = calculatePercentageOfPlays(selectedArtist);
  const position = getPositionInTop100(selectedArtist);
  const season = getMostListenedSeasonForArtist(selectedArtist);

  useEffect(() => {
    if(selectedArtist === undefined) return
    setSongList(getTopSongsByArtist(selectedArtist, timeRangeSelection));
  }, [selectedArtist, timeRangeSelection])

  // const getTopArtistSongs = (period) => {
  //   setList(getTopSongsByArtist(selectedArtist, period));
  // };



  const renderedArtistsList = artistList.map((element, i) => {
    return (
      <ArtistCard
        onSelect={() => setSelected(element[0])}
        artist={element[0]}
        time={element[1]}
        indice={i + 1}
      />
    );
  });

  return (
    <div className="mb-20">
      {!selectedArtist || !songList ? (
        <>
          {renderedArtistsList}
          <SubSideBarArtists />
          <div className="text-white"></div>
        </>
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
            // onPeriodSelect={(period) => }
            artistName={selectedArtist}
            positionTop={position}
          />
        </>
      )}
    </div>
  );
}

export default ArtistsPage;
