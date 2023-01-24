<template lang="">
<div>
    <div class="text-center">
        <h1 class="text-2xl">Shorten Your Big URL</h1>
        <hr>
        <form action="" @submit.prevent="submit">
            <input type="text" class="p-2 mt-2 border border-orange-600 rounded-md shadow-md w-64" placeholder="Past your url...">

            <i @click="submit" class="fas fa-paper-plane text-orange-600 cursor-pointer" ></i>
        </form>

    </div>
</div>
</template>

<script>
export default {
    methods: {
        submit() {

        }
    }
}
</script>

<style lang="">

</style>
