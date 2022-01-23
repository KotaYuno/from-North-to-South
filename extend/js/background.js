URL = "https://eqitter.herokuapp.com/resive";

const fetchData = (textvalue) => {

    // const [data, setData] = useState([])
    const data = []

    // const textvalue = "渡す";

    const param = {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ text: textvalue }),
      };
    

    fetch(URL, param)
        .then((response) => response.json())
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                // console.log(res.data[i].mean)
                data.push(res.data[i].mean)
            }
            // console.log(data[0])
            return data[0]
        })

};


chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create ({
        "id": "sample",
        "title": "Get Text!",
        "contexts": ["selection"],
    });

    chrome.windows.create({
        url: '../popup.html', 
        type: 'popup',
        width: 400, 
        height: 300
    });
 });

 chrome.contextMenus.onClicked.addListener(function(info){
    // chrome.tabs.create({
    //     // url: 'http://twitter.com/search?q=%27+encodeURIComponent(info.selectionText)
    //     url: 'https://eqitter.herokuapp.com/'
    // });

    // const send = {text:"あああああ"};
    // console.log(info);
    const textvalue = info.selectionText;

    // const data = fetchData(text);
    // console.log(data)

    const data = []

    // const textvalue = "渡す";

    const param = {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ text: textvalue }),
      };
    

    fetch(URL, param)
        .then((response) => response.json())
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                // console.log(res.data[i].mean)
                data.push(res.data[i].mean)
            }
            // console.log(data[0])
            const msg = data[0]


            chrome.runtime.sendMessage(msg, function(response) {
                // console.log(response);//メッセージの受け手がレスを返したときキャッチできる
                console.log(msg)
            });
            
        })

    
})

