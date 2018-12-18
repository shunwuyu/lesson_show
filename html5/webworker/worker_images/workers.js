self.addEventListener('message', (event) => {
  // console.log(event.data);
  const data = event.data;
  // console.log(event.data.pics);
  for (let item of event.data.pics) {
    // console.log(item);
    let req = new XMLHttpRequest();
    req.open('GET', item.src, true);
    req.responseType = "blob";
    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        self.postMessage({
          id: item.id,
          result: req.response
        });
      }
    }
    req.send();
  }
})