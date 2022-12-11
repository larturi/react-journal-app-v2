import { createSlice } from '@reduxjs/toolkit'
import {
  AUTH_NOT_AUTHENTICATED,
  AUTH_CHECKING,
  AUTH_AUTHENTICATED,
} from '../../types'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: AUTH_CHECKING,
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = AUTH_AUTHENTICATED
      state.uid = payload.uid
      state.email = payload.email
      state.displayName = payload.displayName
      state.photoURL = payload.photoURL
      state.errorMessage = null
    },
    logout: (state, { payload }) => {
      state.status = AUTH_NOT_AUTHENTICATED
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = payload.errorMessage
    },
    checkingCredentials: (state) => {
      state.status = AUTH_CHECKING
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
