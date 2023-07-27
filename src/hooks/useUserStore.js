// hooks/useUserStore.js
import create from 'zustand';

const useUserStore = create((set) => ({
  userRole: 'user', // Assuming the default role is "user"
  setUserRole: (role) => set({ userRole: role }),
}));

export { useUserStore };
