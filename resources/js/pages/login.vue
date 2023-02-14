<template>
  <div class="px-3 py-2 flex justify-center">
    <div class="py-10 flex flex-wrap justify-center border rounded-md">
      <h1 class="text-3xl text-center w-full">Login Here</h1>

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
            type="submit"
            value="LogIn"
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
export default {
  middleware: "guest",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      axios
        .post("/login", this.form)
        .then((res) => {
          //   console.log(res.data);
          window.location = "/";
        })
        .catch((e) => console.log(e.response));
    },
  },
};
</script>
