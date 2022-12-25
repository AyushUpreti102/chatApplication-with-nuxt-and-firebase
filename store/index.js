import { loginUser, registerUser, logoutUser } from "../services/auth";
import {addUser} from '../services/user'

export const state = () => ({
  user: null,
  otherUsers: [
    
  ],
  theme: false
});

export const getters = {
  getotherUsers: (state) => {
    return state.otherUsers;
  },
  getUser: (state) => {
    return state.user
  },
  getTheme: (state) => {
    return state.theme;
  }
};

export const mutations = {
  SAVE_USER_INFO: async (state, payload) => {
    state.user = {uid: payload.user.uid, createdAt: payload.user.metadata.createdAt, userName: payload.user.email.split('@')[0]}
  },
  CHANGE_THEME: (state, payload) => {
    state.theme = payload
  },
  LOGOUT: (state) => {
    state.user = null;
    state.otherUsers = [];
  }
};

export const actions = {
  changeTheme: (context, payload) => {
    context.commit('CHANGE_THEME', payload)
  },
  login: async (context, payload) => {
    try {
      const result = await loginUser(payload.email, payload.password);
      context.commit("SAVE_USER_INFO", result)
    } catch (error) {
      console.log(error);
    }
  },
  Signup: async (context, payload) => {
    try {
      const result = await registerUser(payload.email, payload.password)
      const user = {createdAt: result.user.metadata.createdAt, userName: result.user.email.split('@')[0]}
      await addUser(result.user.uid, user)
      context.commit("SAVE_USER_INFO", result);
    } catch (error) {
      console.log(error);
    }
  },
  logout: async (context) => {
    try {
      await logoutUser();
      context.commit('LOGOUT')
    } catch (error) {
      console.log(error);
    }
  }
};
