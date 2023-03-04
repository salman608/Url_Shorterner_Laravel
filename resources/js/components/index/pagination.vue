<template>
<div class="flex justify-between mt-5">
    <a href="" class="border rounded shadow-xs w-10" :class="items.current_page==1?'bg-gray-200 text-gray-600 shadow-none':''" @click.prevent="prev">
        <<</a> <a href="" class="border rounded shadow-xs w-10" :class="items.current_page==items.last_page?'bg-gray-200 text-gray-600 shadow-none':''" @click.prevent="next"> >>
    </a>
</div>
</template>

<script>
export default {
  methods:{
    next() {
            if (this.items.current_page == this.items.last_page) return;
            let nextPageNumber = this.items.current_page + 1;
            this.fetchData(nextPageNumber);
            this.$router.replace({
                query: {
                    page: page
                }
            });
        },
        prev() {
            let prevPageNumber = this.items.current_page - 1;
            if (prevPageNumber == 0) return;

            this.fetchData(prevPageNumber);
            this.$router.replace({
                query: {
                    page: page
                }
            });
        },
  }
}
</script>

<style>

</style>
