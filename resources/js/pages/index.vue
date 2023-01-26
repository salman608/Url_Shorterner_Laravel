<template>
  <div>
    <div class="text-center">
      <h1 class="text-2xl text-bold text-orange-600">Shorten Your Bigs URLs</h1>
      <hr />
      <form @submit.prevent="submit">
        <input
          type="text"
          class="p-2 mt-2 border border-orange-600 rounded-md shadow-md w-64"
          v-model="original_url"
          placeholder="Past your url..."
        />

        <i
          @click="submit"
          class="fas fa-paper-plane text-orange-600 cursor-pointer"
        ></i>
      </form>

      <span class="text-xl text-red-500" v-if="errors.original_url">{{
        errors.original_url[0]
      }}</span>

      <!-- <div v-for="item in items" :key="item.id">
            <p> {{ item.original_url }},</p>
            <p> {{ item.shorten_url }}</p>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      original_url: "",
      errors: {},
      items: [],
    };
  },
  methods: {
    submit() {
      if (this.original_url == "") return;
      axios
        .post("/api/url", {
          original_url: this.original_url,
        })
        .then((res) => {
          this.original_url = "";
          //    this.items
        })
        .catch((e) => {
          this.errors = e.response.data.errors;
        });
    },
  },
};
</script>

<style lang="">
</style>
