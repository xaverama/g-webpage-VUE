<template>
  <div id="main">
    <div class="content">
    <p>This is our hero section</p>
        <p>{{ props.msg }}</p>
    </div>

  </div>

</template>

<script setup lang="ts">

import {defineProps, withDefaults} from "vue";

const props = withDefaults(defineProps<{
  msg?: string
}>(), {
  msg: "This is our default message"
})

</script>

<style scoped>

#main {
  background: teal;
  height: 400px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.content {
  text-align: center;
  border: 2px solid white;
  padding: 3rem;
}

</style>
