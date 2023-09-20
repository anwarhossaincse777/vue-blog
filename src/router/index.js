import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/components/Home.vue";
import Contact from "@/components/Contact.vue";
import Posts from "@/components/Posts.vue";
import Post from "@/components/Post.vue";
import Sidebar from "@/components/Sidebar.vue";
import about from "@/components/About.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        LeftSideBar: Sidebar
      }

    },
    {
      path: '/about',
      components: {
        default: about,
        LeftSideBar: Sidebar
      }
    },

    {
      path: '/contact',
      components: {
        default: Contact,
        LeftSideBar: Sidebar
      }
    }, {
      path: '/posts',
      components: {
        default: Posts,
        LeftSideBar: Sidebar
      }
    },

    {
      path: '/posts/:id', components: {
        default: Post,
        LeftSideBar: Sidebar
      },
      name: 'post',
    }

  ]
})

export default router
