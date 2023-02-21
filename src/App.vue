<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import UserList from "./components/UserList.vue";
import DynamicForms from "./components/Forms.vue";
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <!-- data pass parent to child -->
        <HelloWorld :title="title" @emitEvent="emitFromChild" />
        <UserList />
        <DynamicForms />
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Vue Js Test",
    };
  },
  methods: {
    //event from child
    emitFromChild(event) {
      alert(event);
    },
  },
  mounted() {
    this.$store.dispatch("getUserList");
  },
};
</script>
