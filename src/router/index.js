import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsList from "@/views/NewsList.vue";
import NewsDetail from "@/views/NewsDetail.vue";
import ContactPage from "@/views/ContactPage.vue";
import StaffPage from "@/views/StaffPage.vue";
import ActivityPage from "@/views/ActivityPage.vue";
import MapPage from "@/views/MapPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../components/PersonnelPage.vue')
  },
  {
    path: "/news",
    name: "NewsList",
    component: NewsList,
  },
  {
    path: "/news/:id",
    name: "NewsDetail",
    component: NewsDetail,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/staff",
    name: "StaffPage",
    component: StaffPage,
  },
  {
    path: "/activity",
    name: "ActivityPage",
    component: ActivityPage,
  },
  {
    path: "/map",
    name: "MapPage",
    component: MapPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
