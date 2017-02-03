$(document).foundation();

function initMap() {
    var uluru = {
        lat: 50.800926,
        lng: 21.424868
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        styles: [
            {
                "stylers": [
                    {
                        "saturation": -17
                    }, {
                        "gamma": 0.36
                    }
                ]
            }, {
                "featureType": "administrative",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }, {
                "featureType": "road.highway",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }, {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }, {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3f518c"
                    }
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#84afa3"
                    }, {
                        "lightness": 52
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({position: uluru, map: map});
}

$(function() {

    if (window.location.pathname == '/') {
        $(document).scroll(function() {
            if ($(this).scrollTop() >= $('.offer-cards__section').offset().top - $(".navigation").height()) {
                $(".navigation").addClass('color--alt');
            } else {
                $(".navigation").removeClass('color--alt');
            }
        });

        $('.show-offer').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('.offer-cards__section').offset().top
            }, 1000);
        });

    } else if (window.location.pathname == '/kontakt.html') {}

});
