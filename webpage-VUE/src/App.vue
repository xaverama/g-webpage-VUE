<template>
  <header>
    <TheNavigation></TheNavigation>
  </header>
  <main>
    <section id="main">
      <Hero></Hero>
    </section>
    <section id="dynamic">
      <div v-if="rectangles" class="card">
        <template v-for="item in rectangles" :key="item.color">
          <DynamicRendering :content="item"></DynamicRendering>
        </template>
      </div>
    </section>
    <section id="form">
      <RegisterForm></RegisterForm>
    </section>
  </main>
  <footer>
    <TheFooter></TheFooter>
  </footer>

</template>

<script setup lang="ts">

import TheNavigation from "./components/TheNavigation.vue";
import Hero from "./components/Hero.vue";
import DynamicRendering from "./components/DynamicRendering.vue";
import {onMounted, ref} from "vue";
import {dataService} from "./services/data-service";
import RegisterForm from "./components/RegisterForm.vue";
import TheFooter from "./components/TheFooter.vue";

const data = dataService();

const rectangles = ref();

onMounted(async () => {

  rectangles.value = await data.getAllData()

})
</script>

<style scoped>

header {
  width: 100%;
  background: red;
}

#dynamic{
  padding: 3rem 0;
}

#form{
  background: lightblue;
  display: flex;
  justify-content: center;
  padding: 2rem;


}

.card{
  display: flex;
  justify-content: space-around;

}
footer {
  height: 200px;
  background: lightcyan;
  padding: 2rem;
}


</style>
