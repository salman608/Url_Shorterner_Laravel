<template>
    <div class="px-3 py-2 flex justify-center">
    <div class="py-10 flex flex-wrap justify-center border rounded-md">
      <h1 class="text-3xl text-center w-full">Forgot Password</h1>

      <form class="flex flex-wrap justify-center p-2" @submit.prevent="submit">
        <div class="w-full py-2">
          <input
            type="email"
            placeholder="Your Email....."
            v-model="form.email"
            class="border rounded-md p-2 shadow w-full"
          />
          <span class="text-xl text-red-500" v-if="errors.email">{{
          errors.email[0]
      }}</span>
        </div>
        <div class="w-full py-2">
          <input
            type="submit"
            value="Send Reset Password Link"
            class="
              px-3
              py-2
              bg-blue-500
              rounded
              shadow
              border
              text-white
              w-full
            "
          />
        </div>
      </form>
      </div>
    </div>
</template>
<script>


 export default{
    data(){
        return{
            form:{
            email:""
        },
           errors:{}
        }
    },
    methods:{
        submit(){
          axios.post("/password/forgot",this.form).then(res=>{
            this.$notify({message:res.data.message});
          }).catch(e=>(this.errors=e.response.data.errors));
        }
    }
 };
</script>
