/**
 * The function make_album() takes in two arguments, artist_name and album_title, and returns a
 * dictionary with the keys artist_name and album_title
 * @param artist_name - The name of the artist.
 * @param album_title - The title of the album.
 * @param [track=0] - 0
 */
const make_album = (artist_name, album_title, track = 0) => {
    console.log({
    "Artist Name": artist_name,
    "Album Title": album_title,
track: track,
    });
};
make_album("Sameer", "ajeeb dastan hy");
make_album("Sooraj", "Waqat asan hy");
make_album("laiba", "Zindgi haseen ha");
make_album("amna", "Zindgi haseen ha", 20);
