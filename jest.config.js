const esModules = [
  '@react-native|react-native|react-native-size-matters|@react-navigation|@react-navigation/native-stack',
].join('|');

module.exports = {
  preset: 'react-native',

  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
};
