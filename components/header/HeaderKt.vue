<script lang="ts" setup>
const menu = ref([
  {
    key: 'index',
    label: 'Home'
  },
  {
    key: 'product',
    label: 'Product'
  },
  {
    key: 'about',
    label: 'About'
  },
  {
    key: 'servises',
    label: 'Servises'
  }
])
</script>
<template>
  <ul>
    <li 
      v-for="item in menu"
      :key="item.key"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
}
li {
  padding: 12px 0;
  font-size: 24px;
  color: gray;
  border-top: 2px solid transparent;
  cursor: pointer;
}
li:hover {
  border-top-color: blue;
}
</style>