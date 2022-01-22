window.addEventListener("load", function () {
  function initEventHandler() {
    const button1 = document.querySelector("#button");
    button1.addEventListener("click", function () {
      const textbox = document.querySelector("#text");
      const textvalue = textbox.value;
      const text_url = encodeURIComponent(textvalue);
      fetch(`/resive/${text_url}`)
        .then((response) => response.text())
        .then((text_resive) => {
          document.querySelector("#add").innerHTML = text_resive;
        });
    });
  }

  initEventHandler();
});
