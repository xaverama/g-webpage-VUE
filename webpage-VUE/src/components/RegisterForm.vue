<template>
  <form @submit.prevent="registerMe">
    <h2>Register Form</h2>
    <div class="email">
      <label>Firstname</label>
      <input type="text" v-model="firstName" autofocus required>
    </div>
    <div class="email">
      <label>Lastname</label>
      <input type="text" v-model="lastName"  required>
    </div>
    <div class="email">
      <label>Email</label>
      <input type="email" v-model="email"  required>
    </div>
    <div class="passwordInput">
      <label>Password</label>
      <input type="password" v-model="password" required>
    </div>
    <SimpleButton type="submit"></SimpleButton>
  </form>
</template>

<script setup lang="ts">

import {ref} from "vue";
import SimpleButton from "./SimpleButton.vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

function registerMe() {
  console.log("this is my email, ", email.value)
  console.log("this is my password, ", password.value)
}

</script>

<style scoped>

h2{
  color: black;
  margin-bottom: 1rem;
}


form {
  padding: 2rem 3rem;
  border-radius: 8px;
  background: white;
  max-width: 250px;
  color: black;
}

div {
  margin-bottom: 1rem;

}

input {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.3rem;
  background: lightgray;
}

.email {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.passwordInput {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  margin-top: 1rem;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}

button:hover {
  opacity: 0.7;
  cursor: pointer;
}


</style>
