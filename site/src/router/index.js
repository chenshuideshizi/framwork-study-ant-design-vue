/* eslint-disable import/no-unresolved */
import Layout from '../layouts'
import demoRoutes from './demoRoutes';

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/components',
    component: Layout,
    children: [
      // {
      //   path: 'overview:lang(.*)',
      //   component: () => import('../views/ComponentOverview.vue'),
      // },
      ...demoRoutes,
    ],
  },
  {
    path: '/hello-world',
    meta: { title: 'Hello World' },
    component: () => import('../views/HelloWorld.vue')
  },
  {
    path: '/docs',
    component: Layout,
    children: [
      {
        path: 'vue/introduce',
        meta: { title: 'Ant Design of Vue', category: 'docs' },
        component: () => import('../vueDocs/introduce.zh-CN.md')
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  fallback: false,
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'auto' };
    }
  },
});
