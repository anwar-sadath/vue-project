<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center p-2">Dynamic Forms</h1>
      <form @submit.prevent="checkForm($event)">
        <div v-for="(element, index) in blocks" :key="element.token">
          <label :for="element.name" class="form-label">{{
            element.props.title
          }}</label>
          <input
            :type="element.type"
            :name="element.name"
            :placeholder="element.props.placeholder"
            :class="
              element.type == 'checkbox'
                ? 'form-check-input'
                : 'form-control p-3 mt-2 mb-2'
            "
            v-model="element[element.token]"
            :required="element.props.required"
          />
        </div>
        <button type="submit" class="btn btn-primary mb-5">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import bloks from "../formData.json";
export default {
  data() {
    return {
      blocks: bloks,
    };
  },
  methods: {
    checkForm() {
      console.log(this.blocks);
      alert("form submitted");
    },
  },
};
</script>
