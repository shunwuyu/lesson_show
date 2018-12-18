(function() {
  const takePicture = document.querySelector('#take-picture'),
    showPicture = document.querySelector('#show-picture');
  
  if (takePicture && showPicture) {
    takePicture.onchange = function(event) {
      // console.log(event);
      var files = event.target.files,
        file;
      if (files && files.length > 0) {
        file = files[0];
        try {
          const URL = window.URL || window.webkitURL;
          const imgURL = URL.createObjectURL(file);
          showPicture.src = imgURL;
          showPicture.onload = function() {
            URL.revokeObjectURL(imgURL);
          }
        } catch(e) {
          try {
            var fileReader = new FileReader();
            fileReader.onload = function(event) {
              showPicture.src = event.taget.result;
            }
            fileReader.readAsDataURL(file);
          } catch(e) {
            var error = document.querySelector("#error");
            if (error) {
              error.innerHTML = "Neither createObjectURL or FileReader are supported";
            }
          }
        }
      }
    }
  }
  
  
})()