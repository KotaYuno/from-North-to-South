// import fetchData from './fetchData';

import fetchData from "./fetchData";


// document.onselectionchange = function() { 
//     const selText = document.getSelection();
//     document.getElementById("out").textContent = selText;
// }


const get = () => { 
    const selText = document.getSelection();
    const click = () => {fetch(selText)};
    selText.onclick = click;
};
