import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import JobView from '../views/jobs/JobView.vue'
// import JobDetails from '../views/jobs/jobDeatial.vue'



const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/jobs',
        name: 'Job',
        component: JobView
      },
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router