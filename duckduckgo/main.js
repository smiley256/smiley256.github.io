const search_button = document.getElementById("search-button");
const search = document.getElementById("search");

function makeSearch() {
    const search_input = search.value;
    if (search_input != "") {
        window.location.assign("https://duckduckgo.com/?q=" + encodeURIComponent(search_input));
    }
}