chrome.runtime.onMessage.addListener(function(msg) {
    document.getElementById("mean").textContent = msg.mean;
    document.getElementById("example").textContent = msg.example;
    console.log(msg);
  });