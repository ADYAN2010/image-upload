let selectedImage = "";
let selectedVideo = "";

/* Image upload */
document.getElementById("imageInput").addEventListener("change", function(e){
  let reader = new FileReader();
  reader.onload = function(){
    selectedImage = reader.result;
    let img = document.getElementById("storedImage");
    img.src = selectedImage;
    img.style.display = "block";
  }
  reader.readAsDataURL(e.target.files[0]);
});

/* Video upload */
document.getElementById("videoInput").addEventListener("change", function(e){
  let reader = new FileReader();
  reader.onload = function(){
    selectedVideo = reader.result;
    let vid = document.getElementById("storedVideo");
    vid.src = selectedVideo;
    vid.style.display = "block";
  }
  reader.readAsDataURL(e.target.files[0]);
});

/* Save to browser */
document.getElementById("saveBtn").addEventListener("click", function(){
  if (selectedImage) localStorage.setItem("savedImage", selectedImage);
  if (selectedVideo) localStorage.setItem("savedVideo", selectedVideo);
  alert("Saved in browser storage");
});

/* Load saved files */
function loadSaved(){
  let img = localStorage.getItem("savedImage");
  let vid = localStorage.getItem("savedVideo");

  if (img) {
    document.getElementById("storedImage").src = img;
    document.getElementById("storedImage").style.display = "block";
  }

  if (vid) {
    document.getElementById("storedVideo").src = vid;
    document.getElementById("storedVideo").style.display = "block";
  }
}

loadSaved();
