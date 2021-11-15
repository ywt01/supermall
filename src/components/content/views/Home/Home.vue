<template>
    <div>
        <nav-bar class="nav-bar">
            <template #left v-cloak></template>
            <template #center>购物车</template>
            <template #right></template>
        </nav-bar>
        <home-swiper :banner="banner" class="home-swiper"/>
        <recommend-view :recommend="recommend" />
        <feature-view />
        <tab-contro :title="['综合','销量','上新']" :sorts="sorts" @tabContro="tabContro"/>
        <goods-list :goods="goods" :type="type"/> 
    </div> 
</template>

<script>
//  子组件
    import HomeSwiper from './childComps/HomeSwiper.vue'
    import RecommendView from './childComps/RecommendView.vue'
    import FeatureView from './childComps/FeatureView.vue'
//  公共组件
    import NavBar from '../../../common/NavBar/NarBar.vue'
    import TabContro from '../../../common/TabContro/TabContro.vue'
    import GoodsList from '../../goods/GoodsList.vue'
//  数据，功能组件
    import { getHomeMultdata,getHomegoods } from '../../../../network/home.js'
    export default {
        name: 'Home',
        data() {
            return {
                banner: null,
                dKeyword: null,
                keywords: null,
                recommend: null,
                sorts: null,
                goods:{
                    'pop':{page:0,list:[]},
                    'sell':{page:0,list:[]},
                    'new':{page:0,list:[]}
                },
                type:'pop'
            }
        },
        components: {
            // 公共组件
            NavBar,
            // 子组件
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabContro,
            GoodsList
        },
        created() {
            this.getHomeMultdata()
            this.getHomegoods('pop',0)
            this.getHomegoods('sell',0)
            this.getHomegoods('new',0)
        },
        methods: {
            getHomeMultdata() {
              getHomeMultdata()
              .then(value => {
                for(let k in value.data) {
                    this[k] = value.data[k].list
                }
              })
            },
            getHomegoods(type,page) {
              page+=1;
              getHomegoods(type,page)
              .then(value => {
                this.sorts = value.result.filter.list
                this.goods[type].list.push(...value.result.wall.list)
                this.goods[type].page = value.result.wall.page
                console.log(value.result);
              })
            },
            tabContro(sort) {
                this.type = sort
            }
        },
        computed: {
            
        }
    }
</script>

<style scoped>
.nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
}
.home-swiper {
    margin-top: 44px;
}
</style>