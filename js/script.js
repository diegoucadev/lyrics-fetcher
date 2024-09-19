//WORKS
const baseURL = 'https://api.lyrics.ovh/v1/'
async function fetchLyrics() {
    let response = await fetch('https://api.lyrics.ovh/v1/elton-john/tiny-dancer');
    if (response.ok) {
        const json = await response.json();
        console.log(json.lyrics);
    }
}

fetchLyrics();