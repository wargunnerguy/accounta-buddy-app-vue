<template>
  <ion-card class="container-card">
    <UserWeekCardHeader
        :prev-week-goals="prevWeekGoals"
        :week-index="weekIndex"
        :goals-done-so-far="goalsDoneSoFar"/>
    <UserWeekCardBody
        :person-data="personData"
        :week-index="weekIndex"
        :week="week"/>
    <UserWeekCardFooter
        :next-week-goals="nextWeekGoals"
        :week-index="weekIndex"/>
  </ion-card>
</template>

<script>
import {IonCard,} from "@ionic/vue";
import UserWeekCardHeader from "@/components/userWeekCard/UserWeekCardHeader";
import UserWeekCardBody from "@/components/userWeekCard/UserWeekCardBody";
import UserWeekCardFooter from "@/components/userWeekCard/UserWeekCardFooter";

export default {
  name: "UserWeekCard",
  props: ['personData', "week", "prevWeekGoals", "nextWeekGoals", "goalsDoneSoFar", "weekIndex"],
  components: {
    IonCard,
    UserWeekCardFooter,
    UserWeekCardHeader,
    UserWeekCardBody
  }
}
</script>

<style lang="scss" scoped>

.container-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: auto;
  --ion-card-background: var(--ion-color-step-250);
}

</style>
