chrome.runtime.onMessage.addListener(function(msg) {
    document.getElementById("out").textContent = msg;
    console.log(msg);
  });