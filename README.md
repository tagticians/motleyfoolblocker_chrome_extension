# motleyfoolblocker_chrome_extension
This is a simple Chrome Extension to block The Motley Fool from being visible on Yahoo Finance and Google Finance quote pages.

# What does it do?
This extension filters out The Motley Fool news articles on quote pages on Yahoo Finance and Google Finance by looking through the DOM object, identifying The Motley Fool articles and setting their style.display values to 'none'.

The extension icon will update its count whenever an article is removed.

# How to install this Chrome Extension
I have not submitted this Chrome Extension to Google since it is not finished yet.
Good instructions on how to install the extension manually can be found here: https://dev.to/ben/how-to-install-chrome-extensions-manually-from-github-1612


# To do
1. Fix it so that it works on Yahoo Finance for sub-articles (small content blocks that are part of a main article block).
2. Fix it to make it work on content refresh since Yahoo Finance uses React. I have not been able to solve this with Observers.
