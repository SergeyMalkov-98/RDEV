<template>
  <div class="default-layout">
    <app-header />
    <main class="main">
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<script setup>
import AppHeader from "~/components/app-header.vue";
import AppFooter from "~/components/app-footer.vue";
</script>

<style lang="scss" scoped>
.default-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  .main {
    margin-bottom: 32px;
  }
}
</style>
