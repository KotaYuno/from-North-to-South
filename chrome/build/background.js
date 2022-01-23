chrome.contextMenus.create({
    "title": "文字を選択して辞書検索",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
        chrome.tabs.create({
            // url: 'http://twitter.com/search?q='+encodeURIComponent(info.selectionText)
            url: 'https://eqitter.herokuapp.com/'
        });
    }
});