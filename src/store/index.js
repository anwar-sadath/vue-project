import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    count: 0,
    userList: [],
    searchWord: null,
    filteredUser: null,
  },
  mutations: {
    addUsers(state, users) {
      state.userList = users;
    },
    filterUser(state, text) {
      state.searchWord = text;
      text = text.trim().toLowerCase();
      state.filteredUser = state.userList.filter((el) => {
        return (
          el.name.toLowerCase().includes(text) ||
          el.username.toLowerCase().includes(text) ||
          el.email.toLowerCase().includes(text) ||
          el.website.toLowerCase().includes(text) ||
          el.address.city.toLowerCase().includes(text) ||
          el.phone.toLowerCase().includes(text)
        );
      });
    },
    increment(state) {
      state.count++;
    },
  },
  actions: {
    async getUserList({ commit }) {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("addUsers", data.data);
      } catch (err) {
        alert(err);
        console.log(err);
      }
    },
    filterUser({ commit }, text) {
      commit("filterUser", text);
    },
  },
  getters: {
    getFilteredUserList: (state) =>
      state.filteredUser ? state.filteredUser : state.userList,
  },
});
