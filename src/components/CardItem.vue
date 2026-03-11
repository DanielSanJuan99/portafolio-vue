<template>
  <div class="item">
    <img class="image" />
    <!-- <hr> -->
    <div class="details">
      <h3><slot name="title" /></h3>
      <p><slot name="description" /></p>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: aliceblue;
  border-radius: 1em;
  padding: 1rem;
}

div {
  color: black;
}

.details {
  flex: 1;
}
</style>
