import {findUser, convertObjectToSortedArray, TopTenUsers} from '../src/utils';
import users from '../src/constants/usersData.json';

it('should return the Alvin Lai user Object', () => {
  const foundUser = findUser(users, 'Alvin Lai');
  expect(typeof foundUser).toBe('object');
  expect(foundUser).toEqual({
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: 'Alvin Lai',
    stars: 5,
    subscribed: false,
    uid: 'z159rqfnAhUsyFIoRlptymEWheP2',
  });
});

it('should return the Sorted Array according to number of bananas', () => {
  const userArray = convertObjectToSortedArray(users);

  expect(Array.isArray(userArray)).toBe(true);
  userArray.forEach(item => {
    expect(typeof item).toBe('object');
  });

  expect(userArray[0].bananas).toBe(36750);
});

it('should return the top 10 users', () => {
  const rankedUsers = convertObjectToSortedArray(users);
  const result = TopTenUsers(rankedUsers);
  expect(Array.isArray(result)).toBe(true);
  expect(result).toHaveLength(10);
});

it('Alvin Lai User should not exist in top ten users', () => {
  const rankedUsers = convertObjectToSortedArray(users);

  const userIndex = rankedUsers.findIndex(
    user => user.uid === 'z159rqfnAhUsyFIoRlptymEWheP2',
  );
  expect(userIndex).toBeGreaterThan(9);
});

it('Alvin Lai User should be added to last index of top users', () => {
  const rankedUsers = convertObjectToSortedArray(users);
  const TopTen = TopTenUsers(rankedUsers);
  const userIndex = rankedUsers.findIndex(
    user => user.uid === 'z159rqfnAhUsyFIoRlptymEWheP2',
  );
  if (userIndex >= 10) {
    TopTen.pop();
    TopTen.push({
      bananas: 0,
      lastDayPlayed: '2017-11-01',
      longestStreak: 0,
      name: 'Alvin Lai',
      stars: 5,
      subscribed: false,
      uid: 'z159rqfnAhUsyFIoRlptymEWheP2',
      userIndex: userIndex,
    });
  }
  expect(TopTen[9].name).toBe('Alvin Lai');
});
