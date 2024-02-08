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


function ArtistsPage(params) {
  const [artistList, setList] = useState(calculateTopArtists());
  const [selectedArtist, setSelected] = useState();

  const totalMinutes = countPlaysForArtist(selectedArtist)
  const totalRecords = countRecordsListenedByArtist(selectedArtist)
  const percentage = calculatePercentageOfPlays(selectedArtist)
  const position = getPositionInTop100(selectedArtist)
  const season = getMostListenedSeasonForArtist(selectedArtist)
  const list = getTopSongsByArtist(selectedArtist)

  const renderedList = list.map((element,i) => {
        return <MiniSongCard position={i + 1} name={element[0]} time={Math.round(element[1])}/>
})

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
    <div>
      {!selectedArtist ? (
        <>
          {renderedArtistsList}
          <SubSideBarArtists />
          <div className="text-white">
            <ArtistCard />
          </div>
        </>
      ) : (
        <><ArtistPage list={renderedList} season={season} streamPercentage={percentage} totalRecords={totalRecords} totalMinutes={totalMinutes} onBack={() => setSelected(undefined)} artistName={selectedArtist} positionTop={position}/></>
      )}
    </div>
  );
}

export default ArtistsPage;
