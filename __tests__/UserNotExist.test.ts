import {findUser} from '../src/utils';
import users from '../src/constants/usersData.json';

it('user not Exist', () => {
  const foundUser = findUser(users, 'abbc');
  expect(foundUser).toEqual(null);
});
