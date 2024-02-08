import history from "../assets/data/history.json";
    
    //Total Plays
 export const totalPlays = history.length;



    //Unique Songs
 export const uniqueSongs = {};

 history.forEach((item) => {
   const songName = item.master_metadata_track_name;
   uniqueSongs[songName] = true;
 });

export const totalUniqueSongs = Object.keys(uniqueSongs).length;




    //Total Minutes
 const totalMilliseconds = history.reduce((total, item) => total + item.ms_played, 0);

 export const totalMinutes = totalMilliseconds / (1000 * 60);


 function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    } else {
        return "Winter";
    }
}




        //Season of The Year
const seasonTimes = {
    "Spring": 0,
    "Summer": 0,
    "Autumn": 0,
    "Winter": 0
};

// Calculate total time spent listening to music for each season
history.forEach(item => {
    const timestamp = new Date(item.ts);
    const month = timestamp.getMonth() + 1; // JavaScript months are 0-based
    const season = getSeason(month);
    seasonTimes[season] += item.ms_played;
});

// Find the season with the highest total time spent listening to music
export let maxSeason = "";
let maxTime = 0;
for (const season in seasonTimes) {
    if (seasonTimes[season] > maxTime) {
        maxTime = seasonTimes[season];
        maxSeason = season;
    }
}

export function horaMaisOuve() {
    const tempoPorHora = {};
    history.forEach((item) => {
      const hora = item.ts.split("T")[1].split(":")[0]; // "2017-09-11T" "18" "::00:11Z"
      const minutosTocados = parseInt(item.ms_played) / 60000;
      tempoPorHora[hora] = (tempoPorHora[hora] || 0) + minutosTocados; // tempoPorDia[18] = 4 + 4
    });
  
    const horaMaisTocada = Object.keys(tempoPorHora).reduce(
      (horaMaxima, horaAtual) => {
        if (tempoPorHora[horaAtual] > tempoPorHora[horaMaxima]) {
          return horaAtual;
        } else {
          return horaMaxima;
        }
      },
      Object.keys(tempoPorHora)[0]
    );
  
    return `${Number(horaMaisTocada)} and ${
      Number(horaMaisTocada) + 1
    }`;
  }



    //Média de tempo diaria

 export function calculateDailyAverageListeningTime(olaRafa) {
  
    const dailyListeningTime = {};
    history.forEach(item => {
        const timestamp = new Date(item.ts);
        const date = timestamp.toISOString().split('T')[0]; // Extracting date part
        if (!dailyListeningTime[date]) {
            dailyListeningTime[date] = 0;
        }
        dailyListeningTime[date] += item.ms_played;
    });

 
    const totalDays = Object.keys(dailyListeningTime).length;
    const totalListeningTime = Object.values(dailyListeningTime).reduce((total, time) => total + time, 0);


    const dailyAverageListeningTimeMinutes = totalListeningTime / (totalDays * 1000 * 60);

    return Math.round(dailyAverageListeningTimeMinutes)
}








//ARTISTS LISTS


//Lista de artistas mais ouvidos

export function calculateTopArtists() {
    // Initialize an object to store the total plays for each artist
    const artistPlays = {};

    // Calculate total plays for each artist
    history.forEach(item => {
        const artist = item.master_metadata_album_artist_name;
        if (!artistPlays[artist]) {
            artistPlays[artist] = 0;
        }
        artistPlays[artist]++;
    });

    // Convert the object into an array of [artist, plays] pairs
    const artistPlaysArray = Object.entries(artistPlays);

    // Sort the array based on the number of plays in descending order
    artistPlaysArray.sort((a, b) => b[1] - a[1]);

    // Return the top 100 artists
    return artistPlaysArray.slice(0, 100);
}






//TRACKS LISTS


export function getTopTracks(jsonData) {
  const tracks = {};

  history.forEach(entry => {
      const trackName = entry.master_metadata_track_name;
      if(!trackName) return 
      const msPlayed = entry.ms_played;
      const minutesPlayed = msPlayed / (1000 * 60); // Convert milliseconds to minutes
      if (tracks.hasOwnProperty(trackName)) {
          tracks[trackName] += minutesPlayed;
      } else {
          tracks[trackName] = minutesPlayed;
      }
  });

  const tracksArray = Object.entries(tracks);

 
  tracksArray.sort((a, b) => b[1] - a[1]);

  const top100Tracks = tracksArray.slice(0, 100);

  return top100Tracks;
}

