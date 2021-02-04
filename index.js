// Carousel
var myCarousel = document.querySelector('#carousel')
var carousel = new bootstrap.Carousel(myCarousel)
//Burger Icon
var burgerIcon = document.getElementById("button");
var nav = document.getElementById("navbarSupportedContent");
burgerIcon.addEventListener("click", ()=>{
    nav.classList.toggle("d-sm-block")
})

// Pagination
var pagination = document.getElementById("pagination");
var pageLink = pagination.getElementsByClassName("page-item");

for (var i = 0; i < pageLink.length; i++) {
    pageLink[i].addEventListener("click", () => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}