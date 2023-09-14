import {StyleSheet, View, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import SearchInput from './SearchInput';
import {Button} from '../../components';
import {Layout} from '../../theme';
import {IS_ANDROID} from '../../utils';
const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={IS_ANDROID ? undefined : 'padding'}>
        <View style={styles.rowContainer}>
          <SearchInput />
          <Button text={'Search'} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Layout.SV_10,
  },
});
