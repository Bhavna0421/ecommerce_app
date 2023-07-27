const usersData = [
    {
      "email": "bhavna@yopmail.com",
      "password": "Admin@123",
      "role": "admin",
      "name": "storeAdmin",
      "id": "001"
    },
    // ... other user data if any ...
  ];


const checkUserCredentials = (email, password) => {
    const user = usersData.find((user) => user.email === email && user.password === password);
  
    if (user) {
      // User credentials match, return the role
      return user.role;
    }
  
    // User not found or credentials don't match
    return null;
  };
  
  export default checkUserCredentials;