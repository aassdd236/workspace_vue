import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import FoodStoreView from '@/views/foodstore/FoodStoreView.vue'
import TicketView from '@/views/ticket/TicketView.vue'
import PaymentCheckView from '@/views/payment/PaymentCheckView.vue'
import MoviePosterView from '@/views/ticket/MoviePosterView.vue'
import TestView from '@/views/ticket/TestView.vue'
import SlideView from '@/views/slide/SlideView.vue'
import ChoosePointView from '@/views/ticket/ChoosePointView.vue'
import EndPointView from '@/views/ticket/EndPointView.vue'
import PlusPointView from '@/views/ticket/PlusPointView.vue'
import PointUse from '@/views/ticket/PointUse.vue'
import ChoosePoint2View from '@/views/foodstore/ChoosePoint2View.vue'
import EndPoint2View from '@/views/foodstore/EndPoint2View.vue'
import PlusPoint2View from '@/views/foodstore/PlusPoint2View.vue'
import PointUse2 from '@/views/foodstore/PointUse2.vue'
import PaymentCheckView2 from '@/views/foodstore/PaymentCheckView2.vue'
import PaymentCheckView3 from '@/views/foodstore/PaymentCheckView3.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: SlideView
  },
  {
    path: '/main/main',
    name: '/main/main',
    component: MainView
  },
  {
    path: '/foodstore/foodform',
    name: '/foodstore/foodform',
    component: FoodStoreView
  },
  {
    path: '/ticket/ticketform',
    name: '/ticket/ticketform',
    component: TicketView
  },
  
  {
    path: '/payment/paymentform',
    name: 'PaymentCheckView',
    component: PaymentCheckView
  },
  {
    path: '/ticket/poster',
    name: '/ticket/poster',
    component: MoviePosterView
  },
  {
    path: '/test/test',
    name: '/test/test',
    component: TestView
  },
  {
    path: '/ticket/choosepoint',
    name: '/ticket/choosepoint',
    component: ChoosePointView
  },
  {
    path: '/ticket/endpoint',
    name: '/ticket/endpoint',
    component: EndPointView
  },
  {
    path: '/ticket/pluspoint',
    name: '/ticket/pluspoint',
    component: PlusPointView
  },
  {
    path: '/ticket/pointuse',
    name: 'PointUse',
    component: PointUse
  },
  {
    path: '/foodstore/choosepoint2',
    name: 'ChoosePoint2View',
    component: ChoosePoint2View
  },
  {
    path: '/foodstore/endpoint2',
    name: 'EndPoint2View',
    component: EndPoint2View
  },
  {
    path: '/foodstore/pluspoint2',
    name: 'PlusPoint2View',
    component: PlusPoint2View
  },
  {
    path: '/foodstore/pointuse2',
    name: 'PointUse2',
    component: PointUse2
  },
  {
    path: '/foodstore/paymentform',
    name: 'PaymentCheckView2',
    component: PaymentCheckView2
  },
  {
    path: '/foodstore/paymentform03',
    name: 'PaymentCheckView3',
    component: PaymentCheckView3
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
