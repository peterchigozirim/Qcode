<template>
  <div class="space-y-8">
    <div class="capitalize text-2xl md:text-4xl font-bold text-emerald-600">
      <p>send us a message</p>
    </div>
    <div
      class="w-full rounded-md shadow-md drop-shadow-xl shadow-emerald-600/20 bg-emerald-50"
    >
      <div class="w-11/12 mx-auto pt-6 pb-4">
        <VeeForm :validation-schema="schema" @submit.prevent="submit()">
          <div class="space-y-4">
            <div>
              <label
                for="name"
                class="text-lg capitalize mb-1 text-emerald-600 font-semibold"
                >full name</label
              >
              <div
                class="flex h-12 items-center w-full md:w-96 overflow-hidden rounded-md shadow-inner bg-white/90"
              >
                <div
                  class="w-10 flex items-center justify-center text-lg h-full text-center bg-emerald-600/90 text-white"
                >
                  <font-awesome :icon="['fas', 'user']" />
                </div>
                <div class="h-full w-full">
                  <VeeField
                    type="text"
                    autocomplete="username"
                    name="name"
                    placeholder="Enter full name"
                    class="h-full w-full focus:border-none focus:ring-0 focus:outline-none px-2 text-emerald-600/90 placeholder:text-emerald-600/90 placeholder:capitalize bg-transparent"
                  />
                </div>
              </div>
              <ErrorMessage
                class="text-red-600 text-xs first-letter:capitalize"
                name="name"
              />
            </div>
            <div>
              <label
                for="email"
                class="text-lg capitalize mb-1 text-emerald-600 font-semibold"
                >email address</label
              >
              <div
                class="flex h-12 overflow-hidden items-center w-full md:w-96 rounded-md shadow-inner bg-white/90"
              >
                <div
                  class="w-10 flex items-center justify-center text-lg h-full text-center bg-emerald-600/90 text-white"
                >
                  <font-awesome :icon="['fas', 'envelope']" />
                </div>
                <div class="h-full w-full">
                  <VeeField
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    class="h-full w-full focus:border-none focus:ring-0 focus:outline-none px-2 text-emerald-600/90 placeholder:text-emerald-600/90 placeholder:capitalize bg-transparent"
                  />
                  <VeeField type="hidden" name="os" :value="form.os" />
                </div>
              </div>
              <ErrorMessage
                class="text-red-600 text-xs first-letter:capitalize"
                name="email"
              />
            </div>

            <div>
              <label
                for="message"
                class="text-lg capitalize mb-2 text-emerald-600 font-semibold"
                >message</label
              >
              <div class="w-full rounded-md shadow-inner bg-white/90">
                <div class="h-full w-full">
                  <VeeField name="message" v-slot="{ field }">
                    <textarea
                      v-bind="field"
                      id=""
                      placeholder="Enter message"
                      class="w-full focus:border rounded-md p-2 min-h-[10rem] focus:border-emerald-600 focus:outline-none focus:ring-0"
                    >
                    </textarea>
                  </VeeField>
                </div>
              </div>
              <ErrorMessage
                class="text-red-600 text-xs first-letter:capitalize"
                name="message"
              />
            </div>

            <div class="">
              <button
                class="w-full capitalize hover:bg-emerald-400 bg-emerald-600/90 text-white h-10 rounded-md drop-shadow-lg flex items-center justify-center"
              >
                send message
              </button>
            </div>
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
  <div
    v-show="loader"
    class="w-full h-screen fixed top-0 left-0 bg-emerald-700/50 backdrop-blur scroll-m-0 flex items-center justify-center"
  >
    <img src="/image/loader.svg" class="blur-none" alt="" />
  </div>
</template>

<script setup>
  import { useToast } from "vue-toastification";
  import { ref, computed } from "vue";

  const toast = useToast();
  const loader = ref(false);
  const form = ref({
    email: "",
    fullname: "",
    message: "",
    os: navigator.userAgent,
  });

  const schema = {
    name: "required",
    email: "required|email",
    message: "required|min:30",
  };

  const submit = (values) => {
    console.log(values);
  };
</script>

<style></style>
