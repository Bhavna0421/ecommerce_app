// utils/userAuthenticationUtils.js
import usersData from '../data/data.json';

const checkUserCredentials = (email, password) => {
  const user = usersData.find((user) => user.email === email && user.password === password);

  if (user) {
    // User credentials match, return the role
    return user.role;
  }

  // User not found or credentials don't match
  return null;
};

export { checkUserCredentials };
