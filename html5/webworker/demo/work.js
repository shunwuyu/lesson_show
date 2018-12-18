self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      self.postMessage('WORKER STARTED: ' + data.msg);
      break;
    case 'stop':
      self.postMessage('WORKER STOOPPED: ' + data.msg);
      self.close();
      break;
    default:
      self.postMessage('Unknown command: ' + data.msg);
  }
}, false);