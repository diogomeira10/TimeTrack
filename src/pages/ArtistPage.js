import { InfoCard } from "../components/cards/InfoCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { DropDown } from "../components/Dropdown";
import { MiniSongCard } from "../components/cards/MiniSongCard";

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
}) {
  const renderedList = list.map((element, i) => {
    return (
      <MiniSongCard
        position={i + 1}
        name={element[0]}
        time={Math.round(element[1])}
      />
    );
  });

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = ["Always", "4 weeks", "6 months", "last year"];

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
        </div>
      </div>
      <div className="text-black">
        <div className="ml-6 font-bold mb-4 text-2xl">Total</div>
      </div>

      <div className="flex items-center justify-center gap-4 overflow-x-scroll">
        <InfoCard titulo="Total Minutes" valor={Math.round(totalMinutes)} />
        <InfoCard titulo="Total Records" valor={totalRecords} />
        <InfoCard titulo="Season of the year" valor={season} />
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <div className="ml-6 font-bold text-2xl">Top 20 Records</div>
          <div className="mr-4">
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
