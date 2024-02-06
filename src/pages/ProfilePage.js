import React from 'react';
import {useState , useEffect} from 'react'
import ProfileImage from '../images/IMG_2292 sihgudwuiyqef 2.png';
import { InfoCard } from '../components/cards/InfoCard';
import history from "../assets/data/history.json";

function ProfilePage() {
  const totalPlays = history.length;

  const [uniqueSongsCount, setUniqueSongsCount] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);

  useEffect(() => {
    const uniqueSongs = new Set();

    // Iterate through history to count unique songs
    history.forEach(item => {
      uniqueSongs.add(item.master_metadata_track_name);
    });

    // Set the count of unique songs
    setUniqueSongsCount(uniqueSongs.size);
  }, []);
  useEffect(() => {
    // Calculate total minutes when component mounts
    const calculateTotalMinutes = () => {
      const total = history.reduce((accumulator, item) => accumulator + (item.ms_played / (1000 * 60)), 0); // Convert ms to minutes
      return total;
    };

    // Set the total minutes
    setTotalMinutes(Math.round(calculateTotalMinutes()));
  }, []);



  return (
    <div>
      <div className="flex bg-orange-400 h-32 text-white justify-around items-center">
        <div>
          <h2 className="text-lg">Pedro Pereira</h2>
          <p className="text-xs">Média de tempo diaria: </p>
        </div>
        <div>
          <img className="w-36" src={ProfileImage} alt="profile-pic" />
        </div>
      </div>
      <div className="mt-10">
        <p className="font-bold text-2xl ml-4 mb-4">Total</p>
        <div className="flex justify-around">
          <InfoCard informacao="Total Plays" value={totalPlays}/>
          <InfoCard informacao={"Total Records"} value={uniqueSongsCount} />
          <InfoCard informacao="Total Minutes" value={totalMinutes} />
        </div>
      </div>
      <div className="mt-10">
        <p className="font-bold text-2xl ml-4 mb-4">Minutos</p>
        <div className="flex justify-around">
          <InfoCard informacao="Season of the year" />
          <InfoCard informacao="Time of the day" />
          <InfoCard informacao="" />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;