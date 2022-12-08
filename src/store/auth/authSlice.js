import { createSlice } from '@reduxjs/toolkit'
import { AUTH_NOT_AUTHENTICATED, AUTH_CHECKING } from '../../types'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: AUTH_NOT_AUTHENTICATED,
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
      state.status = AUTH_CHECKING
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
