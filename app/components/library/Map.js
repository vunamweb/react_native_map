import React, { Fragment, Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default class Map extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <MapView
                style={this.props.style}
                ref={ref => { this.props.component.mapView = ref }}
                initialRegion={this.props.initialRegion}
            >
                {this.props.coordinate.map(marker => (
                    <MapView.Marker
                        coordinate={marker.coordinates}
                        title={marker.title}
                    />
                ))}
            </MapView>
        )
    };
}