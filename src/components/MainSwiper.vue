<template>
  <div class="swiper-wrapper">
    <swiper
        :direction="'vertical'"
        :slidesPerView="1"
        :pagination="{dynamicBullets: true}"
        :modules="modules"
        class="vertical-swiper"
        :initialSlide=store.todayWeek-1
    >
      <swiper-slide v-for="(week, wi) in store.fullData" :key="week.startDate">
        <swiper
            :effect="'cube'"
            :grabCursor="true"
            :direction="'horizontal'"
            :centeredSlides="true"
            :initialSlide=0
            :cubeEffect="{
      shadow: false,
      slideShadows: false
    }"
            :pagination="false"
            :modules="modules"
            class="horizontal-swiper"
        >
          <swiper-slide v-for="(personData, pi) in week.weeklyData" :key="wi + '_' + personData.userId">
            <UserWeekCard
                :personData="personData"
                :week="week"
                :weekIndex="wi"
                :prevWeekGoals="store.getDoneWeeklyGoalsByWeekAndPersonIndex(wi-1, pi)"
                :nextWeekGoals="store.getNextWeekWrittenGoalsByWeekAndPersonIndex(wi+1, pi)"
                :goalsDoneSoFar="store.getGoalsDoneSoFar(wi, pi)"
            ></UserWeekCard>
          </swiper-slide>
        </swiper>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Swiper, SwiperSlide} from "swiper/vue";
import UserWeekCard from "@/components/userWeekCard/UserWeekCard.vue";

import {IonicSlides} from '@ionic/vue';
import {EffectCube, Pagination} from 'swiper';

import {useStore} from "@/store";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import '@ionic/vue/css/ionic-swiper.css';


export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    UserWeekCard,
  },
  setup() {
    const store = useStore();
    return {
      store,
      modules: [EffectCube, Pagination, IonicSlides],
    }
  },
});

</script>
<style lang="scss">

.swiper-wrapper {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  max-width: 600px;
}

.swiper {
  --bullet-background: var(--ion-color-main-theme, #ffcc45);
  --bullet-background-active: var(--ion-color-main-theme, #ffcc45);
}

.swiper-pagination {
  right: 10px;
}

.swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical > .swiper-pagination-bullets {
  right: 4px;
}
</style>
