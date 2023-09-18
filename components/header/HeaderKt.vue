<script lang="ts" setup>
const menu = ref([
  {
    key: 'index',
    label: 'Home'
  },
  {
    key: 'products',
    label: 'Product'
  },
  {
    key: 'about',
    label: 'About'
  },
  {
    key: 'cart',
    label: 'Cart'
  }
])
</script>
<template>
  <ul>
    <li 
      v-for="item in menu"
      :key="item.key"
    >
      <NuxtLink
        class="link"
        :to="{ name: item.key }"
      >
        {{ item.label }}
      </NuxtLink>
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
  border-top: 2px solid transparent;
  transition: border-top-color .5s ease;
}
li:hover {
  border-top-color: gray;
}
.link {
  color: gray;
  font-size: 24px;
  text-decoration: none;
}
</style>