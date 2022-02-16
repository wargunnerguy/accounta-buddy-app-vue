<template>
  <div class="swiper-wrapper">
    <swiper
        :direction="'vertical'"
        :centeredSlides="true"
        :slidesPerView="1"
        :spaceBetween="100"
        :nested="true"
        :centerInsufficientSlides="true"
        :pagination="true"
        :modules="modules"
        class="vertical-swiper"
    >
      <swiper-slide v-for="(week) in fullData" :key="week.startDate">
        <swiper
            :effect="'cube'"
            :grabCursor="true"
            :direction="'horizontal'"
            :centeredSlides="true"
            :slidesPerView="1"
            :initialSlide=1
            :spaceBetween="100"
            :centerInsufficientSlides="true"
            :nested="true"
            :cubeEffect="{
      shadow: false,
      slideShadows: false
    }"
            :pagination="false"
            :modules="modules"
            class="horizontal-swiper"
        >
          <swiper-slide v-for="(personData) in week.weeklyData" :key="week + '_' + personData.userId">
            <ion-card class="container-card">
              <ion-card-header>
                <ion-card-subtitle>{{ week.startDate }}</ion-card-subtitle>
                <ion-card-title>{{ personData.name === 'buddy_0' ? 'Sten' : 'Reimo' }}</ion-card-title>
                <!--TODO get real name -->
              </ion-card-header>
              <ion-card-content>
                <ion-item v-for="(task) in personData.tasks"
                          :key="week + '_' + personData.userId + '_' + task.taskId">
                  <ion-label>{{ task.description }}</ion-label>
                  <ion-checkbox :checked="task.isDone"
                                slot="end">
                  </ion-checkbox>
                </ion-item>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
        </swiper>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {Swiper, SwiperSlide} from "swiper/vue";
import {
  IonicSlides,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonCheckbox
} from '@ionic/vue';
import {EffectCube, Pagination} from 'swiper';

import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";
import '@ionic/vue/css/ionic-swiper.css';

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonCheckbox
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
    async fetchData() {
      this.fullData = await this.axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.sheet}!${this.range}?key=${this.apiKey}`)
          .then(result => result.data['values'])
          .then(result => {
            const nrOfWeeklyTasks = 5; //just so i can have 5 tasks
            const fullData = [];
            for (let i in result) {
              if (result[i].length === 1) {
                const nrOfBuddies = (result[+i + 1].length - 1) / 2; // andmerea array pikkus miinus 1(index) ja jagada 2 (sest iga inimese kohta kaks sisendit (desc ja bool))
                const weekStartDate = result[i][0];
                const peopleWeeklyData = [];
                for (let buddyIndex = 0; buddyIndex < nrOfBuddies; buddyIndex++) {
                  const tasks = [];
                  const buddyName = 'buddy_' + buddyIndex;
                  for (let nr = 0; nr < nrOfWeeklyTasks; nr++) {
                    tasks.push({
                      taskId: buddyIndex + '_' + i + 1 + '_' + +nr,
                      description: result[(+i + 1 + nr)][(+buddyIndex * 2 + 1)],
                      isDone: result[(+i + 1 + nr)][(+buddyIndex * 2 + 2)].toUpperCase() === 'TRUE',
                    })
                  }
                  const personWeeklyData = {
                    userId: buddyName, //TODO päris id sebida
                    name: buddyName,
                    tasks: tasks,
                  }
                  peopleWeeklyData.push(personWeeklyData);
                }
                fullData.push({
                  startDate: weekStartDate,
                  weeklyData: peopleWeeklyData
                })
              }
            }
            console.log(fullData);
            return fullData;
          })
          .catch(err => console.error(err))
    }
  },
  created() {
    this.fetchData();
  }
});
</script>
<style>

.swiper {
  height: 400px;
  width: 400px;
}

.container-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #424242;
  height: 100%;
  width: 100%;
  margin: auto;
}

.horizontal-swiper {
  z-index: -10;
}

.vertical-swiper {
  background-color: transparent;
  z-index: 2;
}
</style>
