import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/demo/demo.vue'
import Triangle from '@/components/demo/triangle/Triangle.vue'
import GreenSquare from '@/components/demo/greenSquare/GreenSquare.vue'
import Document from '@/components/document/Document.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/demo',
            name: 'Demo',
            component: Demo,
        },
        {
            path: '/triangle',
            name: 'Triangle',
            component: Triangle,
        },
        {
            path: '/greensquare',
            name: 'GreenSquare',
            component: GreenSquare,
        },
        {
            path: '/doc/:number',
            name: 'Document',
            component: Document,
            props: true,
        },
        {
            path: '/three',
            name: 'three',
            beforeEnter() {
                window.open('https://threejs.org', "_blank");
            }
        }
    ]    
})
