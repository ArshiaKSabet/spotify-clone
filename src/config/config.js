export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "47b69eb399e840fa8202a3316e1bd891";
export const liveURL = "https://techover-spotify.herokuapp.com/";
export const devURL = "https://spotify-clone-pink-one.vercel.app/";
export const redirectURL = devURL;
export const scopes = [
  "ugc-image-upload",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-follow-modify",
  "user-follow-read",
  "user-read-recently-played",
  "user-read-playback-position",
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "app-remote-control",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-modify",
  "user-library-read",
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
