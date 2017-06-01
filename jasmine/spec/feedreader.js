/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         describe('allFeeds', function(){
            allFeeds.forEach(function(allFeeds){ // loops through allFeed array in app.js file
                it('URL is defined', function(){
                    expect(allFeeds.url).toBeDefined(); // all urls inside allFeed array should be defined
                    expect(allFeeds.url).not.toBe(0); // all urls inside allFeed array should have an url
                });
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         describe('allFeeds', function(){
            allFeeds.forEach(function(allFeeds){ // loops through allFeeds array in app.js file
                it('name is defined', function(){
                    expect(allFeeds.name).toBeDefined(); // all names inside allFeed array should be defined
                    expect(allFeeds.name).not.toBe(0); // all urls inside allFeed array should have a name string
                })
            })
         })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function(){

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true); // looks for body tag, then looks that there is menu-hidden class inside <body>
         });
    
        /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
          it('menu changes visibility when menu icon is clicked', function(){
            $('.menu-icon-list').trigger('click'); // event trigger on menu-icon-list class
            expect($('body').hasClass('menu-hidden')).toBe(true); // first click shows menu
            expect($('body').hasClass('menu-hidden')).toBe(true); // second click hides menu
          });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /*TODO: Write a test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * Remember, loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */
        beforeEach(function(done){ // asynchronously go through each feed when loaded - pass done parameter so the function knows when to stop
            setTimeout(function(){ // setting timeout for async loading
                loadFeed(0, done); // initiate loadFeed function on 0 and pass callback done to stop it
            }, 2000); // 2 seconds for loading loadFeed function
        }, 2000); // 2 seconds for loading beforeEach function

        it('has entries', function(done){ // passing done as parameter so function knows when to stop
            expect($('.feed').children().length).toBeGreaterThan(0); // looks for feed class, then any children to be greater than 0 OR has at least an entry
            done(); // call done() to stop function
        });
    });

    // /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){

        /* TODO: Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
        var feedChange; // create global variable to be used inside beforeEach function, on loadFeed to change it to 1

        beforeEach(function(done){ // asynchronously go through each feed when loaded - pass done parameter so the function knows when to stop
            loadFeed(1, function(){ // pass 1 as parameter for when feed loads
                
                // reference: https://discussions.udacity.com/t/p6-new-feed-selection-test-question-problem/15562/11
                // What this code is saying is basically:
                    // the "before" block needs to run before the "it-expect-specification" block
                    // we need to load feed 1
                    // when loadFeed(1) completes, then execute a block which queries $('.feed').html()
                    // then we can synchronously invoke done() and proceed to the "it-expect-specification" block
                // Executing done at just the right time is the key.
                /*I've explained how done works in beforeEach, and if you can understand that,
                 *then you can quickly understand how it works inside an "it-expect-specification" block.
                 *In an "it-expect-specification" block, it means that the specification is not checked until done() fires.
                 *So that's why I've placed it where I have in the "it-expect-specification" block.
                */
                
                feedChange = $('.feed').html(); // feedChange to look for feed class inside HTML file
                // console.log(feedChange = $('.feed').html());
                done(); // call done() to stop function after feedChange finishes loading
            });
        });

        it('content changes', function(done){ // passing done as parameter so function knows when to stop
            
            loadFeed(2, function(){ // pass 2 as parameter for when feed loads - it loads different than on line 112
                expect($('.feed').html()).not.toEqual(feedChange); // expects feed to be different than during beforeEach function
                // console.log($('.feed').html());
                done(); // call done() to stop function after feedChange finishes loading
            });
        });
    });
}());
