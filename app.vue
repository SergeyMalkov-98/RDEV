<template>
  <nuxt-loading-indicator color="#DAE5F5" :duration="5000" />

  <nuxt-layout v-bind="$attrs">
    <nuxt-page />
  </nuxt-layout>
</template>
