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

class ListItemBottom extends Component {
  render() {
    const renderItem = ({ item, index }) =>
      <View>
        <Text>{item.title}</Text>
        <FlatListViewNormal
          style={styles.listItemBottom_}
          data={item.photos}
          renderItem={renderItemChild}
          horizontal={true}
        />
      </View>

    const renderItemChild = ({ item, index }) =>
      <Image
        style={styles.img_}
        source={{uri: item.src}}
      />

    return (
      <View style={styles.listItemBottom}>
        <FlatListViewNormal
          data={this.props.data}
          renderItem={renderItem}
          horizontal={false}
        />
      </View>
    )
  }
}

export default ListItemBottom;