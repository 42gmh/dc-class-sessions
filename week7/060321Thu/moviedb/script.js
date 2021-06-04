
const noResults = getElem("no-results");
const myResults = getElem("my-results");
const movieTitle = getElem("movie-title");

getElem("btn-submit").addEventListener('click', () => {
    // console.log(movieTitle.value);
    fetchMovieInfo(movieTitle.value);
});

function fetchMovieInfo(movieTitle) {

    const encodedMovieTitle = encodeURIComponent(movieTitle);
    // console.log(encodedMovieTitle);

    console.log("Plese provide the API KEY and comment me out...");
    throw("API KEY please!!!");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=[API KEY]&query=${encodedMovieTitle}`;
    console.log(url);
    fetch(url).then((response) => 
    {
        response.json().then((data) => {
            // console.log(data);
            if(!data.results.length)
            {
                showElem(noResults);
                hideElem(myResults)
            }
            else
            {
                clearResults();
                displayResults(data.results);
                hideElem(noResults)
                showElem(myResults);
            }
        });
    });
}

function displayResults(results)
{
    for(let i = 0; i < results.length; i++)
    {
        const aResult = results[i];

        if(aResult.original_language=="en")
        {
            let movieItem = document.createElement("li");
            // console.log(aResult.original_title);
            // console.log(aResult.release_date);

            movieItem.textContent = aResult.original_title;

            let releaseDateLi = document.createElement("li");
            releaseDateLi.textContent = "Release Date:" + aResult.release_date;

            let overviewLi = document.createElement("li");
            overviewLi.textContent = aResult.overview;

            let subList = document.createElement("ul");
            subList.appendChild(releaseDateLi);
            subList.appendChild(overviewLi);
            movieItem.appendChild(subList);

            myResults.appendChild(movieItem);
        }
    }

}

function clearResults()
{
    while (myResults.firstChild) {
        myResults.removeChild(myResults.lastChild);
    }
}

function showElem(element)
{
    element.style.display = 'block';
}

function hideElem(element)
{
    element.style.display = 'none';
}

function getElem(elementId)
{
    return document.getElementById(elementId);
}

// fetchMovieInfo("tron");