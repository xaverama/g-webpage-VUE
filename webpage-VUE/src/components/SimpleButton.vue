<template>
  <button id="feedBtn">{{ props.label }}</button>
</template>

<script setup lang="ts">

import {ref} from "vue";

const props = withDefaults(defineProps<{
  label?: string,
  color?: string,

}>(), {
  label: "Sign Up",
  color: "palevioletred"
})

const buttonColor = ref(props.color);


</script>

<style scoped>

#feedBtn{
  background: v-bind(buttonColor);
  border-radius: 8px;
  border: none;
  color: white;
  padding: 10px 20px;
}
#feedBtn:hover{
  opacity: 0.7;
  cursor: pointer;
}

</style>
