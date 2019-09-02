import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Demo from '@/components/demo/demo.vue'
import Triangle from '@/components/demo/triangle/Triangle.vue'
import GreenCube from '@/components/demo/greenCube/GreenCube.vue'
import Kindred from '@/components/demo/lol/kindred/Kindred.vue'
import ThreeDimensionalText from '@/components/demo/text/ThreeDimensionalText.vue'
import Document from '@/components/document/Document.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
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
            path: '/greenCube',
            name: 'GreenCube',
            component: GreenCube,
        },
        {
            path: '/3DText',
            name: 'ThreeDimensionalText',
            component: ThreeDimensionalText,
        },
        {
            path: '/lol/kindred',
            name: 'Kindred',
            component: Kindred,
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