export function getTopTracksLast4Weeks(jsonData) {
  const tracks = {};

  history.forEach(entry => {
    const trackName = entry.master_metadata_track_name;
    if(!trackName) return 
    const msPlayed = entry.ms_played;
    const minutesPlayed = msPlayed / (1000 * 60); // Convert milliseconds to minutes
    const entryDate = new Date(entry.ts);
    const fourWeeksAgo = new Date();
    fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28); // Get date 4 weeks ago

    if (entryDate >= fourWeeksAgo) {
      if (tracks.hasOwnProperty(trackName)) {
        tracks[trackName] += minutesPlayed;
      } else {
        tracks[trackName] = minutesPlayed;
      }
    }
  });

  const tracksArray = Object.entries(tracks);
  tracksArray.sort((a, b) => b[1] - a[1]);

  return tracksArray.slice(0, 100);
}

export function getTopTracksLast6Months(jsonData) {
  const tracks = {};
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6); // Get date 6 months ago

  history.forEach(entry => {
    const trackName = entry.master_metadata_track_name;
    if(!trackName) return 
    const msPlayed = entry.ms_played;
    const minutesPlayed = msPlayed / (1000 * 60); // Convert milliseconds to minutes
    const entryDate = new Date(entry.ts);

    if (entryDate >= sixMonthsAgo) {
      if (tracks.hasOwnProperty(trackName)) {
        tracks[trackName] += minutesPlayed;
      } else {
        tracks[trackName] = minutesPlayed;
      }
    }
  });

  const tracksArray = Object.entries(tracks);
  tracksArray.sort((a, b) => b[1] - a[1]);

  return tracksArray.slice(0, 100);
}

export function getTopTracksLastYear(jsonData) {
  const tracks = {};
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1); // Get date 1 year ago

  history.forEach(entry => {
    const trackName = entry.master_metadata_track_name;
    if(!trackName) return 
    const msPlayed = entry.ms_played;
    const minutesPlayed = msPlayed / (1000 * 60); // Convert milliseconds to minutes
    const entryDate = new Date(entry.ts);

    if (entryDate >= oneYearAgo) {
      if (tracks.hasOwnProperty(trackName)) {
        tracks[trackName] += minutesPlayed;
      } else {
        tracks[trackName] = minutesPlayed;
      }
    }
  });

  const tracksArray = Object.entries(tracks);
  tracksArray.sort((a, b) => b[1] - a[1]);

  return tracksArray.slice(0, 100);
}


export function getTopArtistsLast4Weeks(jsonData) {
  const artists = {};

  history.forEach(entry => {
    const artistName = entry.master_metadata_album_artist_name;
    if(!artistName) return
    const msPlayed = entry.ms_played;
    const minutesPlayed = msPlayed / (1000 * 60); // Convert milliseconds to minutes
    const entryDate = new Date(entry.ts);
    const fourWeeksAgo = new Date();
    fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28); // Get date 4 weeks ago

    if (entryDate >= fourWeeksAgo) {
      if (artists.hasOwnProperty(artistName)) {
        artists[artistName] += minutesPlayed;
      } else {
        artists[artistName] = minutesPlayed;
      }
    }
  });

  const artistsArray = Object.entries(artists);
  artistsArray.sort((a, b) => b[1] - a[1]);

  return artistsArray.slice(0, 100);
}

export function getTopArtistsLast6Months(jsonData) {
  const artists = {};
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6); // Get date 6 months ago

  history.forEach(entry => {
    const artistName = entry.master_metadata_album_artist_name;
    if(!artistName) return
    const msPlayed = entry.ms_played;
    const minutesPlayed = msPlayed / (1000 * 60); // Convert milliseconds to minutes
    const entryDate = new Date(entry.ts);

    if (entryDate >= sixMonthsAgo) {
      if (artists.hasOwnProperty(artistName)) {
        artists[artistName] += minutesPlayed;
      } else {
        artists[artistName] = minutesPlayed;
      }
    }
  });

  const artistsArray = Object.entries(artists);
  artistsArray.sort((a, b) => b[1] - a[1]);

  return artistsArray.slice(0, 100);
}

export function getTopArtistsLastYear(jsonData) {
  const artists = {};
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1); // Get date 1 year ago

  history.forEach(entry => {
    const artistName = entry.master_metadata_album_artist_name;
    if(!artistName) return
    const msPlayed = entry.ms_played;
    const minutesPlayed = msPlayed / (1000 * 60); // Convert milliseconds to minutes
    const entryDate = new Date(entry.ts);

    if (entryDate >= oneYearAgo) {
      if (artists.hasOwnProperty(artistName)) {
        artists[artistName] += minutesPlayed;
      } else {
        artists[artistName] = minutesPlayed;
      }
    }
  });

  const artistsArray = Object.entries(artists);
  artistsArray.sort((a, b) => b[1] - a[1]);

  return artistsArray.slice(0, 100);
}


//Estatisticas de um artista


