<template>
  <div class="flex flex-wrap">
    <div class="w-full p-4">
      <button
        class="float-right px-1 py-2 bg-yellow-700 rounded shadow text-white w-32"
        @click="openModal"
      >
        New
      </button>
    </div>
    <div class="w-full flex">
      <left-Bar
        @urlSelected="showDetails"
        :allItems="items"
        :data="items.data"
      />
      <right-Bar @deleteItem="destroy" :data="selectedItem" />
    </div>
    <transition name="fade">
      <create-Modal
        :show="modalOpen"
        @closeModal="modalOpen = false"
        :items="items.data"
      />
    </transition>
  </div>
</template>

<script>
import LeftBar from "../components/index/leftBar.vue";
import RightBar from "../components/index/rightBar.vue";
import CreateModal from "../components/index/createModal.vue";

export default {
  middleware: "auth",
  components: {
    LeftBar,
    RightBar,
    CreateModal,
  },
  data() {
    return {
      modalOpen: false,
      form: {
        title: "",
        original_url: "",
      },

      errors: {},
      selectedItem: null,
      items: {
        data: [],
      },
    };
  },

  mounted() {
    this.fetchData(this.$route.query.page);
    Event.$on("prevPage", this.prev);
    Event.$on("nextPage", this.next);
  },
  methods: {
    submit() {
      if (this.form.original_url == "") return;
      axios
        .post("/url", this.form)
        .then((res) => {
          this.form.title = "";
          this.form.original_url = "";

          this.items.unshift(res.data);
          this.$notify({
            message: "Url Created Successfully",
          });
        })
        .catch((e) => {
          this.errors = e.response.data.errors;
        });
    },
    fetchData(page = 1) {
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
          this.items.data = this.items.data.filter((i) => i.id != item.id);
          this.$notify({
            message: "Deleted Url successfully!",
            type: "warning",
          });
        });
      }
    },

    showDetails(item) {
      this.selectedItem = item;
    },
    openModal() {
      this.modalOpen = true;
    },
    next() {
      if (this.items.current_page == this.items.last_page) return;
      let nextPageNumber = this.items.current_page + 1;
      this.fetchData(nextPageNumber);
      this.$router.replace({
        query: {
          page: nextPageNumber,
        },
      });
    },
    prev() {
      let prevPageNumber = this.items.current_page - 1;
      if (prevPageNumber == 0) return;

      this.fetchData(prevPageNumber);
      this.$router.replace({
        query: {
          page: prevPageNumber,
        },
      });
    },
  },
};
</script>

<style lang="">
</style>
