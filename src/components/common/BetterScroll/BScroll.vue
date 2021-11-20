<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Pulldown from '@better-scroll/pull-down'
    export default {
        name: 'BScroll',
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            BScroll.use(Pulldown)
            let BS = new BScroll(this.$refs.wrapper,{
                click: true,
                observeDOM: true,
                pullUpLoad: true,
                pullDownRefresh: true
            })
            this.scroll = BS
            BS.on('pullingUp',()=> {
                this.data.getHomegoods(this.data.type,this.data.goods[this.data.type].page)
                BS.finishPullUp()
            })
        },
        props: {
            data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            scrollTo(x,y,time=300) {
                this.scroll.scrollTo(x,y,time)
            }
        }
    }
</script>

<style scoped>
.wrapper {
    height: calc(100% - 93px);
}
</style>