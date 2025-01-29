let index = 0;

function showMovie() {
    const frame = document.querySelector(".movie_list");
    const totalFrame = document.querySelectorAll(".movie_list .movie_container").length;
    if (index >= totalFrame) index = 0;
    if (index < 0) index = totalFrame - 1;
    frame.style.transform = `translateX(${-index * 55}%)`;
}

function newMovie() {
    index++;
    showMovie();
}

function prevMovie() {
    index--;
    showMovie();
}