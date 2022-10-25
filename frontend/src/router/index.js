import {createRouter, createWebHashHistory} from 'vue-router'
import Entry from "@/views/Entry";

const routes = [
    {
        path: '/',
        name: 'Entry',
        component: Entry
    },
    {
        path: '/editor',
        name: 'editor',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => {
            import(/* webpackChunkName: "about" */ '../views/NoteEditor.vue')
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
