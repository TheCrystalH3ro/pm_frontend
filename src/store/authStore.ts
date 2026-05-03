import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthUser } from "../types";

type AuthStore = {
    user: AuthUser | null,
    login: (user: AuthUser) => void,
    logout: () => void,
    setHasOrganization: (value: boolean) => void
};

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            login: (user) => set({ user }),
            logout: () => set({ user: null }),
            setHasOrganization: (value) => set(state => ({
                user: state.user ? { ...state.user, hasOrganization: value } : null
            }))
        }),
        { name: 'auth-storage' }
    )
);