<template>
  <ion-card>
    <ion-header>
      <ion-row>
        <ion-col center text-center>
          <div v-if="prevWeekGoals">{{ $t('last_week_completed') }} {{ prevWeekGoals }} {{ $t('goals') }}</div>
          <div v-else>{{ $t('happy_new_year') }}</div>
        </ion-col>
        <ion-col v-if="prevWeekGoals" center text-center>
          <div>{{ $t('so_far_done') }} {{ goalsDoneSoFar }}/{{ (weekIndex + 1) * 5 }} {{ $t('goals') }}</div>
        </ion-col>
      </ion-row>
    </ion-header>
  </ion-card>
</template>

<script>
import {
  IonCol,
  IonRow,
} from "@ionic/vue";

export default {
  name: "UserWeekCardHeader",
  props: ["prevWeekGoals", "goalsDoneSoFar", "weekIndex"],
  components: {
    IonCol,
    IonRow
  }
}
</script>

<style scoped>
ion-card {
  margin: 0;
  --ion-card-background: var(--ion-color-main-contrast)
}
</style>
