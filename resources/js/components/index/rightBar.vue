<template>
  <section class="m-1 p-2 w-9/12 border rounded">
    <div v-if="data">
      <div class="flex justify-between">
        <h1>{{ data.title }}</h1>
        <i
          class="fas fa-times text-red-400 hover:text-red-700 cursor-pointer"
          @click="destroy"
        ></i>
      </div>
      <p class="text-xs text-gray-500">{{ data.original_url }}</p>
      <div class="flex my-1">
        <p class="text-xs text-orange-500">{{ data.shorten_url }}</p>
        <i
          class="fas fa-copy text-xs text-orange-500 mx-2 py-1 cursor-pointer"
          @click="copyToClipboard(data.path)"
        ></i>
      </div>
      <div class="my-1">
        <p class="text-sm text-gray-600">Visits: {{ data.visits }}</p>
      </div>
    </div>
    <div v-else class="text-center text-xl text-gray-500">
      <h2>Selected Url To Show Details</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    copyToClipboard(url) {
      //   console.log(url);
      navigator.clipboard.writeText(url);
    },
    destroy() {
      this.$emit("deleteItem", this.data);
    },
  },
};
</script>

<style>
</style>
