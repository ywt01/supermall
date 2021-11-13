<template>
    <div class="tab-bar-item" @click="btnClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name:'TabBarItem',
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data() {
            return {
                
            }
        },
        computed:{
            isActive() {
                return this.$route.path.includes(this.path);
            },
            activeStyle () {
                return this.isActive ? {color:this.activeColor}:{}
            }
        },
        methods:{
            btnClick() {
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style>
.tab-bar-item {
    flex:1;
    /* tab栏大多都是49px高 */
    height: 49px;
    /* line-height: 49px; */
    text-align: center;
    font-size: 14px;
  }
 .tab-bar-item div img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 4px;
}
</style>