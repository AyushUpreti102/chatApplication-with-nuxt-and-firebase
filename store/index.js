export const state = () => ({
  user: null,
  items: [
    {
      icon: "mdi-apps",
      title: "Welcome",
      to: "/",
    },
    {
      icon: "mdi-chart-bubble",
      title: "Inspire",
      to: "/inspire",
    },
  ],
  miniVariant: false,
});

export const getters = {
    getDrawerItems: (state)=> {
        return state.items
    }
};

export const mutations = {};

export const actions = {};
