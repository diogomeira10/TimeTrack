function ArtistCard({artist, time,indice, onSelect}) {
  return (
    <div onClick={onSelect} className="bg-slate-300 rounded-xl font-bold flex text-gray-700 align-middle border mr-5 ml-5 border-white p-4 mb-4">
      <div className="font-bold text-3xl">#{indice}</div>
      <div className="ml-20">
        <div>{artist}</div>
        <div className="text-xs">{time} plays</div>
        
      </div>
    </div>
  );
}

export default ArtistCard;
