import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  AppRegistry
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapComponent from '../../app/components/library/Map';
import IconBottom from '../../app/components/IconBottom';

import Gps from '../../app/utility/Gps';
import Map from '../../app/utility/Map';

import styles from '../../app/style/style';

var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

navigator.geolocation = require('@react-native-community/geolocation');

export default class Home extends React.Component {
    state = {
        markers: [
          {
            title: '',
            coordinates: {
              latitude: 0,
              longitude: 0
            }
          }
        ]
      };

      static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

      componentDidMount() {
        Gps.findCoordinates(this.success, this.error);
      }

      success = (position) => {
        global.latitude = position.coords.latitude;
        global.longitude = position.coords.longitude;
    
        this.setState({
          markers: [
            {
              title: '',
              coordinates: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }
            }
          ]
        });
    
        var newRegion = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        new Map(this.mapView).animateToRegion(newRegion, 1000);
      }

      error = (error) => {
        Alert.alert(error.message);
      }
    render() {
      const initialRegion = {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      };
  
      return (
        <View style={styles.container}>
          <MapComponent
            style={styles.map}
            initialRegion={initialRegion}
            coordinate={this.state.markers}
            component={this}
          />
          <IconBottom 
            style={styles.iconBottom}
            component={this}
          />
        </View >
      );
    }
  }