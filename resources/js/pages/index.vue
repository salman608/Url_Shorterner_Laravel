<template>
  <div>
    <div class="text-center">
      <h1 class="text-2xl text-bold text-orange-600">Shorten Your Big URL</h1>
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
    </div>
    <section class="mt-5 pt-4 flex justify-center">
      <div
        class="border rounded-md p-4 flex justify-center mt-4"
        style="margin: 100px auto !important; margin-top: 20px"
      >
        <table class="mt-5">
          <thead>
            <tr>
              <th class="text-xl text-orange-600">Original Url</th>
              <th class="text-xl text-orange-600">Shorten Url</th>
              <th class="text-xl text-orange-600">Created At</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td class="rounded border p-2 text-sm">
                {{ item.original_url }}
              </td>
              <td class="rounded border p-2 text-sm">{{ item.shorten_url }}</td>
              <td class="rounded border p-2 text-sm">{{ item.created_at }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
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

  mounted() {
    this.fetchData();
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
          this.items.unshift(res.data);
          this.$notify({ message: "Url Created Successfully" });
        })
        .catch((e) => {
          this.errors = e.response.data.errors;
        });
    },

    fetchData() {
      axios
        .get("/api/url")
        .then((res) => {
          this.items = res.data;
        })
        .catch((e) => {});
    },
  },
};
</script>

<style lang="">
</style>
