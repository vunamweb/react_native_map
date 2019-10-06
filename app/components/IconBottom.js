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
  <TouchableOpacity onPress={() => functions.loadNear()}>
    <Image
      style={styles.img}
      source={item.src}
    />
  </TouchableOpacity>
  
    return (
      <View>
        <FlatListViewNormal
          style={styles.center}
          data={data}
          renderItem={renderItem}
          horizontal={true}
        />
      </View>
    )
  }
}

export default IconBottom;