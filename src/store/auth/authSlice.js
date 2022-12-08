import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'not-authenticated', 'authenticated'
    uuid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {
      return { state, action }
    },
    logout: (state, payload) => {
      return { state, payload }
    },
    checkingCredentials: (state) => {
      return { state }
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
