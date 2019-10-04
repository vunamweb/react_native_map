import network from '../network/network';
//import console = require('console');

//var network = require('../../app/network/network');

class Functions {
    loadNear() {
        var url = global.nearUrl;
        const apiKey = global.apiKey;
        const typeMap = 'restaurant';

        var callback = function (responseData) {
            var markers = [];

            try {
                const results = responseData.results;

                for (i = 0; i < results.length; i++) {
                    try {
                        markers[i] = {};
                        markers[i].title = results[i].name;
                        markers[i].coordinates = {};
                        markers[i].coordinates.latitude = results[i].geometry.location.lat;
                        markers[i].coordinates.longitude = results[i].geometry.location.lng;
                    } catch (error) {
                        console.log(error);
                        markers[i] = {};
                        markers[i].title = '';
                        markers[i].coordinates = {};
                        markers[i].coordinates.latitude = 0;
                        markers[i].coordinates.longitude = 0;
                    }
                }

                global.root.setState({ markers });
            } catch (error) {
                console.log(error);
            }
        }

        url = url + "?location=" + global.latitude + "," + global.longitude + "&radius=500&types=" + typeMap + "&key=" + apiKey;

        network.fetchjsonResponse(url, callback);
    }
}

const functions = new Functions();
export default functions;
