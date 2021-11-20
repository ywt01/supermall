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
        mounted() {
            let BS = new BScroll(this.$refs.wrapper,{
                click: true,
                observeDOM: true
            })
            this.scroll = BS
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