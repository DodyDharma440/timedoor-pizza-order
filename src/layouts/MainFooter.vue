<script setup lang="ts">
import { footerContacts, footerNavMenu, footerSocmed } from '@/constants/menu'
</script>

<template>
  <footer class="container footer">
    <div class="footer__content">
      <div class="footer__logo">
        <img class="footer__logo-image" src="/images/logo-alt.svg" />
        <h6 class="footer__section-title">Find Us :</h6>
        <div class="footer__logo-socials">
          <button
            v-for="(social, index) in footerSocmed"
            :key="index"
            class="footer__logo-social-btn"
          >
            <img :src="`/images/icons/${social.icon}.svg`" />
          </button>
        </div>
      </div>
      <div class="footer__navigation">
        <h6 class="footer__section-title">Navigation</h6>
        <div class="footer__navigation-links">
          <ul v-for="(item, index) in footerNavMenu" :key="index">
            <li
              v-for="(subItem, index) in item.items"
              :key="index"
              class="footer__navigation-list-item"
            >
              <RouterLink :to="subItem.path">
                {{ subItem.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__contact">
        <h6 class="footer__section-title">Contact</h6>
        <ul>
          <li
            v-for="(item, index) in footerContacts"
            :key="index"
            class="footer__contact-list-item"
          >
            <a
              :href="item.url"
              target="_blank"
              rel="noreferrer"
              class="footer__contact-list-item-link"
            >
              <img :src="`/images/icons/${item.icon}.svg`" class="footer__contact-list-item-icon" />
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__location">
        <h6 class="footer__section-title">Location</h6>
        <div class="footer__location-point">
          <img src="/images/icons/location.svg" class="footer__location-point-icon" />
          <div class="footer__location-point-content">
            <p class="footer__location-point-title">Kerobokan</p>
            <p>
              Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten
              Badung, Bali 80361
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__copyright">
      <p>
        Copyright © 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. | Privacy
        Policy
      </p>
      <p class="footer__copyright-description">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
        apply.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: spacing(10);
  border-top: 1px solid rgba($color: $text-color, $alpha: 0.1);
  padding-top: 60px;

  &__content {
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: spacing(5);

    > div {
      font-size: to-rem(20);
      grid-column: span 12 / span 12;

      @include md {
        font-size: to-rem(20);
      }

      @include lg {
        grid-column: span 6 / span 6;
      }

      @include xl {
        grid-column: span 3 / span 3;
      }
    }
  }

  &__section-title {
    font-size: to-rem(22);
    font-weight: 700;
    color: $primary-color;
    margin-bottom: spacing(5);

    @include md {
      font-size: to-rem(24);
      margin-bottom: spacing(6);
    }
  }

  &__logo {
    &-image {
      object-fit: contain;
      width: 200px;
      height: 55px;
      margin-bottom: spacing(6);

      @include md {
        width: 220px;
        height: 65px;
        margin-bottom: spacing(9);
      }

      @include lg {
        width: 244px;
        height: 73px;
      }
    }

    &-socials {
      display: flex;
      align-items: center;
      gap: spacing(4);
    }

    &-social-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: spacing(10);
      height: spacing(10);
      border-radius: 50%;
      transition: background-color 300ms;
      border: 1px solid $primary-color;

      @include md {
        width: spacing(12);
        height: spacing(12);
      }

      &:hover {
        background-color: rgba($color: $primary-color, $alpha: 0.3);
      }

      img {
        width: spacing(4);
        height: spacing(4);
        object-fit: contain;

        @include md {
          width: spacing(6);
          height: spacing(6);
        }
      }
    }
  }

  &__navigation {
    &-links {
      display: flex;
      gap: 82px;
    }

    &-list-item {
      margin-bottom: spacing(4);
      a:hover {
        color: $primary-color;
      }
    }
  }

  &__contact {
    &-list-item {
      margin-bottom: spacing(4);

      &-link {
        display: flex;
        align-items: center;
        gap: spacing(2);
      }

      &-icon {
        object-fit: contain;
        width: spacing(5);
        height: spacing(5);

        @include md {
          width: spacing(6);
          height: spacing(6);
        }
      }
    }
  }

  &__location {
    &-point {
      display: flex;
      gap: spacing(0.375);

      &-icon {
        margin-top: spacing(0.5);
        width: spacing(5);
        height: spacing(5);

        @include md {
          width: spacing(6);
          height: spacing(6);
        }
      }

      &-title {
        font-weight: 700;
        margin-bottom: spacing(1);
      }

      &-content {
        max-width: 407px;
      }
    }
  }

  &__copyright {
    border-top: 1px solid rgba($color: $text-color, $alpha: 0.1);
    padding: spacing(6) 0px;
    text-align: center;
    line-height: to-rem(24);
    font-size: to-rem(16);

    @include md {
      font-size: to-rem(18);
      line-height: to-rem(28);
    }

    &-description {
      font-size: to-rem(14);

      @include md {
        font-size: to-rem(16);
      }
    }
  }
}
</style>
