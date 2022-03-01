const gmMacro = game.macros.getName("Toggle Sound")
const userName = game.user.name; 
window.populateSounds = (selectObject) => {
  const select = document.getElementById('choose_sound');
  playList = game.playlists.get(selectObject.value);
  playList.sounds.contents.forEach((sound) => {
    select.add(new Option(sound.name, sound.id));
  })
}

let playList, soundList;

const playlistOptions = game.playlists.reduce((acc, e) => acc += `<option value="${e.id}">${e.name}</option>`,``); 
const playlistContent = `<select name="playlist" onchange="populateSounds(this)"><option ="">Select a playlist</option>${playlistOptions}</select>`;
const soundContent = `<select id="choose_sound" name="sound"><option ="">Select a sound</option></select>`;

const content = `<label>Playlist: ${playlistContent}</label><br><label>Sound: ${soundContent}</label>`

const d = new Dialog({ 
    title: "Song selector", 
    content, 
    buttons: { 
        ok: { 
            label: "Play!", 
            callback: (html) => { 
                var select = document.getElementById("choose_sound");
                const soundName = select.options[select.selectedIndex].text
                const mode = "play"; 
                gmMacro.execute(playList.name, soundName, mode); 
                d.render(true) 
            } 
        },
        cancel: { 
            label: "Stop!", 
            callback: () => { 
                const mode = "stop";
                gmMacro.execute(playList.name, "", mode); 
                d.render(true)
            } 
        } 
    } 
}).render(true)
