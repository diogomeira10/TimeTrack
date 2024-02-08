import { InfoCard } from "../components/cards/InfoCard";
import ProfilePic from "../images/pic.png";
import { totalMinutes, totalUniqueSongs, totalPlays, maxSeason, horaMaisOuve , calculateDailyAverageListeningTime} from "../functions/functions";



function ProfilePage(params) {


  return (
    <div>
      <div className="flex items-center justify-center gap-20 mb-5 h-40 bg-orange-700 text-white">
        <div>
          <div className="font-bold">Pedro Pereira</div>
          <div className="text-xs">@pedrodspereira_</div>
        </div>
        <img className="w-32" src={ProfilePic} alt="Profile-Pic" />
      </div>

      <div className="text-black">
        <div className="ml-6 font-bold mb-4 text-2xl">Total</div>
      </div>
      <div className="flex items-center justify-center gap-4 overflow-x-scroll">
        <InfoCard titulo="Total Plays" valor={totalPlays} />
        <InfoCard titulo="Total Records" valor={totalUniqueSongs} />
        <InfoCard titulo="Total Minutes" valor={Math.round(totalMinutes)}/>
        
      </div>
      <div className="text-black mt-16">
        <div className="ml-6 font-bold mb-4 text-2xl">Minutes</div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <InfoCard titulo="Season of the year" valor={maxSeason}/>
        <InfoCard titulo="Time of the day" valor={horaMaisOuve()}/>
        <InfoCard titulo="Average time per day" valor={calculateDailyAverageListeningTime() + "m"} />
      </div>
    </div>
  );
}

export default ProfilePage;
