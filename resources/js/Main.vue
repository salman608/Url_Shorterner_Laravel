<template lang="">
<div>
    <app-header />
    <div class="min-h-screen"></div>
    <app-footer />
</div>
</template>

<script>
import AppHeader from './components/Layouts/Header.vue';
import AppFooter from './components/Layouts/Footer.vue';

export default {
    components: { AppFooter, AppHeader }
}
</script>

<style lang="">

</style>
