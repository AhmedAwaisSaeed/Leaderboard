import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fonts, Colors, Layout} from '../theme';
const TableHeader = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <View style={styles.columContainer}>
        <Text style={styles.headerTextStyle}>Name</Text>
      </View>
      <View style={styles.columContainer}>
        <Text style={styles.headerTextStyle}>Rank</Text>
      </View>
      <View style={styles.columContainer}>
        <Text style={styles.headerTextStyle}>Number of bananas</Text>
      </View>
      <View style={styles.columContainer}>
        <Text style={styles.headerTextStyle}>isSearchedUser?</Text>
      </View>
    </View>
  );
};

export default TableHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.Primary.REGULAR,
    marginTop: Layout.SV_10,
  },
  columContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: Layout.SV_1,
    borderWidth: 1,
    // backgroundColor: 'red',
  },
  headerTextStyle: {
    fontFamily: Fonts.medium,
    fontSize: Layout.FSV_10,
    marginLeft: Layout.SV_5,
    color: Colors.Primary.BLACK,
  },
});
