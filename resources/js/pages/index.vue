<template>
  <div>
    <div class="text-center">
      <h1 class="text-2xl text-bold text-orange-600">Shorten Your Big URL</h1>
      <hr />
      <form @submit.prevent="submit">
        <div class="my-1 flex-col">
            <div>
            <input
          type="text"
          class="p-2 mt-2 border border-orange-600 rounded-md shadow-md w-64"
          v-model="form.title"
          placeholder="Title for your shorten url"
        />
            </div>

        <span class="text-xl text-red-500" v-if="errors.title">{{
        errors.title[0]
      }}</span>
        </div>
        <div class="my-1 flex-col">
            <div>
                <input
          type="text"
          class="p-2 mt-2 border border-orange-600 rounded-md shadow-md w-64"
          v-model="form.original_url"
          placeholder="Past your url..."
        />
            </div>

        <span class="text-xl text-red-500" v-if="errors.original_url">{{
        errors.original_url[0]
      }}</span>
        </div>




        <i
          @click="submit"
          class="fas fa-paper-plane text-orange-600 cursor-pointer"
        ></i>
      </form>


    </div>
    <section class="mt-5 pt-4 text-center flex justify-center ">
      <div
        class="border rounded-md p-4 flex justify-center mt-4"
        style="margin: 100px auto !important; margin-top: 20px"
      >
      <div v-if="items.data.length > 0">
        <table class="mt-5" >
          <thead>
            <tr>
              <th class="text-xl text-orange-600">Title</th>
              <th class="text-xl text-orange-600">Original Url</th>
              <th class="text-xl text-orange-600">Shorten Url</th>

              <th class="text-xl text-orange-600">Time</th>
              <th class="text-xl text-orange-600">Visits</th>
              <th class="text-xl text-orange-600">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items.data" :key="item.id">
                <td class="rounded border p-2 text-sm"> {{ item.title }}</td>
              <td class="rounded border p-2 text-sm">

                    {{ item.original_url }}


              </td>
              <td class="rounded border p-2 text-sm">
                <span class="cursor-pointer" @click="copyToClipboard(item.path)">
                {{ item.shorten_url }}
               </span>
                <a :href="item.path" target="_blank"
                  >
                  <i class="fas fa-external-link-alt ml-2"></i
                ></a>
              </td>

              <td class="rounded border p-2 text-sm">{{ item.created_at }}</td>
              <td class="rounded border p-2 text-sm">
                {{ item.visits }}
              </td>
              <td class="rounded border p-2">
                <i
                  @click="destroy(item)"
                  class="
                    fas
                    fa-times
                    text-xl text-orange-500
                    cursor-pointer
                    hover:text-green-600
                  "
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between mt-5">
            <a href="" class="border rounded shadow-xs w-10"
            :class="items.current_page==1?'bg-gray-200 text-gray-600 shadow-none':''" @click.prevent="prev"> <<</a>
            <a href="" class="border rounded shadow-xs w-10"
            :class="items.current_page==items.last_page?'bg-gray-200 text-gray-600 shadow-none':''" @click.prevent="next"> >></a>
          </div>
      </div>



        <div v-else>
          <h2>No Shorten Url Yet!</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
        form:{
            title:'',
            original_url: "",
        },

      errors: {},
      items: {data:[]}
    };
  },

  mounted() {
    this.fetchData(this.$route.query.page);
  },
  methods: {
    submit() {
      if (this.original_url == "") return;
      axios
        .post("/url", this.form)
        .then((res) => {
          this.form.title="";
          this.form.original_url = "";
          this.items.unshift(res.data);
          this.$notify({ message: "Url Created Successfully" });
        })
        .catch((e) => {
          this.errors = e.response.data.errors;
        });
    },

    fetchData(page=1) {

      axios
        .get(`/url?page=${page}`)
        .then((res) => {
          this.items = res.data;
        })
        .catch((e) => {
              this.errors = e.response.data.errors;
            });
    },

    destroy(item) {
      if (confirm("Are You Sure?")) {
        axios.delete(`url/${item.shorten_url}`).then((res) => {
          this.items = this.items.filter((i) => i.id != item.id);
          this.$notify({
            message: "Deleted Url successfully!",
            type: "warning",
          });
        });
      }
    },

    copyToClipboard(url){
    //   console.log(url);
      navigator.clipboard.writeText(url);
    },
    next(){
        if(this.items.current_page==this.items.last_page) return;
        let nextPageNumber=this.items.current_page +1;
        this.fetchData(nextPageNumber);
        this.$router.replace({query:{page:page}});
    },
    prev(){
        let prevPageNumber=this.items.current_page - 1;
        if(prevPageNumber== 0) return;

        this.fetchData(prevPageNumber);
        this.$router.replace({query:{page:page}});
    },
  },
};
</script>

<style lang="">
</style>
