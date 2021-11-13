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
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
        </ul>
    </div> 
</template>

<script>
    import NavBar from '../../../common/NavBar/NarBar.vue'
    import HomeSwiper from './childComps/HomeSwiper.vue'
    import RecommendView from './childComps/RecommendView.vue'
    import FeatureView from './childComps/FeatureView.vue'

    import { getHomeMultdata } from '../../../../network/home.js'
    export default {
        name: 'Home',
        data() {
            return {
                banner: null,
                dKeyword: null,
                keywords: null,
                recommend: null
            }
        },
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView
        },
        created() {
            getHomeMultdata()
            .then(value => {
                for(let k in value.data) {
                    this[k] = value.data[k].list
                }
            })
        },
        methods: {
            
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