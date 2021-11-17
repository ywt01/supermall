<template>
    <div>
        <nav-bar class="nav-bar">
            <template #left v-cloak></template>
            <template #center>购物车</template>
            <template #right></template>
        </nav-bar>
        <home-swiper :banner="banner" class="home-swiper"/>
        <recommend-view />
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
                banner: [{
                    image:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
                    link:'https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119'
                },
                {
                    image:"https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
                    link:'https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119'
                },
                {
                    image:"https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
                    link:'https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119'
                },
                {
                    image:"https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
                    link:'https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119'
                }],
                dKeyword: null,
                keywords: null,
                sorts: null,
                goods:{
                    'pop':{page:0,list:[],Top:0},
                    'sell':{page:0,list:[],Top:640},
                    'new':{page:0,list:[],Top:640}
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
            this.getHomegoods('pop',0)
            this.getHomegoods('sell',0)
            this.getHomegoods('new',0)
            let that = this
            document.addEventListener('scroll',function(e) {
                let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
                let scrollTop = document.documentElement.scrollTop|| document.body.scrollTop
                if(scrollHeight - clientHeight <= scrollTop) {
                    that.getHomegoods(that.type,that.goods[that.type].page)
                }
            })
        },
        methods: {
            getHomegoods(type,page) {
              page+=1;
              getHomegoods(type,page)
              .then(value => {
                this.sorts = value.result.filter.list
                this.goods[type].list.push(...value.result.wall.list)
                this.goods[type].page = value.result.wall.page
              })
            },
            tabContro(sort) {
                this.goods[this.type].Top = window.scrollY
                this.type = sort
                window.scroll(0,this.goods[this.type].Top)
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