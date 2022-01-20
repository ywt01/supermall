<template>
    <div class="home">
        <nav-bar class="nav-bar">
            <template #left v-cloak></template>
            <template #center>购物车</template>
            <template #right></template>
        </nav-bar>
        <tab-contro
        class="tabControFiexd" 
        v-show="tabControIsShow" 
        ref="tabContro1" 
        :title="['综合','销量','上新']" 
        :sorts="sorts" 
        @tabContro="tabContro"/>
        <scroll ref="scroll"
        class="scroll"
        @upload='upload' 
        @block='block'
        :probeType='3'
        :pullUpLoad='true'>
            <home-swiper ref="homeSwiper" :banner="banner" class="home-swiper" @swiperImgLoad='swiperImgLoad' />
            <recommend-view />
            <feature-view @featur='featur' />
            <tab-contro v-show="!tabControIsShow" ref="tabContro2" :title="['综合','销量','上新']" :sorts="sorts" @tabContro="tabContro"/>
            <goods-list :goods="goods" :type="type"/>
        </scroll>
        <back-to @click.native="btnClick" v-show="isShow"/> 
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
    import Scroll from '../../../common/BetterScroll/BScroll.vue'
    // 业务组件
    import GoodsList from '../../goods/GoodsList.vue'
    import BackTo from '../../BackTo/BackTo.vue'
//  数据，功能组件
    import { getHomegoods } from '../../../../network/home.js'
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
                    'pop':{page:0,list:[],Top:-670},
                    'sell':{page:0,list:[],Top:-670},
                    'new':{page:0,list:[],Top:-670}
                },
                type:'pop',
                isShow: false,
                tabControOffsetTop: 0,
                tabControIsShow:false
            }
        },
        components: {
            // 公共组件
            NavBar,
            TabContro,
            Scroll,
            // 子组件
            HomeSwiper,
            RecommendView,
            FeatureView,
            // 业务组件
            GoodsList,
            BackTo,

        },
        created() {
            this.getHomegoods('pop',0)
            this.getHomegoods('sell',0)
            this.getHomegoods('new',0)
            // 原生js判断是否到底部
            // let that = this
            // document.addEventListener('scroll',function(e) {
            //     // pc端和 移动端 兼容
            //     let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
            //     let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            //     let scrollTop = document.documentElement.scrollTop|| document.body.scrollTop
            //     if(scrollHeight - clientHeight <= scrollTop) {
            //         that.getHomegoods(that.type,that.goods[that.type].page)
            //     }
            // })
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
            tabContro(sort,index) {
                this.goods[this.type].Top = this.$refs.scroll.scroll.y
                this.type = sort
                this.$refs.scroll.scrollTo(0,this.goods[this.type].Top)
                this.$refs.tabContro1.curIndex = index
                this.$refs.tabContro2.curIndex = index
            },
            btnClick() {
                this.$refs.scroll.scrollTo(0,0,1000)
            },
            // 返回顶部的 显示与隐藏
            block(position) {
                this.isShow = -position.y > 1000
                this.tabControIsShow = -position.y > this.tabControOffsetTop - 40
            },
            // 下拉请求数据
            upload() {
                this.getHomegoods(this.type,this.goods[this.type].page)
            },
            swiperImgLoad() {
                this.tabControOffsetTop = this.$refs.tabContro2.$el.offsetTop;
            },
            featur() {
                this.tabControOffsetTop = this.$refs.tabContro2.$el.offsetTop;
            }
        },
        computed: {
            
        },
    }
</script>

<style scoped>
.home {
    width: 100%;
    height: 100vh;
    max-width: 500px;
    margin: 0 auto;
}
.nav-bar {
    position: fixed;
    top: 0;
    min-width: 375px;
    max-width: 500px;
    z-index: 9;
}
.tabControFiexd {
    position: sticky;
    margin-top: 0;
    top: 44px;
}
.scroll {
    margin-top: 44px;
}
</style>