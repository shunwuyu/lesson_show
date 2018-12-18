(function() {
  var canvas = document.getElementById("my-canvas"),
    context = canvas.getContext("2d"),
    img = document.createElement("img"),
    mouseDown = false,
    brushColor = "rgb(0, 0, 0)",
    hasText = true,
    clearCanvas = function() {
      if (hasText) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        hasText = false;
      }
    }
    context.fillText("Drop an image onto the canvas", 240, 200);
    context.fillText("Click a spot to set as brush color", 240, 220);
    img.addEventListener("load", function() {
      clearCanvas();
      console.log("Draw image");
      context.drawImage(img, 0, 0);
    }, false);
    canvas.addEventListener("mousedown", function(evt) {
      clearCanvas();
      mouseDown = true;
      context.beginPath();
    }, false);
    canvas.addEventListener("mouseup", function(evt) {
      mouseDown = false;
      var colors = context.getImageData(evt.layerX, evt.layerY, 1, 1).data;
      console.log(colors);
      brushColor = "rgb(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")";
    }, false);
    canvas.addEventListener("mousemove", function(evt) {
      
      if (mouseDown) {
        console.log(evt.layerX, evt.layerY);
        context.strokeStyle = brushColor;
        context.lineWidth = 20;
        context.lineJoin = "round";
        context.lineTo(evt.layerX + 1, evt.layerY + 1);
        context.stroke();
      }
    }, false);
    canvas.addEventListener("dragover", function(evt) {
      evt.preventDefault();
    }, false);
    canvas.addEventListener("drop", function(evt) {
      var files = evt.dataTransfer.files;
      if (files.length > 0) {
        var file = files[0];
        if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -1) {
          var reader = new FileReader();
          reader.onload = function(evt) {
            img.src = evt.target.result;
          }
          reader.readAsDataURL(file);
        }
      }
      event.preventDefault();
    }, false);
    var saveImage = document.createElement("button");
    saveImage.innerHTML = "Save canvas";
    saveImage.addEventListener("click", function(evt) {
      console.log(canvas.toDataURL("iamge/png"));
      document.getElementById("copy").src = canvas.toDataURL("image/png");
      // window.open(canvas.toDataURL("image/png"));
      evt.preventDefault();
    }, false)
    document.getElementById("main-content").appendChild(saveImage);
})();