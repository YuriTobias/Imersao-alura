const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const playlistCards = document.getElementById("playlist-cards");
const searchResults = document.getElementById("search-results");

function requestApi(searchArtist) {
    const url = `http://localhost:3000/artists?name_like=${searchArtist}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    const artistImg = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");

    result.forEach((element) => {
        artistImg.src = element.urlImg;
        artistName.innerText = element.name;
    });
}

document.addEventListener("input", () => {
    const searchArtist = searchInput.value;
    if (searchArtist != "") {
        playlistCards.style.display = "none";
        searchResults.style.display = "block";
    } else {
        playlistCards.style.display = "block";
        searchResults.style.display = "none";
    }
    requestApi(searchArtist);
});
