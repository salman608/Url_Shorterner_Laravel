<template>
<div class="right-0 left-0 fixed flex justify-center" v-if="show">
    <div class="absolute rounded border p-1 bg-white shadow-xl">
        <div class="w-full h-full  border rounded p-4">
        <form @submit.prevent="submit" class="p-4">
            <h1 class="text-center font-bold text-orange-600">Shorten Your Url</h1>
            <div class="my-1 flex-col">
                <div>
                    <input type="text" class="p-2 mt-2 border border-orange-600 rounded-md shadow-md w-64" v-model="form.title" placeholder="Title for your shorten url" />
                </div>

                <span class="text-xl text-red-500" v-if="errors.title">{{
                    errors.title[0]}}</span>
            </div>
            <div class="my-1 flex-col">
                <div>
                    <input type="text" class="p-2 mt-2 border border-orange-600 rounded-md shadow-md w-64" v-model="form.original_url" placeholder="Past your url..." />
                </div>

                <span class="text-xl text-red-500" v-if="errors.original_url">{{
                 errors.original_url[0]}}</span>
            </div>

            <i @click="close" class="fas fa-times-circle text-gray-600 cursor-pointer float-left my-1"></i>
            <i @click="submit" class="fas fa-paper-plane text-orange-600 cursor-pointer float-right my-1"></i>
        </form>
    </div>
    </div>
</div>
</template>

<script>
export default {
    props:['show'],
    data() {

        return {
            form: {
                title: '',
                original_url: "",
            },
            errors: {},
        }
    },
    methods: {
        close(){
            this.$emit('closeModal');
        },
        submit() {
            if (this.original_url == "") return;
            axios
                .post("/url", this.form)
                .then((res) => {
                    this.form.title = "";
                    this.form.original_url = "";
                    this.items.unshift(res.data);
                    this.$notify({
                        message: "Url Created Successfully"
                    });
                })
                .catch((e) => {
                    this.errors = e.response.data.errors;
                });
        },
    }

}
</script>

<style>

</style>
