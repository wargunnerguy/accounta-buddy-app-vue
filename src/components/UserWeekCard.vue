<template>
  <ion-card class="container-card">
    <ion-header>
      <ion-row>
        <ion-col center text-center>
          <div v-if="prevWeekGoals">Eelmine nädal täidetud {{ prevWeekGoals }} eesmärki</div>
          <div v-else>Head uut aastat</div>
        </ion-col>
        <ion-col center text-center>
          <div>Siiani täidetud {{ goalsDoneSoFar }}/{{weekIndex*5}} eesmärki</div>
        </ion-col>
      </ion-row>
    </ion-header>
    <ion-card-header>
      <ion-card-subtitle>{{weekIndex + 1}}. nädal - {{ week.startDate }}</ion-card-subtitle>
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
    <ion-footer>
      <ion-row>
        <ion-col center text-center>
          <div>Tulevaks nädalaks {{ nextWeekGoals }} eesmärki kirjas</div>
        </ion-col>
        <ion-col center text-center>
          <div>See aasta järel {{ 260 - weekIndex*5 - 5}} eesmärki</div>
        </ion-col>
      </ion-row>
    </ion-footer>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonFooter,
  IonCol,
  IonRow,
  IonHeader
} from "@ionic/vue";

export default {
  name: "UserWeekCard",
  props: ['personData', "week", "prevWeekGoals", "nextWeekGoals", "goalsDoneSoFar", "weekIndex"],
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonFooter,
    IonCol,
    IonRow,
    IonHeader
  },
  methods: {
    goalsDone() {
      // return this.prevPersonData.tasks.filter((res) => res.isDone);
    },
  },
}
</script>

<style scoped>

.container-card {
  display: flex;
  flex-direction: column;
  background-color: #424242;
  height: 100%;
  width: 100%;
  margin: auto;
}
</style>
