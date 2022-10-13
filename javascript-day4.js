const song = [
  {
    titleSong: "Resah menjadi luka",
    artist: "Daun jatuh",
    duration: 3,
    genre: "indie",
  },
  {
    titleSong: "Antara pagi dan kau",
    artist: "Daun jatuh",
    duration: 4,
    genre: "indie",
  },
  {
    titleSong: "L",
    artist: "Hal",
    duration: 3,
    genre: "indie",
  },
  {
    titleSong: "Senin pagi di bulan juli",
    artist: "Hal",
    duration: 4,
    genre: "indie",
  },
  {
    titleSong: "Alone",
    artist: "Marsmallow",
    duration: 4,
    genre: "EDM",
  },
  {
    titleSong: "Jocelyn flores",
    artist: "xxxtentacion",
    duration: 5,
    genre: "EDM",
  },
  {
    titleSong: "Memories",
    artist: "Maroon 5",
    duration: 3,
    genre: "pop",
  },
  {
    titleSong: "beside you",
    artist: "Keshi",
    duration: 4,
    genre: "pop",
  },
  {
    titleSong: "Opening",
    artist: "Tenno",
    duration: 25,
    genre: "lo-fi",
  },
  {
    titleSong: "A New Beginning",
    artist: "Tenno",
    duration: 20,
    genre: "lo-fi",
  },
];

// song.forEach((artists) => {
//   const { artist } = artists;
// });

function groupArtist(artist) {
  // for (artist in song) {
  //   if (artist == song.includes(artist)) {
  //     const element = song[artist];
  //     console.log(element.artist);
  //     return element.artist;
  //   }
  // }
  let artistList = song.filter((element) => element.artist == artist);
  return artistList;
}

// let artiss = groupArtist("Tenno");
// console.log(artiss);

function groupGendre(genre) {
  let genreList = song.filter((element) => element.genre == genre);
  return genreList;
}
// let genree = groupGendre("EDM");
// console.log(genree);

function Duration(duration) {
  let listSong = [];
  let durasi = 0;
  for (const a of song) {
    if (a.duration < duration) {
      listSong.push(a);
      durasi += a.duration;
    }
    if (durasi > duration) {
      break;
    } else {
      continue;
    }
  }
  return { listSong, durasi };
}

let durasi = Duration(60);
console.log(durasi);
