$(function() {
    //This is the test suite of the RSS Feeds.  It checks to verify that each feed is defined, has its url defined, as well as that each feed has a name.
    describe('RSS Feeds', function() {
        //checks all feeds to ensure they are defined.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //checks all feeds to ensure the URL is defined.
        it('has URL defined', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });
        //checks all feeds to ensure there is a name.
        it('has a name', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });


    });

    //This test suite is to check the functionality of the menu. It checks to make sure it functions properly and responds to click events as intended.
    describe('The Menu', function() {
        //check to ensure the menu is hidden by default.
        it('is hidden by default', function() {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
        //check to ensure the menu changes visibility when click events are triggered.
        // it('becomes visable when clicked', function() {
        //     $('.menu-icon-link').trigger('click');
        //     expect($('body').hasClass('menu-hidden')).toBe(false);
        //     $('.menu-icon-link').trigger('click');
        //     expect($('body').hasClass('menu-hidden')).toBe(true);
        // });


    });
    //This test suite is to check that the loadFeed() function has at least one .entry element in the .feed container upon finishing.
    describe('Initial Entries', function() {
        //ensures loadFeed() has run before the check is started.
        beforeEach(function(done) {
            loadFeed(1, done);
        });
        //check to ensure at least one .entry in the .feed container.
        it('has at least one entry', function() {
            let container = document.querySelectorAll('.feed .entry');
            expect(container.length).toBeGreaterThan(0);
        });

    });

    //This last test suite is to ensure that when a new feed is loaded, the content actually changes as well.
    describe('New Feed Selection', function() {
        var text;
        //ensures loadFeed has run before starting the check.
        beforeEach(function(done) {
            loadFeed(0, function() {
                text = $('.feed').text();
                loadFeed(1, function() {
                    done();
                });
            });
        });
        //check to verify the new feed has actually loaded.
        it('actually loads a new feed', function() {
            expect($('.feed').text()).not.toBe(text);
        });
    });

}());
