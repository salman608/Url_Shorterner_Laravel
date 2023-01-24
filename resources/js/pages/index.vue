<template lang="">
<div>
    <div class="text-center">
        <h1 class="text-2xl">Shorten Your Big URL</h1>
        <hr>
        <form action="" @submit.prevent="submit">
            <input type="text" class="p-2 mt-2 border border-orange-600 rounded-md shadow-md w-64" placeholder="Past your url...">

            <i @click="submit" class="fas fa-paper-plane text-orange-600 cursor-pointer"></i>
        </form>
        <span class=" text-xl text-red-500" v-if="errors.original_url">{{ errors.original_url[0] }}</span>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            original_url: '',
            errors:{}
        }
    },
    methods: {
        submit() {
            axios.post("/api/url", {
                original_url:this.original_url
            }).then((res) => {
                console.log(res);
            }).catch(e => {
              this.errors= e.response.data.errors;
            });
        }
    }
}
</script>

<style lang="">

</style>
