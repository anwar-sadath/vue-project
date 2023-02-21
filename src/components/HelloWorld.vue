<template>
  <div>
    <h1 class="text-center p-2">{{ title }}</h1>
    <div class="text-center">
      <button type="button" class="btn btn-primary me-2" @click="passMessage">
        child to parent communication
      </button>

      <!-- child to child data pass -->
      <!-- data pass helloworld to userlist using vuex-->
      <button
        type="button"
        class="btn btn-primary"
        @click="this.$store.commit('increment')"
      >
        child to child communication
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "data from child",
    };
  },
  props: ["title"],
  methods: {
    passMessage() {
      this.$emit("emitEvent", this.msg); //child to parent communication
    },
  },
};
</script>
