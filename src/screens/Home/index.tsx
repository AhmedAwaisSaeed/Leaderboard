import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import SearchInput from './SearchInput';
import {Button} from '../../components';
import {Layout} from '../../theme';
import {IS_ANDROID} from '../../utils';
import UserTable from './UserTable';
const Home = (): JSX.Element => {
  const [searchedUser, setSearchedUser] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidContainer}
        behavior={IS_ANDROID ? undefined : 'padding'}>
        <View style={styles.rowContainer}>
          <SearchInput
            searchedUser={searchedUser}
            setSearchedUser={setSearchedUser}
          />
          <Button text={'Search'} />
        </View>
        <UserTable />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  keyboardAvoidContainer: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
  rowContainer: {
    flex: 1,
    // height: Layout.SV_105,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: Layout.SV_10,
  },
});
