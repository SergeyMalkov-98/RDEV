<template>
  <div class="index-page">
    <Head>
      <Title>Ревордс Девелопмент</Title>
      <Meta name="description" content="Тестовое задание" />
    </Head>
    <div class="container">
      <div class="index-page__wrapper">
        <div class="index-page__texts">
          <h1 class="index-page__title">
            Займы на карту онлайн от ведущих МФО
          </h1>
          <h2 class="index-page__info">
            Для получения большей суммы, обращайтесь в разные мфо. Заполнение
            двух и более заявок гарантирует получение требуемой суммы!
          </h2>
        </div>
        <nuxt-img
          class="auth-header__logo"
          src="/images/company-img.png"
          alt="logo"
          draggable="false"
        />
      </div>
      <div class="index-page__offers">
        <offer-card v-for="offer in offers" :key="offer.id" :offer="offer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import OfferCard from "~/components/offer-card.vue";

const { data: offers } = await useAsyncData("offers", () =>
  $fetch("https://config-tool.ru/front.json").then(({ data: { offers } }) => {
    return offers;
  })
);
</script>

<style lang="scss" scoped>
.index-page {
  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__title {
    margin-bottom: 24px;
    color: var(--c-white);
  }

  &__info {
    color: var(--c-white);
  }
  &__offers {
    display: grid;
    grid-template-columns: repeat(auto-fill, 260px);
    justify-content: space-between;
    flex-flow: wrap;
  }
}
</style>
