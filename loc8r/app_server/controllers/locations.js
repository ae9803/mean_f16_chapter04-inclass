/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Pizza Locations - find a place to work with wifi',
        pageHeader: {
            title: 'Pizza Locations',
            strapline: 'Find Pizza Locations Near You'
        },
        sidebar: "Looking for wifi and a seat? Pizza Locations helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Pizza Locations help you find the place you're looking for.",
        locations: [{
            name: 'Amarillo Pizza #1',
            address: '1820 S Grand St',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '300m'
        },
        
        {
            name: 'Amarillo Pizza #2',
            address: '6019 S Coulter St, Amarillo, TX 79119',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Amarillo Pizza #3',
            address: 'West, 6905 I-40 Frontage Rd, Amarillo',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '500m'
        }, {
            name: 'Amarillo Pizza #4',
            address: '5101 S Western St',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Pizza Hut Locations',
        pageHeader: {
            title: 'Amarillo Pizza #1'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Amarillo Pizza #1',
            address: '1820 S Grand St',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};