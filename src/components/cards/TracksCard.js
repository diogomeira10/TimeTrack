 export function TrackCard({name,time,position}) {
        return (
        <div className="bg-slate-300 mb-4 flex font-bold text-gray-700 align-middle border mr-5 ml-5 border-white p-4">
          <div className="text-3xl">#{position}</div>
          <div className="ml-20">
            <div>{name}</div>
            <div className="text-xs">{time} minutes</div>
          </div>
        </div>
      );
    }


