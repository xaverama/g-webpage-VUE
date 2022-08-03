<template>
  <div v-if="props.content">
    <div
        :style="{ height: props.content.height + 'px', width:  props.content.width + 'px', background: props.content.color }">
      {{ props.content.color }}
    </div>
  </div>
  <div v-else>
    <p>No Content</p>
  </div>

</template>

<script setup lang="ts">

import { Rectangle } from "../services/data-service";

const props = withDefaults(defineProps<{
  content?: Rectangle | undefined
}>(), {
  content: undefined
})

</script>

<style scoped>

* {
  color: black;
}

</style>
