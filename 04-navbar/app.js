// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // console.log(links.classList);  //Burada links de hangi class var ona baktım
    //console.log(links.classList.contains("random")); //links de randam adnında bir class var mı? false
    //console.log(links.classList.contains("links")); //links de links adında bir class var mı? true

    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // }else{
    //     links.classList.add("show-links");
    // }

    links.classList.toggle("show-links"); //yukarıda ki işlemi tek başına yapıyor
});
