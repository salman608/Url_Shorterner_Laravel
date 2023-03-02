<template>
   <div class="px-3 py-2 flex justify-center">
    <div class="py-10 flex flex-wrap justify-center border rounded-md">
      <h1 class="text-3xl text-center w-full">Reset Password</h1>

      <form class="flex flex-wrap justify-center p-2" @submit.prevent="submit">
        <div class="w-full py-2">
          <input
            type="email"
            placeholder="Your Email....."
            v-model="form.email"
            class="border rounded-md p-2 shadow w-full"
          />
        </div>

        <div class="w-full py-2">
          <input
            type="password"
            placeholder="*****....."
            v-model="form.password"
            class="border rounded-md p-2 shadow w-full"
          />
        </div>

        <div class="w-full py-2">
          <input
            type="password"
            placeholder="confirm password"
            v-model="form.password_confirmation"
            class="border rounded-md p-2 shadow w-full"
          />
        </div>


        <div class="w-full py-2">
          <input
            type="submit"
            value="Reset Now "
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
    middleware:'guest',
    data(){
        return{
            form:{
                email:'',
                token:'',
                password:'',
                password_confirmation:''
            },

        }

    },
    mounted(){
        this.form.email=this.$route.query.email;
        this.form.token=this.$route.query.token;
        console.log(this.$route);
    },
    methods:{
        submit(){
          axios.post('/password/reset',this.form).then(res=>{
            window.location="/";
          })
        }
    }
}

</script>
