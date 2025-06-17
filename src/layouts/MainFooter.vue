<script setup lang="ts">
import { footerContacts, footerNavMenu, footerSocmed } from '@/constants/menu'
</script>

<template>
  <footer class="container main-footer">
    <div class="content">
      <div class="logo">
        <img src="/images/logo-alt.svg" />
        <h6 class="section-title">Find Us :</h6>
        <div class="socials">
          <button v-for="(social, index) in footerSocmed" :key="index">
            <img :src="`/images/icons/${social.icon}.svg`" />
          </button>
        </div>
      </div>
      <div class="navigation">
        <h6 class="section-title">Navigation</h6>
        <div class="links">
          <ul v-for="(item, index) in footerNavMenu" :key="index">
            <li v-for="(subItem, index) in item.items" :key="index">
              <RouterLink :to="subItem.path">
                {{ subItem.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="contact">
        <h6 class="section-title">Contact</h6>
        <ul>
          <li v-for="(item, index) in footerContacts" :key="index">
            <a :href="item.url" target="_blank" rel="noreferrer">
              <img :src="`/images/icons/${item.icon}.svg`" class="icon" />
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="location">
        <h6 class="section-title">Location</h6>
        <div class="point">
          <img src="/images/icons/location.svg" class="icon" />
          <div>
            <p class="title">Kerobokan</p>
            <p>
              Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten
              Badung, Bali 80361
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>
        Copyright © 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. | Privacy
        Policy
      </p>
      <p class="description">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
        apply.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.main-footer {
  margin-top: spacing(10);
  border-top: 1px solid rgba($color: $text-color, $alpha: 0.1);
  padding-top: 60px;

  .content {
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: spacing(5);

    > div {
      grid-column: span 3 / span 3;
      font-size: to-rem(20);

      .section-title {
        font-size: to-rem(24);
        font-weight: 700;
        color: $primary-color;
        margin-bottom: spacing(6);
      }
    }

    .navigation {
      .links {
        display: flex;
        gap: 82px;
        ul {
          li {
            margin-bottom: spacing(4);
            a:hover {
              color: $primary-color;
            }
          }
        }
      }
    }

    .contact {
      ul {
        li {
          margin-bottom: spacing(4);

          a {
            display: flex;
            align-items: center;
            gap: spacing(2);

            .icon {
              width: spacing(6);
              height: spacing(6);
              object-fit: contain;
            }
          }
        }
      }
    }

    .location {
      .point {
        display: flex;
        gap: spacing(0.375);

        .icon {
          width: spacing(6);
          height: spacing(6);
          margin-top: spacing(0.5);
        }

        .title {
          font-weight: 700;
          margin-bottom: spacing(1);
        }

        > div {
          max-width: 407px;
        }
      }
    }
  }

  .logo {
    > img {
      width: 244px;
      height: 73px;
      object-fit: contain;
      margin-bottom: spacing(9);
    }

    .socials {
      display: flex;
      align-items: center;
      gap: spacing(4);

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: spacing(12);
        height: spacing(12);
        border-radius: 50%;
        transition: background-color 300ms;
        border: 1px solid $primary-color;

        &:hover {
          background-color: rgba($color: $primary-color, $alpha: 0.3);
        }

        img {
          width: spacing(6);
          height: spacing(6);
          object-fit: contain;
        }
      }
    }
  }

  .copyright {
    border-top: 1px solid rgba($color: $text-color, $alpha: 0.1);
    padding: spacing(6) 0px;
    text-align: center;
    line-height: to-rem(28);

    .description {
      font-size: to-rem(16);
    }
  }
}
</style>
