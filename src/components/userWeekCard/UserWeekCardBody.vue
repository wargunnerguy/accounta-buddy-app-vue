<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle class="subtitle">{{ weekIndex + 1 }}. {{ $t('week') }} - {{ week.startDate }}</ion-card-subtitle>
      <ion-card-title class="title">{{ personData.name === 'buddy_0' ? 'Sten' : 'Reimo' }}</ion-card-title>
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
</template>

<script lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonItem,
  IonLabel,
} from "@ionic/vue";

export default {
  name: "UserWeekCardBody",
  props: ['personData', "week", "weekIndex"],
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonCheckbox
  },
  methods: {
    processDescription(text: string): string {
      return this.replaceCheckboxes(text);

    },
    replaceCheckboxes(text: string): string {
      return text; //TODO make [_] appear as checkbox in app
    }
  }
}
</script>

<style scoped>
ion-card {
  --ion-card-background: var(--ion-color-main-contrast);
  --ion-item-background: var(--ion-color-main-theme-contrast-dark);
  --ion-card: var(--ion-color-main-theme);
  --ion-item-border-color: var(--ion-color-main-contrast);
  margin-left: 0;
  margin-right: 0;
}

.title, .subtitle {
  color: var(--ion-color-primary-contrast);
}
</style>
