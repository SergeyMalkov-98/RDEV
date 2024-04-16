<template>
  <div class="offer">
    <div class="offer__sub-title">{{ offer.sellingText }}</div>
    <div class="offer__card">
      <div class="offer__header">
        <img
          :src="offer.image"
          width="80"
          height="80"
          class="offer__image"
          alt="offer-image"
        />
        <div class="offer__info">
          <span class="offer__name">{{ offer.offerName }}</span>
          <span class="offer__documents">{{ offer.documents }}</span>
        </div>
      </div>
      <div class="offer__sub-info">
        <div class="offer__sub-info-element">
          <span class="offer__sub-info-text">{{ offer.sum }}</span>
          <span class="offer__sub-info-postfix">сумма</span>
        </div>
        <div class="offer__sub-info-element">
          <span class="offer__sub-info-text">{{ offer.percent }}</span>
          <span class="offer__sub-info-postfix">ставка</span>
        </div>
        <div class="offer__sub-info-element">
          <span class="offer__sub-info-text">{{ offer.term }}</span>
          <span class="offer__sub-info-postfix">срок</span>
        </div>
      </div>
      <nuxt-link
        class="offer__link"
        target="__blank"
        :to="offer.link"
        @click="$metrika.reachGoal('FillOutApplication')"
      >
        Заполнить заявку
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  offer: {
    type: Object,
    default: null,
  },
});
</script>

<style lang="scss" scoped>
.offer {
  background: var(--c-grey-500);
  width: 278px;
  border-radius: 40px;
  margin-top: 32px;

  &__sub-title {
    text-align: center;
    color: var(--c-white);
    padding: 8px 0;
    @include txt-r;
  }

  &__card {
    border-radius: 40px;
    background: var(--c-grey-400);
    padding: 8px;
  }

  &__header {
    display: flex;
    align-items: center;
  }

  &__image {
    border-radius: 30px;
    background: white;
    padding: 4px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }

  &__name {
    color: var(--c-white);
    @include txt-m;
    margin-bottom: 8px;
  }

  &__documents {
    @include txt-m-m;
    text-transform: lowercase;
    color: var(--c-white);
    opacity: 50%;
  }

  &__sub-info {
    margin-top: 32px;
    padding: 0 8px;
  }

  &__sub-info-element {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 32px;
    }
  }

  &__sub-info-text {
    color: var(--c-white);
    @include txt-l;
  }

  &__sub-info-postfix {
    color: var(--c-white);
    opacity: 20%;
    @include txt-m-m;
  }

  &__button {
    background: var(--c-green-700);
    outline: none;
    border: none;
    width: 100%;
    border-radius: 30px;
    padding: 16px;
    cursor: pointer;
    @include txt-l;
    color: var(--c-grey-600);
  }

  &__link {
    background: var(--c-green-700);
    outline: none;
    border: none;
    width: 100%;
    border-radius: 30px;
    padding: 16px;
    cursor: pointer;
    @include txt-l;
    color: var(--c-grey-600);
    display: block;
    text-align: center;
    text-decoration: none;
  }
}
</style>
