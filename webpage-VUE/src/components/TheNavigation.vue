<template>
  <nav id="top">
    <ul>
      <li>Logo</li>
      <div class="list">
        <li><a href="#top">Home</a></li>
        <li><a href="#main">About</a></li>
        <li><a href="#bottom">Account</a></li>
      </div>
    </ul>
  </nav>

</template>

<script setup>

</script>

<style scoped>
nav {
  padding: 2rem;
  color: white;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: black;
  border-bottom: 2px solid black;
}

.list {
  display: flex;
  gap: 1rem;
}

ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}


</style>
