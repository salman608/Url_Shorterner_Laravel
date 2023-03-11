<template>
  <div class="flex justify-between mt-5">
    <a
      href=""
      class="border rounded shadow-xs w-10"
      :class="
        items.current_page == 1 ? 'bg-gray-200 text-gray-600 shadow-none' : ''
      "
      @click.prevent="prev"
      ><i class="fas fa-arrow-left"></i>
    </a>
    <a
      href=""
      class="border rounded shadow-xs w-10"
      :class="
        items.current_page == items.last_page
          ? 'bg-gray-200 text-gray-600 shadow-none'
          : ''
      "
      @click.prevent="next"
      ><i class="fas fa-arrow-right"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: ["items"],
  methods: {
    next() {
      Event.$emit("nextPage");
    },
    prev() {
      Event.$emit("prevPage");
    },
  },
};
</script>

<style>
</style>
