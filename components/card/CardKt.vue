<script lang="ts" setup>
const props = defineProps<{
  title: string,
  discription: string,
  price: number,
  sale: number,
  category: string
}>()
</script>

<template>
  <div class="kt-card-layout">
    <div class="kt-card-header">
      <h4>{{ props.title }}</h4>
    </div>
    <div class="kt-card-content">
      <p>{{ props.discription }}</p>
      <span>{{ props.category }}</span>
    </div>
    <div class="kt-card-footer">
      <span class="kt-card-price">{{ props.price }}</span>
      <span class="kt-card-sale">{{ props.sale }}</span>
      <button class="kt-card-add">
        Add to cart
      </button>
    </div>
  </div>
</template>

<style scoped>
  .kt-card-layout {
    min-height: 400px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    box-shadow: 0px 0px 3px 0 gray;
  }
  .kt-card-header {
    padding: 12px 24px;
    border-bottom: 1px solid gray;
    overflow: hidden;
  }
  .kt-card-header h4 {
    margin: 0.64em 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kt-card-content {
    padding: 12px 24px;
    border-bottom: 1px solid gray;
  }
  .kt-card-footer {
    padding: 12px 24px;
    display: grid;
    gap: 8px;
    grid-template-areas:
      "price sale"
      "add add"
  }
  .kt-card-price {
    grid-area: price;
  }
  .kt-card-sale {
    grid-area: sale;
  }
  .kt-card-add {
    grid-area: add;
  }
</style>