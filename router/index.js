import Vue from 'vue';
import VueRoter from 'vue-router';

Vue.use(VueRoter);

// import tab from '../src/components/tab.vue';
import home from '../src/page/home.vue';
import list from '../src/page/list/list.vue';
import article from '../src/page/article/article.vue';
import addArticle from '../src/page/addArticle/addArticle.vue';
import configure from '../src/page/configure/configure.vue';
 
export default new VueRoter({
    // mode: 'history',
    routes: [
        //设置根目录时候渲染谁，即默认情况下渲染哪个组件
        // {path:'/',component:zy},
        //路由重定向
        {
            path:'/',
            redirect:'/home/list'
        },
        {
            path:'/home',
            component:home,
            children:[{
                path:'list',
                component:list
            }]
        },
        {
            path:'/article',
            component:article
        },
        {
            path:'/addArticle',
            component:addArticle
        },
        {
            path:'/configure',
            component:configure
        }
    ]
})