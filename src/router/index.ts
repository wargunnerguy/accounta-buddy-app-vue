import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import {getAuth} from "firebase/auth";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/tab1'
    },
    {
        name: 'Register',
        path: '/register',
        component: () => import('@/views/Auth/RegisterUser.vue')
    },
    {
        name: 'SignIn',
        path: '/sign-in',
        component: () => import('@/views/Auth/SignIn.vue')
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/tab1'
            },
            {
                path: 'tab1',
                component: () => import('@/views/MyThisWeekPage.vue')
            },
            {
                path: 'tab2',
                component: () => import('@/views/GeneralBuddyListPage.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/DetailedUsersWeeksPage.vue')
            },
            {
                path: 'settings',
                component: () => import('@/views/SettingsPage.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path !== '/sign-in' && to.path !== '/register' && !getAuth().currentUser) next({name: 'SignIn'})
    else next()
})

export default router
