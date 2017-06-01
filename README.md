# Project Overview

Implemented a series of behavior driven development tests using [Jasmine](http://jasmine.github.io/) for a pre-existing web-based application that reads RSS feeds as part of the Udacity Front-End Nanodegree - tested logic of the application, event handling and DOM manipulation.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## Project's General Goals

* Write effective tests using Jasmine Behavior Driven Development testing framework for JavaScript.
* Analyze multiple aspects of the application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.

## Project's Specific Goals

* RSS Feeds name and url are defined
* RSS Feeds are loaded properly and there is at least one entry
* RSS Feed selection changes and updates content and links
* Menu is hidden by default and changes on click

## How to get started
1. Download file as zip file
2. Unzip file on your computer
3. Open index.html on your browser
4. View all tests and results at the bottom of the page (specs and failures)

# Steps taken to complete project:

1. Took and completed JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
4. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
5. Wrote loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
6. Wrote loops through through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
7. Wrote test that ensures the menu element is hidden by default.
8. Wrote test that ensures the menu changes visibility when the menu icon is clicked.
9. Wrote test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
10. Wrote test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
11. No test should be dependent on the results of another.
12. Callbacks are ensured that feeds are loaded before they are tested.
13. Implemented error handling for undefined variables and out-of-bound array access.
14. When complete - all tests should pass. 

### Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

### Resources

* [Testing DOM Events Using jQuery and Jasmine 2.0](http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html)
* [Jasmine-Jquery](https://github.com/velesin/jasmine-jquery)

###### Richard
