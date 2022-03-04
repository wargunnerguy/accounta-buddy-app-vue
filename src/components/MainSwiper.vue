<template>
  <div class="swiper-wrapper">
    <swiper
        :direction="'vertical'"
        :slidesPerView="1"
        :pagination="{dynamicBullets: true}"
        :modules="modules"
        class="vertical-swiper"
        :initialSlide=-1
    >
      <swiper-slide v-for="(week, wi) in fullData" :key="week.startDate">
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
                :prevWeekGoals="getDoneWeeklyGoalsByWeekAndPersonIndex(fullData, wi-1, pi)"
                :nextWeekGoals="getNextWeekWrittenGoalsByWeekAndPersonIndex(fullData,wi+1, pi)"
                :goalsDoneSoFar="getGoalsDoneSoFar(fullData,wi, pi)"
            ></UserWeekCard>
          </swiper-slide>
        </swiper>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {Swiper, SwiperSlide} from "swiper/vue";
import UserWeekCard from "@/components/userWeekCard/UserWeekCard";
import {IonicSlides} from '@ionic/vue';
import {EffectCube, Pagination} from 'swiper';

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
  data() {
    return {
      sheetId: '18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs',
      apiKey: 'AIzaSyCu3eywuilXrvgyLneIpxMOAFZkL9bxqmg',
      fullLink: 'https://docs.google.com/spreadsheets/d/18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs/edit?usp=sharing',
      sheet: '2022',
      range: 'A17:E64',
      fullData: null,
      modules: [EffectCube, Pagination, IonicSlides],
    }
  },
  methods: {
    getDoneWeeklyGoalsByWeekAndPersonIndex(fullData, weekindex, personindex) {
      if (weekindex < 0) return null
      try {
        return fullData[weekindex].weeklyData[personindex].tasks.filter(task => task.isDone).length;
      } catch (e) {
        console.error(e.message) // TODO fix when all weeks are shown
      }
    },
    getNextWeekWrittenGoalsByWeekAndPersonIndex(fullData, weekindex, personindex) {
      if (weekindex < 0) return null
      try {
        return fullData[weekindex].weeklyData[personindex].tasks.filter(task => task.description.trim().length > 0).length
      } catch (e) {
        console.error(e.message) // TODO fix when all weeks are shown
        return 0;
      }
    },
    getGoalsDoneSoFar(fullData, weekindex, personindex) {
      if (weekindex < 0) return null
      if (weekindex > 51) return null
      return fullData[weekindex].weeklyData[personindex].nrOfTasksDoneThisYear;
    },
    async fetchData() {
      this.fullData = await this.axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.sheet}!${this.range}?key=${this.apiKey}`)
          .then(result => result.data['values'])
          .then(result => {
            const nrOfWeeklyTasks = 5; //just so i can have 5 tasks
            const fullData = [];
            let nrOfTasksDoneThisYear = [];
            for (let i in result) {
              if (result[i].length === 1) {
                const nrOfBuddies = (result[+i + 1].length - 1) / 2; // andmerea array pikkus miinus 1(index) ja jagada 2 (sest iga inimese kohta kaks sisendit (desc ja bool))
                const weekStartDate = result[i][0];
                const peopleWeeklyData = [];
                for (let buddyIndex = 0; buddyIndex < nrOfBuddies; buddyIndex++) {
                  const tasks = [];
                  const buddyName = 'buddy_' + buddyIndex;
                  for (let nr = 0; nr < nrOfWeeklyTasks; nr++) {
                    const taskIsDone = result[(+i + 1 + nr)][(+buddyIndex * 2 + 2)].toUpperCase() === 'TRUE'
                    tasks.push({
                      taskId: buddyIndex + '_' + i + 1 + '_' + +nr,
                      description: result[(+i + 1 + nr)][(+buddyIndex * 2 + 1)],
                      isDone: taskIsDone,
                    })
                    if (!nrOfTasksDoneThisYear[buddyIndex]) nrOfTasksDoneThisYear[buddyIndex] = 0;
                    if (taskIsDone && typeof nrOfTasksDoneThisYear[buddyIndex] === 'number') nrOfTasksDoneThisYear[buddyIndex]++;
                  }
                  const personWeeklyData = {
                    userId: buddyName, //TODO päris id sebida
                    name: buddyName,
                    tasks: tasks,
                    nrOfTasksDoneThisYear: nrOfTasksDoneThisYear[buddyIndex],
                  }
                  peopleWeeklyData.push(personWeeklyData);
                }
                fullData.push({
                  startDate: weekStartDate,
                  weeklyData: peopleWeeklyData
                })
              }
            }
            return fullData;
          })
          .catch(err => console.error(err))
    },
  },
  created() {
    this.fetchData();
  }
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

.swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical>.swiper-pagination-bullets {
  right: 4px;
}
</style>
