import { create } from 'zustand'

export const storeAuth = create((set) => ({
  isAuth: true,
  setAuth: (auth) => set({ auth }),
}))
