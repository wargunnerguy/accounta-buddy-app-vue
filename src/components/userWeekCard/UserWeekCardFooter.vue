<template>
  <ion-card>
    <ion-footer>
      <ion-row>
        <ion-col center text-center>
          <div>Tulevaks nädalaks {{ nextWeekGoals }} eesmärki kirjas</div>
        </ion-col>
        <ion-col center text-center>
          <div>See aasta järel {{ 260 - weekIndex * 5 - 5 }} eesmärki</div>
        </ion-col>
      </ion-row>
    </ion-footer>
  </ion-card>
</template>
<script>
import {IonCol, IonRow} from "@ionic/vue";

export default {
  name: 'UserWeekCardFooter',
  props: ["nextWeekGoals", "weekIndex"],
  components: {
    IonCol,
    IonRow
  }
}
</script>
<style scoped lang="scss">

ion-card {
  margin: 0;
  --ion-card-background: var(--ion-color-main-contrast)
}

</style>
