<template lang="">
<div>
     <bridge-notify />
    <app-header />
    <div class="min-h-screen">
        <Index />
    </div>
    <app-footer />
</div>
</template>

<script>
import AppHeader from "./components/Layouts/Header.vue";
import AppFooter from "./components/Layouts/Footer.vue";
import Index from "./pages/index.vue";

export default {
  components: { AppFooter, AppHeader, Index },
};
</script>

<style lang="">
</style>
