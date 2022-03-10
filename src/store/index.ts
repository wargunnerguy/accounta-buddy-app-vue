import {defineStore} from 'pinia'
import axios from "axios";
import {EffectCube, Pagination} from "swiper";
import {IonicSlides} from "@ionic/vue";

interface Task {
    taskId: string,
    description: string,
    isDone: boolean
}

interface PersonWeeklyData {
    userId: string,
    name: string,
    tasks: Task[],
    nrOfTasksDoneThisYear: number
}

interface WeekDataObj {
    startDate: string;
    weeklyData: PersonWeeklyData[];
}

export const useStore = defineStore('main', {
    state: () => ({
        sheetId: '18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs',
        apiKey: 'AIzaSyCu3eywuilXrvgyLneIpxMOAFZkL9bxqmg',
        fullLink: 'https://docs.google.com/spreadsheets/d/18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs/edit?usp=sharing',
        sheet: '2022',
        range: 'A17:E64',
        fullData: [] as WeekDataObj[],
        modules: [EffectCube, Pagination, IonicSlides],
    }),
    actions: {
        async fetchData() {
            this.fullData = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.sheet}!${this.range}?key=${this.apiKey}`)
                .then(result => result.data['values'])
                .then((result) => {
                    const nrOfWeeklyTasks = 5;  //just so i can have 5 tasks
                    const fullData = [];
                    const nrOfTasksDoneThisYear: number[] = [];
                    for (const i in result) {
                        if (result[i].length === 1) {
                            const nrOfBuddies: number = (result[+i + 1].length - 1) / 2; // andmerea array pikkus miinus 1(index) ja jagada 2 (sest iga inimese kohta kaks sisendit (desc ja bool))
                            const weekStartDate: string = result[i][0];
                            const peopleWeeklyData: PersonWeeklyData[] = [];
                            for (let buddyIndex = 0; buddyIndex < nrOfBuddies; buddyIndex++) {
                                const tasks: Task[] = [];
                                const buddyName: string = 'buddy_' + buddyIndex;
                                for (let nr = 0; nr < nrOfWeeklyTasks; nr++) {
                                    const taskIsDone: boolean = result[(+i + 1 + nr)][(+buddyIndex * 2 + 2)].toUpperCase() === 'TRUE'
                                    tasks.push({
                                        taskId: buddyIndex + '_' + i + 1 + '_' + +nr,
                                        description: result[(+i + 1 + nr)][(+buddyIndex * 2 + 1)],
                                        isDone: taskIsDone,
                                    } as Task)
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
                    return fullData as WeekDataObj[];
                })
                .catch(err => {
                    console.error(err)
                    return [];
                })
        },
        getGoalsDoneSoFar(weekIndex: number, personIndex: number) {
            if (weekIndex < 0 || weekIndex > 51) return null;
            console.log(this.fullData[weekIndex].weeklyData[personIndex].nrOfTasksDoneThisYear);
            return this.fullData[weekIndex].weeklyData[personIndex].nrOfTasksDoneThisYear;
        },
        getNextWeekWrittenGoalsByWeekAndPersonIndex(weekIndex: number, personIndex:number) {
            if (weekIndex < 0) return null
            try {
                return this.fullData[weekIndex].weeklyData[personIndex].tasks.filter(task => task.description.trim().length > 0).length
            } catch (e: any) {
                console.error(e.message) // TODO fix when all weeks are shown
                return 0;
            }
        },
        getDoneWeeklyGoalsByWeekAndPersonIndex(weekIndex: number, personIndex:number) {
            if (weekIndex < 0) return null
            try {
                return this.fullData[weekIndex].weeklyData[personIndex].tasks.filter(task => task.isDone).length;
            } catch (e: any) {
                console.error(e.message) // TODO fix when all weeks are shown
            }
        },
    },
})
