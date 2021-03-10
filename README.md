# The Motley Fool Blocker - Chrome Extension

This is a simple Chrome Extension to block The Motley Fool from being visible on Yahoo Finance and Google Finance quote pages.

# Change Log

20210310: added jQuery and jQuery Initialize to replace mutation observer to overcome content refresh issues on Yahoor Finance

# What does it do?

This extension filters out The Motley Fool news articles on quote pages on Yahoo Finance and Google Finance by looking through the DOM object, identifying The Motley Fool articles and setting their style.display values to 'none'.

The extension icon will update its count whenever an article is removed.

# How to install this Chrome Extension

I have not submitted this Chrome Extension to Google since it is not finished yet.
Good instructions on how to install the extension manually can be found here: https://dev.to/ben/how-to-install-chrome-extensions-manually-from-github-1612

# To do

1. Add filter options in popup to let users choose which sources they want to filter.
