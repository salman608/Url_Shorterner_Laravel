<template>
   <section class=" m-1 p-2 w-3/12 border rounded">
            <div class="border-b py-3" v-for="item in data" :key="item.id">
                <h3 class="font-semibold text-orange-700 cursor-pointer" @click="showDetails(item)"> {{ item.title }}</h3>
                <div class="flex justify-between text-gray-700 text-sm">
                    <div class="flex ">
                        <p class="cursor-pointer" @click="copyToClipboard(item.path)"> {{ item.shorten_url }}</p>
                        <a :href="item.path" target="_blank">
                            <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                    <div class="text-xs">
                        {{ item.created_at }}
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
 props:['data'],
 methods:{
    showDetails(item){
      this.$emit("urlSelected",item);
    }
 }

}
</script>

<style>

</style>
