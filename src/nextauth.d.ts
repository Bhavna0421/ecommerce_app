import { DefaultSession, DefaultUser } from "next-auth";

//Define role enum
export enum Role {
  admin = "admin",
}

//common interface for JWT and Session
interface IUser extends DefaultUser {
  role?: Role;
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
