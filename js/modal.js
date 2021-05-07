// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// // var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var modal = $('#myModal'); 
var modalImg = $('#img01'); 
var modal = document.getElementById("myModal"); 
// var modalImg = document.getElementById("img01"); 

$('img').each(function() {
  $(this).click(function(src) {
    modal.style.display = "flex"; 
    modalImg[0].src = this.src; 
  })
});

// When the user clicks on <span> (x), close the modal

function closeModal() {
  document.getElementById("myModal").style.display = "none"; 
}