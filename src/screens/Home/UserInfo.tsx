import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {userType} from '../../types';
import {Layout, Colors, Fonts} from '../../theme';
const UserInfo = ({user}: {user: userType}) => {
  const {name, lastDayPlayed, bananas, stars} = user;
  console.log('current user==', user);
  return (
    <View style={styles.row}>
      <View style={styles.columContainer}>
        <Text style={styles.columnTextStyle}>{name}</Text>
      </View>

      <View style={styles.columContainer}>
        <Text style={styles.columnTextStyle}>{lastDayPlayed}</Text>
      </View>

      <View style={styles.columContainer}>
        <Text style={styles.columnTextStyle}>{bananas}</Text>
      </View>

      <View style={styles.columContainer}>
        <Text style={styles.columnTextStyle}>{stars}</Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  row: {
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
  columnTextStyle: {
    fontFamily: Fonts.medium,
    fontSize: Layout.FSV_10,
    marginLeft: Layout.SV_5,
    color: Colors.Primary.BLACK,
  },
});
