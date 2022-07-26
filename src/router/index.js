
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import { h, resolveComponent } from "vue";


export const leftroutes = [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ "views/Home/Home.vue"),
        meta: {
            icon: 'home',
            title: '系统首页'
        }
    },
    {
        path: '/personnel',
        name: 'personnel',
        component: () => import(/* webpackChunkName: "personnel" */ "views/PersonnelTable/PersonnelTable.vue"),
        meta: {
            icon: 'table',
            title: '人员表格'
        }
    },
    {
        path: '/message',
        name: 'message',
        component: () => import(/* webpackChunkName: "message" */ "views/Message/Message.vue"),
        meta: {
            icon: 'message',
            title: '消息中心'
        }
    },
    {
        path: '/relatedTools',
        name: 'relatedTools',
        component: { render: () => h(resolveComponent("router-view")) },
        meta: {
            icon: 'tools',
            title: '相关工具'
        },
        children: [
            {
                path: 'magnifier',
                name: 'magnifier',
                component: () => import(/* webpackChunkName: "magnifier" */ "views/relatedTools/Magnifier.vue"),
                meta: {
                    title: '放大镜'
                },
            },
            {
                path: 'sliderVerify',
                name: 'sliderVerify',
                component: () => import(/* webpackChunkName: "uploadFile" */ "views/relatedTools/SliderVerify.vue"),
                meta: {
                    title: '图片验证'
                }
            },
            {
                path: 'editor',
                name: 'editor',
                component: { render: () => h(resolveComponent("router-view")) },
                meta: {
                    title: '编辑器'
                },
                children: [
                    {
                        path: 'markdown',
                        name: 'markdown',
                        component: () => import(/* webpackChunkName: "markdown" */ "views/relatedTools/Editor/MarkDown.vue"),
                        meta: {
                            title: 'markdown编辑器'
                        },
                    },
                    {
                        path: 'richtext',
                        name: 'richtext',
                        component: () => import(/* webpackChunkName: "richtext" */ "views/relatedTools/Editor/RichText.vue"),
                        meta: {
                            title: '富文本编辑器'
                        },
                    }
                ]
            }
        ]
    },
    {
        path: '/map',
        name: 'map',
        component: () => import(/* webpackChunkName: "map" */ "views/Map/Map.vue"),
        meta: {
            icon: 'map',
            title: '地图'
        }
    },
    {
        path: '/element',
        name: 'element',
        component: () => import(/* webpackChunkName: "chart" */ "views/ElementPlus/ElementPlus.vue"),
        meta: {
            icon: 'element',
            title: '组件相关'
        }
    },
    {
        path: '/world',
        name: 'world',
        component: () => import(/* webpackChunkName: "world" */ "views/World/World.vue"),
        meta: {
            icon: 'international',
            title: '国际化'
        }
    },
    {
        path: '/errorHandle',
        name: 'errorHandle',
        component: { render: () => h(resolveComponent("router-view")) },
        meta: {
            icon: 'error',
            title: '错误处理'
        },
        children: [
            {
                path: '404',
                name: '404',
                component: () => import(/* webpackChunkName: "404" */ "views/Error/404.vue"),
                meta: {
                    title: '404页面'
                },
            },
            {
                path: 'errorLog',
                name: 'errorLog',
                component: () => import(/* webpackChunkName: "errorLog" */ "views/Error/errorLog.vue"),
                meta: {
                    title: '错误日志模拟'
                },
            },
        ]
    },
]





export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ "views/Login/Login.vue")
        },
        ...leftroutes,
        {
            path: "/:catchAll(.*)",
            component: () => import(/* webpackChunkName: "errorHandle" */ "views/Error/404.vue")
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = `${to.meta.title}-my-admin`
    else document.title = "欢迎来到因为天气好的后台管理系统";
    const role = localStorage.getItem('username')
    if (!role && to.path !== '/') next('/')
    else next()
});