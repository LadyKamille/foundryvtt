const playlistName = args[0]
const soundName = args[1]
const action = args[2]

const playlist = game.playlists.getName(playlistName)

if (playlist === undefined) {
  ui.notifications.warn(`${playlistName} not found!`);
  return;
}

const sound = playlist.sounds.getName(soundName)

if (sound === undefined) {
  ui.notifications.warn(`${soundName} not found!`);
  return;
}

if(action === "play") {
  await playlist.playSound(sound);
} 
else {
  await playlist.stopAll(); 
}
