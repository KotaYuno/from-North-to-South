window.addEventListener('load', function(){
    function initEventHandler(){
        const button1 = document.querySelector("#button");
        button1.addEventListener('click', function(){
            const textbox = document.querySelector("#text");
            const textvalue = textbox.value;
            const param  = {
                method: "POST",
                headers: {
                "Content-Type": "application/json; charset=utf-8"
                },
            body: JSON.stringify({text: textvalue})
            }
            fetch("/resive", param)
                .then(response => response.text())
                .then(text_resive => {
                    document.querySelector("#add").innerHTML = text_resive;
                })
        })
    }

    initEventHandler();
})