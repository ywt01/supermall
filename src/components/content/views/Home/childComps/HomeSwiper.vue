<template>
    <swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="SwiperImgLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from '../../../../common/swiper/index.js'
    export default {
        name: 'HomeSwiper',
        components:{
            Swiper,
            SwiperItem
        },
        data() {
            return {
                flag: false
            }
        },
        props: {
            banner:{
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods:{
            SwiperImgLoad() {
                this.$emit('SwiperImgLoad')
            }
        }
    }
</script>

<style scoped>

</style>