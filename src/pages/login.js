// import React, { useState } from 'react';
// import { useRouter } from 'next/router'; // If using React Router
// import useUserStore from '../stores/useUserStore'; // Import the user state management hook
// import checkUserCredentials  from '../components/useAuthenticationutil'; // Import the user authentication function

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const router = useRouter();
//   const { setUserRole } = useUserStore();
// console.log(setUserRole)
//   const handleLogin = async () => {
//     try {
//       const userRole = checkUserCredentials(email, password);

//       if (userRole) {
//         setUserRole(userRole);

//         // Redirect to appropriate page based on the user role
//         if (userRole === 'admin') {
//           // router.push('/adminpage'); // Redirect to admin page
//           <Link href="/adminwishlistpage"></Link>
//         } else {
//           // router.push('/'); // Redirect to default user page
//           <Link href="/"></Link>
//         }
//       } else {
//         setError('Invalid credentials. Please try again.');
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <div>
//         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//       {error && <div>{error}</div>}
//     </div>
//   );
// };

// export default Login;


// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useUserStore  from '../stores/useUserStore';
import { checkUserCredentials } from '../utils/useAuthenticationUtil';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { setUserRole } = useUserStore();

  const handleLogin = async () => {
    try {
      const userRole = checkUserCredentials(email, password);

      if (userRole) {
        // Update the user role using the state management hook (Zustand)
        setUserRole(userRole);

        // Redirect to appropriate page based on the user role
        if (userRole === 'admin') {
          router.push('/adminpage');
        } else {
          router.push('/');
        }
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
