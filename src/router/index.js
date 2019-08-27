import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Triangle from '@/components/demo/triangle/Triangle.vue'
import Document from '@/components/document/Document.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/helloworld',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/triangle',
            name: 'Triangle',
            component: Triangle,
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
