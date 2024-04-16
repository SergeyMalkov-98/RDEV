<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__info">
          <span class="footer__copyright">
            © 2023 https://example.com — сервис подбора займов
          </span>
          <span>ИП Тестович Андрей Владимирович </span>
          <span>ИНН: 123123123123 </span>
        </div>
        <div class="footer__sub-info">
          <div class="footer__warn">
            Сайт НЕ является представительством МФО или банком, не выдает займов
            и кредитов. Все рекомендуемые на сайте кредитные учреждения имеют
            соответствующие лицензии. Условия неуплаты можно уточнить на сайте
            МФО.
          </div>
          <div class="footer__links">
            <div class="footer__link">
              <nuxt-link to="/">
                Политика в отношении обработки персональных данных.
              </nuxt-link>
            </div>
            <div class="footer__newsletter">
              <div class="footer__link footer__link--no-wrap">
                <nuxt-link to="/"> Согласие на рассылку </nuxt-link>
              </div>
              <div class="footer__link footer__link--no-wrap">
                <nuxt-link to="/"> Отказаться от рассылки </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--c-black);

  &__wrapper {
    padding: 42px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__info {
    color: var(--c-white);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__copyright {
    margin-bottom: 16px;
  }

  &__sub-info {
    color: var(--c-white);
    opacity: 50%;
  }
  &__warn {
    @include txt-r-m;
    margin-bottom: 26px;
  }

  &__links {
    display: flex;
  }
  &__link {
    a {
      color: var(--c-white);
      opacity: 50%;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &--no-wrap {
      text-wrap: nowrap;
    }
  }

  &__newsletter {
    margin-left: 45px;
  }
}
</style>
