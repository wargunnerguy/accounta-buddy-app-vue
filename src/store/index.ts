import {defineStore} from 'pinia'
import axios from "axios";
import {EffectCube, Pagination} from "swiper";
import {IonicSlides} from "@ionic/vue";
import {getISOWeek} from "date-fns";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {auth} from '@/firebase/config.js';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth} from "firebase/auth";
import router from "@/router";

interface Task {
    taskId: string,
    description: string,
    isDone: boolean
}

interface PersonWeeklyData {
    userId: string,
    name: string,
    tasks: Task[],
    nrOfTasksDoneThisYear: number,
    perfectWeekStreak: number
}

interface WeekDataObj {
    startDate: string;
    weeklyData: PersonWeeklyData[];
}

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        sheetId: '18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs',
        apiKey: 'AIzaSyCu3eywuilXrvgyLneIpxMOAFZkL9bxqmg',
        fullLink: 'https://docs.google.com/spreadsheets/d/18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs/edit?usp=sharing',
        sheet: '2023',
        range: 'A17:E328',
        fullData: [] as WeekDataObj[],
        modules: [EffectCube, Pagination, IonicSlides],
        todayDate: new Date(),
        todayWeek: getISOWeek(new Date()),
        peopleWeeklyCompleteness: [] as number[][],
        isDarkMode: document.body.classList.contains('dark'),
        prefersDark: window.matchMedia('(prefers-color-scheme: dark)'),
    }),
    actions: {
        async register(email: string, password: string) {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    alert('Successfully registered! Please login.');
                    router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
        async signIn(email: string, password: string) {
            await signInWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    if (response) {
                        router.push('/');
                    } else {
                        throw new Error('login failed')
                    }
                })
        },

        async signUserOut() {
            await signOut(auth).then(() => {
                router.push('/sign-in');
            })
        },
        async fetchData() {
            this.fullData = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.sheet}!${this.range}?key=${this.apiKey}`)
                .then(result => result.data['values'])
                .then((result) => {
                    const nrOfWeeklyTasks = 5;  //just so i can have 5 tasks
                    const fullData = [];
                    const nrOfTasksDoneThisYear: number[] = [];
                    const perfectWeekStreak: number[] = [];
                    let weekNr = 0;
                    for (const i in result) {
                        if (result[i].length === 1) {
                            weekNr++;
                            const nrOfBuddies: number = (result[+i + 1].length - 1) / 2; // andmerea array pikkus miinus 1(index) ja jagada 2 (sest iga inimese kohta kaks sisendit (desc ja bool))
                            const weekStartDate: string = result[i][0];
                            const peopleWeeklyData: PersonWeeklyData[] = [];
                            const isPerfectWeek: Array<boolean> = new Array(nrOfBuddies)
                                .fill(true);
                            for (let buddyIndex = 0; buddyIndex < nrOfBuddies; buddyIndex++) {
                                const tasks: Task[] = [];
                                const buddyName: string = 'buddy_' + buddyIndex;
                                let tasksDoneThisWeek = 0;
                                for (let nr = 0; nr < nrOfWeeklyTasks; nr++) { // tasks
                                    const taskIsDone: boolean = result[(+i + 1 + nr)][(+buddyIndex * 2 + 2)].toUpperCase() === 'TRUE'
                                    tasks.push({
                                        taskId: buddyIndex + '_' + i + 1 + '_' + +nr,
                                        description: result[(+i + 1 + nr)][(+buddyIndex * 2 + 1)],
                                        isDone: taskIsDone,
                                    } as Task)
                                    if (!nrOfTasksDoneThisYear[buddyIndex]) nrOfTasksDoneThisYear[buddyIndex] = 0;
                                    if (!taskIsDone) isPerfectWeek[buddyIndex] = false;
                                    if (taskIsDone && typeof nrOfTasksDoneThisYear[buddyIndex] === 'number') nrOfTasksDoneThisYear[buddyIndex]++;
                                    if (taskIsDone) tasksDoneThisWeek++;
                                }
                                isPerfectWeek[buddyIndex] ? perfectWeekStreak[buddyIndex]++ : perfectWeekStreak[buddyIndex] = 0;
                                const personWeeklyData = {
                                    userId: buddyName, //TODO päris id sebida
                                    name: buddyName,
                                    tasks: tasks,
                                    nrOfTasksDoneThisYear: nrOfTasksDoneThisYear[buddyIndex],
                                    perfectWeekStreak: perfectWeekStreak[buddyIndex],
                                }
                                // this.peopleWeeklyCompleteness[buddyIndex][weekNr] = (tasksDoneThisWeek / nrOfWeeklyTass);
                                if (!this.peopleWeeklyCompleteness[buddyIndex] && (weekNr <= this.todayWeek)) this.peopleWeeklyCompleteness[buddyIndex] = []
                                if (weekNr <= this.todayWeek) this.peopleWeeklyCompleteness[buddyIndex].push(tasksDoneThisWeek / nrOfWeeklyTasks);
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
            this.setDateAttributes();
        },
        setDateAttributes() {
            this.todayDate = new Date();
            this.todayWeek = getISOWeek(this.todayDate);
        },
        getGoalsDoneSoFar(weekIndex: number, personIndex: number) {
            if (weekIndex < 0 || weekIndex > 51) return null;
            return this.fullData[weekIndex].weeklyData[personIndex].nrOfTasksDoneThisYear;
        },
        getNextWeekWrittenGoalsByWeekAndPersonIndex(weekIndex: number, personIndex: number) {
            if (weekIndex < 0) return null
            try {
                return this.fullData[weekIndex].weeklyData[personIndex].tasks.filter(task => task.description.trim().length > 0).length
            } catch (e: any) {
                console.error(e.message) // TODO fix when all weeks are shown
                return 0;
            }
        },
        getDoneWeeklyGoalsByWeekAndPersonIndex(weekIndex: number, personIndex: number) {
            if (weekIndex < 0) return null
            try {
                return this.fullData[weekIndex].weeklyData[personIndex].tasks.filter(task => task.isDone).length;
            } catch (e: any) {
                console.error(e.message) // TODO fix when all weeks are shown
            }
        },
        getStreakForUser(personIndex: number) {
            return this.fullData[this.$state.todayWeek - 2].weeklyData[personIndex].perfectWeekStreak;
        },
        getCompletenessesForUser(personIndex: number, nrOfWeeks: number) {
            return this.peopleWeeklyCompleteness[personIndex]
                .slice((this.peopleWeeklyCompleteness[personIndex].length - nrOfWeeks), this.peopleWeeklyCompleteness[personIndex].length);
        },
        /*        getDoneStatusForPreviousWeeksForUser(personIndex: number, nrOfWeeks: number): boolean[] {
                    return [true, false]
                },*/
        getFullData() {
            return this.fullData;
        },
    },
})
