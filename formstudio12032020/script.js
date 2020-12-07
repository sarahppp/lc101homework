window.addEventListener('load', function(){


    let actionUrlMap = {
    'google': "https://www.google.com/search", 
    'duckDuckGo': "https://duckduckgo.com/", 
    'bing': 'https://www.bing.com/search', 
    'ask': 'https://www.ask.com/web',

    } 

    let form = document.querySelector("#searchForm"); 

    function setSearchEngine(){
        let actionUrl =""; 
        let selectedRadioE1 = document.querySelector('input[name=engine]:checked'); 
        actionUrl = actionUrlMap[selectedRadioE1.value]; 
        form.setAttribute("action", actionUrl);
    }

    form.addEventListener("submit", setSearchEngine) 


});