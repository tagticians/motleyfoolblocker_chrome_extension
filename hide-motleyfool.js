// Yahoo Main Content Observer
if (document.location.hostname == "finance.yahoo.com") {
    const targetNode = document.getElementById('Main');
    const config = { childList: true, subtree: true };
    
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                
            }            
                
            if (mutation.type === 'childList' &&
                typeof mutation.addedNodes[0].id !== 'undefined') {
                    if (mutation.addedNodes[0].id === "quoteNewsStream-0-Stream") {
                        console.log(mutation);
                        console.log('can connect');
                    }
            }
        }
    };
    
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    
    // News Stream Observer
    startObserver();
    
    // Generic Function to Start Observer and reset badge text
    function startObserver() {
        const newsTargetNode = document.getElementById('quoteNewsStream-0-Stream').querySelector('ul');
        const newsConfig = { attributes: false, subtree: false, childList: true };
        var mfArticlesRemoved = 0;
    
        const newsCallback = function(mutationsList, newsObserver) {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    if (mutation.addedNodes[0].textContent.startsWith('Motley Fool')) {
                        mutation.addedNodes[0].style.display="none";
                        mfArticlesRemoved++
                        chrome.runtime.sendMessage({icontextupdate: true, number: mfArticlesRemoved});
                    }
                }
            }
        };
    
        const newsObserver = new MutationObserver(newsCallback);
    
        // Stop any running observer
        newsObserver.disconnect();
        console.log('stopping observer');
    
        // Build new observer
        newsObserver.observe(newsTargetNode, newsConfig);
        console.log(newsTargetNode);
        console.log('starting observer');
    
        // Reset Badge Text
        chrome.runtime.sendMessage({icontextupdate: true, number: "0"});
    }
} else if (document.location.hostname == "www.google.com") {
    // For Google Finance
    var mfArticlesRemoved = 0;
    var allArticles = document.querySelectorAll('div.yY3Lee')
    if (allArticles.length > 0) {
        for (article of allArticles) {
            if (article.querySelector('div.sfyJob').textContent == 'The Motley Fool') {
                article.style.display='none';
                mfArticlesRemoved++
                chrome.runtime.sendMessage({icontextupdate: true, number: mfArticlesRemoved});
            }
        }
    }
}

