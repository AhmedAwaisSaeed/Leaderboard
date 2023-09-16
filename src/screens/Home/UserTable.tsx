import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import UserInfo from './UserInfo';
import {userType} from '../../types';
import {TableHeader} from '../../components';
const UserTable = (): JSX.Element => {
  const users = useSelector((state: RootState) => state.user.users);
  const TopUsers = Object.values(users)
    .sort((a, b) => b.bananas - a.bananas)
    .slice(0, 10);
  console.log('all users data from store==', users);

  const _renderItem = ({item, index}: {item: userType; index: number}) => {
    return <UserInfo key={index} user={item} />;
  };

  return (
    <View style={styles.container}>
      <TableHeader />
      <FlatList data={TopUsers} renderItem={_renderItem} />
    </View>
  );
};

export default UserTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
