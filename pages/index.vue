<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const cards = ref([
  {
    title: 'Lorem, ipsum dolor.',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis incidunt! Temporibus ex soluta tempore commodi asperiores sed earum maiores, esse iste! Eligendi.',
    price: 1456,
    sale: 5.5,
    category: 'jamper'
  },
  {
    title: 'Lorem, ipsum dolor.',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis incidunt! Temporibus ex soluta tempore commodi asperiores sed earum maiores, esse iste! Eligendi.',
    price: 3556,
    sale: 1.1,
    category: 'jamper'
  },
  {
    title: 'Lorem, ipsum dolor. Lorem, ipsum',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis incidunt! Temporibus ex soluta tempore commodi asperiores sed earum maiores, esse iste! Eligendi.',
    price: 7355,
    sale: 6,
    category: 'jamper'
  },
  {
    title: 'Lorem, ipsum dolor.',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis incidunt! Temporibus ex soluta tempore commodi asperiores sed earum maiores, esse iste! Eligendi.',
    price: 2454,
    sale: 3,
    category: 'Bags'
  },
  {
    title: 'Lorem, ipsum dolor.',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis incidunt! Temporibus ex soluta tempore commodi asperiores sed earum maiores, esse iste! Eligendi.',
    price: 2345,
    sale: 50,
    category: 'Bags'
  },
  {
    title: 'ipsum dolor.',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis incidunt! Temporibus ex soluta tempore commodi asperiores sed earum maiores, esse iste! Eligendi.',
    price: 5234,
    sale: 36,
    category: 'Bags'
  },
  {
    title: 'Lorem, ipsum dolor.',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis incidunt! Temporibus ex soluta tempore commodi asperiores sed earum maiores, esse iste! Eligendi.',
    price: 1945,
    sale: 53,
    category: 'Bags'
  },
  {
    title: 'Lorem, ipsum dolor.',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis incidunt! Temporibus ex soluta tempore commodi asperiores sed earum maiores, esse iste! Eligendi.',
    price: 2345,
    sale: 44,
    category: 'Footwear'
  },
  {
    title: 'Lorem, ipsum.',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis incidunt! Temporibus ex soluta tempore commodi asperiores sed earum maiores, esse iste! Eligendi.',
    price: 1456,
    sale: 5.5,
    category: 'Footwear'
  }
])
</script>

<template>
  <section class="card-list">
    <CardKt
      v-for="(item, index) in cards"
      :key="index"
      v-bind="item"
    />
  </section>
</template>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 1024px) {
  .card-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 720px) {
  .card-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 460px) {
  .card-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>