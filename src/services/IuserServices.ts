import { User } from "next-auth";

export interface IuserService {
  signInCredentials(email: string, password: string): Promise<User> | User;
}
