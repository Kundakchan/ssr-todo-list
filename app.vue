<template>
  <div>
    <button
      :id="'button-1'"
      :class="['test', { true: 'test-class' }]"
    >
      Lorem, ipsum.
    </button><button>Lorem ipsum dolor sit.</button>
    <NuxtWelcome />
  </div>
</template>
