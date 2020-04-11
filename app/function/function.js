import network from '../network/network';

class Functions {
    loadNear_ = async (callbackLoadNear) => {
        var url = global.nearUrl, responseData, responseData_;
        const apiKey = global.apiKey;
        const typeMap = 'restaurant';

        url = url + "?location=" + global.latitude + "," + global.longitude + "&radius=500&types=" + typeMap + "&key=" + apiKey;

        try {
            responseData = await network.fetchjsonResponseNotCallback(url);
            const results = responseData.results;

            var markers = [];

            for (position = 0; position < results.length; position++) {
                url = global.placeIdUrl + "?placeid=" + results[position].place_id + "&key=" + apiKey;
                responseData_ = await network.fetchjsonResponseNotCallback(url);

                if (responseData_.status == 'OVER_QUERY_LIMIT') {
                    markers[position] = {};
                    markers[position].title = results[position].name;
                    markers[position].coordinates = {};
                    markers[position].coordinates.latitude = results[position].geometry.location.lat;
                    markers[position].coordinates.longitude = results[position].geometry.location.lng;

                    markers[position].photos = [];
                    markers[position].photos[0] = {};
                    markers[position].photos[1] = {};
                    markers[position].photos[2] = {};
                    markers[position].photos[3] = {};
                    markers[position].photos[4] = {};

                    markers[position].photos[0].src = 'https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg';
                    markers[position].photos[1].src = 'https://image.shutterstock.com/image-photo/last-straw-260nw-299406014.jpg';
                    markers[position].photos[2].src = 'https://image.shutterstock.com/image-photo/food-concept-chef-white-uniform-260nw-617005082.jpg';
                    markers[position].photos[3].src = 'https://image.shutterstock.com/image-photo/table-set-restaurant-260nw-282446912.jpg';
                    markers[position].photos[4].src = 'https://cdn.pixabay.com/photo/2016/10/22/20/34/wine-1761613__340.jpg';
                }
                else {
                    markers[position] = {};

                    markers[position].title = responseData_.result.name;

                    markers[position].coordinates = {};
                    markers[position].coordinates.latitude = responseData_.result.geometry.location.lat;
                    markers[position].coordinates.longitude = responseData_.result.geometry.location.lng;

                    markers[position].photos = [];
                    markers[position].photos[0] = {};
                    markers[position].photos[1] = {};
                    markers[position].photos[2] = {};
                    markers[position].photos[3] = {};
                    markers[position].photos[4] = {};

                    markers[position].photos[0].src = 'https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg';
                    markers[position].photos[1].src = 'https://image.shutterstock.com/image-photo/last-straw-260nw-299406014.jpg';
                    markers[position].photos[2].src = 'https://image.shutterstock.com/image-photo/food-concept-chef-white-uniform-260nw-617005082.jpg';
                    markers[position].photos[3].src = 'https://image.shutterstock.com/image-photo/table-set-restaurant-260nw-282446912.jpg';
                    markers[position].photos[4].src = 'https://cdn.pixabay.com/photo/2016/10/22/20/34/wine-1761613__340.jpg';
                }
            }

            callbackLoadNear(markers);
        } catch (error) {
            console.log(error);
        }
    }

    loadNear(callbackLoadNear) {
        var url = global.nearUrl, url_;
        var count = 0;
        const apiKey = global.apiKey;
        const typeMap = 'restaurant';

        var callback = function (responseData) {
            var markers = [];

            try {
                const results = responseData.results;

                for (i = 0; i < results.length; i++) {
                    url_ = global.placeIdUrl + "?placeid=" + results[i].place_id + "&key=" + apiKey;

                    var callback_ = function (responseData, position) {
                        if (responseData.status == 'OVER_QUERY_LIMIT') {
                            markers[position] = {};
                            markers[position].title = results[position].name;
                            markers[position].coordinates = {};
                            markers[position].coordinates.latitude = results[position].geometry.location.lat;
                            markers[position].coordinates.longitude = results[position].geometry.location.lng;

                            markers[position].photos = [];
                            markers[position].photos[0] = {};
                            markers[position].photos[1] = {};
                            markers[position].photos[2] = {};
                            markers[position].photos[3] = {};
                            markers[position].photos[4] = {};

                            markers[position].photos[0].src = 'https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg';
                            markers[position].photos[1].src = 'https://image.shutterstock.com/image-photo/last-straw-260nw-299406014.jpg';
                            markers[position].photos[2].src = 'https://image.shutterstock.com/image-photo/food-concept-chef-white-uniform-260nw-617005082.jpg';
                            markers[position].photos[3].src = 'https://image.shutterstock.com/image-photo/table-set-restaurant-260nw-282446912.jpg';
                            markers[position].photos[4].src = 'https://cdn.pixabay.com/photo/2016/10/22/20/34/wine-1761613__340.jpg';
                        }
                        else {
                            markers[position] = {};

                            markers[position].title = responseData.result.name;

                            markers[position].coordinates = {};
                            markers[position].coordinates.latitude = responseData.result.geometry.location.lat;
                            markers[position].coordinates.longitude = responseData.result.geometry.location.lng;

                            markers[position].photos = [];
                            markers[position].photos[0] = {};
                            markers[position].photos[1] = {};
                            markers[position].photos[2] = {};
                            markers[position].photos[3] = {};
                            markers[position].photos[4] = {};

                            markers[position].photos[0].src = 'https://image.shutterstock.com/image-photo/group-happy-friends-having-breakfast-260nw-1201677928.jpg';
                            markers[position].photos[1].src = 'https://image.shutterstock.com/image-photo/last-straw-260nw-299406014.jpg';
                            markers[position].photos[2].src = 'https://image.shutterstock.com/image-photo/food-concept-chef-white-uniform-260nw-617005082.jpg';
                            markers[position].photos[3].src = 'https://image.shutterstock.com/image-photo/table-set-restaurant-260nw-282446912.jpg';
                            markers[position].photos[4].src = 'https://cdn.pixabay.com/photo/2016/10/22/20/34/wine-1761613__340.jpg';
                        }


                        count++;

                        if (count == results.length)
                            callbackLoadNear(markers);
                    }

                    network.fetchjsonResponsePosition(url_, callback_, i);
                }

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
