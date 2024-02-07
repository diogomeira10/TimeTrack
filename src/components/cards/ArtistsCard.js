function ArtistCard({artist, time,indice}) {
  return (
    <div className="bg-slate-300 font-bold flex text-black align-middle border mr-5 ml-5 border-white p-4 mb-4">
      <div className="font-bold text-3xl">#{indice}</div>
      <div className="ml-20">
        <div>{artist}</div>
        <div className="text-xs">{time} plays</div>
        
      </div>
    </div>
  );
}

export default ArtistCard;
