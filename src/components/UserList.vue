<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center p-2">User List</h1>

      <h1 class="text-center p-2">
        click from helloworld : {{ this.$store.state.count }}
      </h1>
      <input
        class="form-control mb-3"
        type="search"
        v-model="searchText"
        placeholder="enter search value"
      />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">website</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in userList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.website }}</td>
            <td>{{ item.address.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    userList() {
      return this.$store.getters.getFilteredUserList;
    },
    searchText: {
      get() {
        return this.$store.state.searchWord;
      },
      set(value) {
        this.$store.dispatch("filterUser", value);
      },
    },
  },
};
</script>
