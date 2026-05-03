import { create } from "zustand";

type UiStore = {
    sidebarOpen: boolean,
    commandPaletteOpen: boolean,
    setSidebarOpen: (open: boolean) => void,
    setCommandPaletteOpen: (open: boolean) => void,
    toggleSidebar: () => void
};

export const useUiStore = create<UiStore>((set) => ({
    sidebarOpen: true,
    commandPaletteOpen: false,
    setSidebarOpen: (open) => set({ sidebarOpen: open }),
    setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
    toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen }))
}))