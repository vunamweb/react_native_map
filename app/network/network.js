import { Alert } from 'react-native';

class Network {
    fetchjsonResponse(url,callback) {
        return fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                 callback(responseData);
            })
            .catch((error) => {
                //console.log(error);
            });
    }
}

const network = new Network();
export default network;