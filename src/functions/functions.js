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

export function calculateTopTracks(jsonData) {
    // Initialize an object to store the total minutes played for each track
    const trackMinutes = {};

    // Calculate total minutes played for each track
    history.forEach(item => {
        const trackName = item.master_metadata_track_name;
        if (!trackMinutes[trackName]) {
            trackMinutes[trackName] = 0;
        }
        trackMinutes[trackName] += item.ms_played / (1000 * 60); // Convert milliseconds to minutes
    });

    // Convert the object into an array of [track, minutes] pairs
    const trackMinutesArray = Object.entries(trackMinutes);

    // Sort the array based on the number of minutes played in descending order
    trackMinutesArray.sort((a, b) => b[1] - a[1]);

    // Return the top 100 tracks
    return trackMinutesArray.slice(0, 100);
}




/* //13- [D] Ver uma lista com top 20 músicas ordenadas por millisegundos em plays.(artista)
function topMusicaPorArtista(array, artista) {
    let musicaPorArtista = []
  
    for (let i = 0; i < array.length; i++) {
      const artistaNome = array[i].master_metadata_album_artist_name
      if (artista !== artistaNome) continue
      const musica = array[i].master_metadata_track_name
      const tempoPlays = array[i].ms_played
  
      if (!musicaPorArtista.some(e => e.musica === musica)) {
        musicaPorArtista.push({ musica: musica, tempo: 0 })
      }
  
      musicaPorArtista = musicaPorArtista.map(e => e.musica === musica ? ({ ...e, tempo: e.tempo + tempoPlays }) : e)
    }
    //console.log(musicaPorArtista)
    const topMusicaArtista = musicaPorArtista.sort((a, b) => b.tempo - a.tempo)
    return topMusicaArtista
  }
  //console.log(topMusicaPorArtista(array, "A$AP Rocky")) VVV
 */