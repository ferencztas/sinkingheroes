let photoElem = document.querySelectorAll("#photoElem");
let photoDiv = document.querySelector("#photoDiv");
let bigPhotoContainer = document.querySelector("#bigPhotoContainer");
// for (let elem in photoElem) {
//     console.log(photoElem[elem]);
// }

// function openImage(el) {
//     let bigPhoto = document.createElement("img");
//     bigPhoto.setAttribute("src", el.src);
//     bigPhotoContainer.appendChild(bigPhoto);
//     bigPhotoContainer.style.display = "block";
//     photoDiv.style.opacity = 0.5;
//     photoDiv.style.zIndex = -1;
//     bigPhotoContainer.style.zIndex = 999;
// }

// let myGallery = new FgGallery('.fg-gallery', {
//     cols: 3,
//     style: {
//       border: '4px solid black',
//       height: '320px',
//       boxShadow: '0 2px 10px -5px #000'
//     }
// })


HesGallery.setOptions({
    wrapAround: true,
    disableScrolling: true
})

HesGallery.init({
    wrapAround: true,
    disableScrolling: true
})