const baseURL = 'https://api.lyrics.ovh/v1/'
let lyrics = ""

async function fetchLyrics(artist, songName) {
    let response = await fetch(`${baseURL}+${artist}/+${songName}`);
    if (response.ok) {
        const json = await response.json();
        console.log(json.lyrics);
    }
}

function formatSearch() {
    return undefined;
}