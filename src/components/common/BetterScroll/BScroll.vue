<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'BScroll',
        data() {
            return {
                scroll: null
            }
        },
        props: {
            probeType:{
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            let BS = new BScroll(this.$refs.wrapper,{
                probeType: this.probeType,
                click: true,
                scrollY: true,
                observeDOM: true,
                pullUpLoad: this.pullUpLoad,
                disableMouse: false,// 启用鼠标拖动
                disableTouch: false,// 启用手指触摸 
            })
            this.scroll = BS
            let timer
            // 已经到底，通知父组件 请求新数据
            BS.on('pullingUp',()=> {
                clearTimeout(timer)
                timer = setTimeout(()=>{
                    this.$emit('upload')
                },1000)
                BS.finishPullUp()
            })
            BS.on('scroll',(position)=>{
                this.$emit('block',position)
            })
        },
        methods: {
            scrollTo(x,y,time=300) {
                this.scroll.scrollTo(x,y,time)
            },
        }
    }
</script>

<style scoped>
.wrapper {
    height: calc(100% - 93px);
    overflow: hidden;
}

</style>