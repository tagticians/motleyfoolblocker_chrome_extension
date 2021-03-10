if (document.location.hostname == "finance.yahoo.com") {
        // For Yahoo Finance
        var mfArticlesRemoved = 0;

        // Remove Main Article Blocks
        $.initialize("#quoteNewsStream-0-Stream > ul > li.js-stream-content", function() {
            if ($(this).text().startsWith('Motley Fool')) {
                $(this).hide();
                mfArticlesRemoved++
                chrome.runtime.sendMessage({icontextupdate: true, number: mfArticlesRemoved});
            }
        });
        
        // Remove Small Article Blocks
        $.initialize("a.js-content-viewer", function() {
            if ($(this).text().endsWith('Motley Fool')) {
                $(this).hide();
                mfArticlesRemoved++
                chrome.runtime.sendMessage({icontextupdate: true, number: mfArticlesRemoved});
            }
        });

        // Reset Badge Text On Page Load
        chrome.runtime.sendMessage({icontextupdate: true, number: "0"});

} else if (document.location.hostname == "www.google.com") {
    // For Google Finance
    var mfArticlesRemoved = 0;
    
    // Find All Article Blocks
    var allArticles = document.querySelectorAll('div.yY3Lee');

    // Check If Article Contains Motley Fool, Then Remove
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

