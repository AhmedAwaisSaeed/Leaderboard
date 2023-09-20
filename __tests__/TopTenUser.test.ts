import {findUser, convertObjectToSortedArray, TopTenUsers} from '../src/utils';
import users from '../src/constants/usersData.json';

it('should return the Emma user Object', () => {
  const foundUser = findUser(users, 'emma');
  expect(typeof foundUser).toBe('object');
  expect(foundUser).toEqual({
    bananas: 6550,
    lastDayPlayed: '2018-09-18',
    longestStreak: 6,
    name: 'Emma',
    stars: 24,
    subscribed: false,
    uid: 'zDHhDho9h5fTDntQhyEg66RMvqK2',
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

it('the index of emma should be 8', () => {
  const rankedUsers = convertObjectToSortedArray(users);
  const TopTen = TopTenUsers(rankedUsers);
  expect(TopTen[8].name).toBe('Emma');
});
