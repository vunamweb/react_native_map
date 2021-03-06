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
  AppRegistry,
  TouchableOpacity
} from 'react-native';

import styles from '../../app/style/style';
import functions from '../../app/function/function';
import FlatListViewNormal from '../../app/components/library/FlatListViewNormal';
import Navigation from '../../app/utility/Navigation';

const data = [
  {
    src: require('../../app/access/img/coffee.png')
  },
  {
    src: require('../../app/access/img/karaoke.png')
  },
  {
    src: require('../../app/access/img/park.png')
  },
  {
    src: require('../../app/access/img/atm.png')
  }
];

class IconBottom extends Component {
  render() {
    const renderItem = ({ item, index }) =>
      <TouchableOpacity onPress={() => new Navigation(this.props.component.props.navigation).gotoScreen('ShowNear')}>
        <Image
          style={styles.img}
          source={item.src}
        />
      </TouchableOpacity>

    return (
      <View style={this.props.style}>
        <FlatListViewNormal
          data={data}
          renderItem={renderItem}
          horizontal={true}
        />
      </View>
    )
  }
}

export default IconBottom;