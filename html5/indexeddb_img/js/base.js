(function() {
  const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
    dbVersion = 1.0;
  let request = indexedDB.open("elephantFiles", dbVersion),
    db,
    createObjectStore = function (dataBase) {
      console.log("Creating Object Store");
      dataBase.createObjectStore("elephants");
    },
    getImageFile = function() {
      // console.log('ddd');
      var xhr = new XMLHttpRequest(),
        blob;
      // console.log(xhr);
      xhr.open('GET', 'elephant.png', true);
      xhr.responseType = 'blob';
      xhr.addEventListener('load', function() {
        console.log('-----')
        if (xhr.status === 200) {
          console.log('Image retrieved');
          blob = xhr.response;
          console.log('Blob: ' + blob);
          putElephantInDb(blob);
        }
      }, false);
      xhr.send();
    },
    putElephantInDb = function (blob) {
      console.log('Putting elephants in IndexedDB');
      const readWriteMode = typeof IDBTransaction.READ_WRITE == "undefined" ? "readwrite" : IDBTransaction.READ_WRITE;
      const transaction = db.transaction(["elephants"], readWriteMode);
      const put = transaction.objectStore("elephants").put(blob, "image");
      transaction.objectStore("elephants").get("image").onsuccess = function(event) {
        const imgFile = event.target.result;
        console.log("Got elephant!" + imgFile);
        const URL = window.URL || window.webkitURL;
        const imgURL = URL.createObjectURL(imgFile);
        var imgElephant = document.getElementById("elephant");
        imgElephant.setAttribute("src", imgURL);
        imgElephant.onload = function() {
          window.URL.revokeObjectURL(this.src);
        }
      }
    }

    request.onerror = function(event) {
      console.log("Error creating/accessing IndexedDB database");
    }
    request.onsuccess = function(event) {
      console.log("Success creating/accessing IndexedDB database");
      db = request.result;
      db.onerror = function(event) {
        console.log("Error creating/accessing IndexedDB database");
      }
      // console.log(db.setVersion)
      getImageFile();
    }
    request.onupgradeneeded = function(event) {
      createObjectStore(event.target.result);
    }
})();