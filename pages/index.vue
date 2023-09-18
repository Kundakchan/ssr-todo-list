<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts"></script>

<template>
  <section>
    <div class="banner" />
    <div class="popular-porduct">
      <div
        v-for="index in 5"
        :key="index"
        class="popular-porduct-item"
      >
        Product - {{ index }}
      </div>
    </div>
    <div class="popular-category">
      <div
        v-for="index in 2"
        :key="index"
        class="popular-category-item"
      >
        Category - {{ index }}
      </div>
    </div>
    <div class="new-product">
      <div
        v-for="index in 4"
        :key="index"
        class="new-product-item"
      >
        New - {{ index }}
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  gap: 24px;
}
.banner {
  height: calc(50vh - 61px);
  background-color: rgb(204, 204, 204);
}
.popular-porduct {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(5, 1fr);
}
.popular-porduct-item {
  height: calc(50vh - (61px + 24px));
  background-color: rgb(204, 204, 204);
  padding: 8px;
  font-size: 24px;
  color: gray;
  display: flex;
  align-items: end;
  justify-content: center;
}
.popular-category {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, 1fr);
}
.popular-category-item {
  height: 200px;
  background-color: rgb(204, 204, 204);
  padding: 8px;
  font-size: 24px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: start;
}
.new-product {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1.5vw;
}
.new-product-item {
  width: calc((100vw - (42px + (1.5vw * 3))) / 4);
  height: calc((100vw - (42px + (1.5vw * 3))) / 4);
  background-color: rgb(204, 204, 204);
  padding: 8px;
  color: gray;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>