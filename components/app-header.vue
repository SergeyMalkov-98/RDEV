<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/">
        <nuxt-img
          class="auth-header__logo"
          src="/images/logo.png"
          alt="logo"
          draggable="false"
        />
      </nuxt-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  margin-top: 32px;
}
</style>
