import { InfoCard } from "../components/cards/InfoCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import { DropDown } from "../components/Dropdown";
import { MiniSongCard } from "../components/cards/MiniSongCard";
import { useState, useEffect } from "react";
import { getTopSongsByArtist } from "../functions/functions";
import { SearchBar } from "../components/SearchBar";

export function ArtistPage({
  artistName,
  positionTop,
  totalMinutes,
  totalRecords,
  season,
  list,
  streamPercentage,
  onBack,
  selection,
  setSelection,
  totalDifferentSongs
}) {

 
  const [listToRender, setListToRender] = useState(list);
 

  useEffect(() => {
    let newList = list
    switch (selection) {
      case "Always":
        newList = list;
        break;
      case "4 weeks":
        newList = getTopSongsByArtist(artistName, "4 weeks");
        break;
      case "6 months":
        newList = getTopSongsByArtist(artistName, "6 months");
        break;
      case "last year":
        newList = getTopSongsByArtist(artistName, "last year");
        break;
      default:
        break;
    }


    setListToRender(newList)

  }, [selection, artistName, list]);

  const renderedList = listToRender.map((element, i) => (
    <MiniSongCard
      key={i}
      position={i + 1}
      name={element[0]}
      time={Math.round(element[1])}
    />
  ));

  const handleSelect = (option) => {
    const lowercaseOption = option.toLowerCase();
    setSelection(lowercaseOption);
    console.log(lowercaseOption)
    console.log(listToRender)
  };


  const options = ["Always", "4 Weeks", "6 Months", "Last Year"];

  return (
    <div>
      <button className="ml-2" onClick={onBack}>
        <IoMdArrowRoundBack size="30" />
      </button>
      <div className="flex items-center justify-center gap-20 mb-5 h-40 bg-orange-700 text-white">
        <div>
          <div className="font-bold text-2xl">{artistName}</div>
          <div className="text-xs">{positionTop}th position</div>
          <div className="text-xs">Stream percentage: {streamPercentage}%</div>
          <div className="text-xs">Different songs listened: {totalDifferentSongs}</div>
        </div>
      </div>
      <div className="text-black">
        <div className="ml-6 font-bold mb-4 text-2xl">Total</div>
      </div>

      <div className="flex items-center justify-center gap-2 overflow-x-scroll">
        <InfoCard titulo="Total Minutes" valor={Math.round(totalMinutes)} />
        <InfoCard titulo="Total Records" valor={totalRecords} />
        <InfoCard titulo="Season of the year" valor={season} />
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <div className="ml-6 font-bold text-2xl">Top 20 Records</div>
          <div className="mr-6 mb-6">
            <DropDown
              value={selection}
              onChange={handleSelect}
              options={options}
            />
          </div>
        </div>
        <div className="">{renderedList}</div>
      </div>
    </div>
  );
}
