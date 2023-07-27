import { User } from "next-auth";
import users from "../users/data.json";

export default function UserService(
  email: string,
  password: string,
  role: string
) {
  const user = users.find((user) => {
    const emailfound = email === user.email;
    const isPasswordfound = password === user.password;
    const userRole = role === user.role;
    const userFound = emailfound && isPasswordfound && userRole;
    return userFound;
  }) as User;

  if (!user) {
    throw new Error("user not valid");
  }
  return user;
}
