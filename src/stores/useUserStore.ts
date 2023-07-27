// userStore.js
import create from "zustand";

const useUserStore = create((set) => ({
  userRole: "user", // Assuming user is the default role
  setUserRole: (role:any) => set({ userRole: role }),
}));

export default useUserStore;
