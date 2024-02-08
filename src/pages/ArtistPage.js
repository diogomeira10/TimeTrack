import { InfoCard } from "../components/cards/InfoCard";

export function ArtistPage({artistName, positionTop, totalMinutes,totalRecords,season, list,streamPercentage}) {


  /* const renderedList = list.map((element) => {

})
     */


  return (
    <div>
      <div className="flex items-center justify-center gap-20 mb-5 h-40 bg-orange-700 text-white">
        <div>
          <div className="font-bold">{artistName}Nome</div>
          <div className="text-xs">{positionTop}position</div>
          <div className="text-xs">Stream percentage:{streamPercentage}</div>
        </div>
      </div>
      <div className="text-black">
        <div className="ml-6 font-bold mb-4 text-2xl">Total</div>
      </div>

      <div className="flex items-center justify-center gap-4 overflow-x-scroll">
        <InfoCard titulo="Total Minutes" valor={totalMinutes} />
        <InfoCard titulo="Total Records" valor={totalRecords} />
        <InfoCard titulo="Season of the year" valor={season}/>
      </div>
    <div className="mt-10">
        <div className="ml-6 font-bold mb-4 text-2xl">Top 20 Records</div>
        <div>{/* {renderedList} */}</div>
    </div>
    </div>
  );
}
