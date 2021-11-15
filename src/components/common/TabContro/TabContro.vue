<template>
    <div :title="title" class="tabContro">
        <div 
        v-for="(item,index) in title" 
        :key="index" 
        :class="{active: index === curIndex}" 
        @click="curBtn(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabContro',
        data() {
            return {
                curIndex: 0
            }
        },
        methods:{
            curBtn(index) {
                this.curIndex = index
                this.$emit('tabContro',this.sorts[index].sort)
            }
        },
        props:{
          title:{
            type:Array,
            default() {
              return []
            }
          },
          sorts: {
            type: Array,
            defualt() {
                return []
            }
          }
        }
    }
</script>

<style scoped>
.tabContro {
    position: sticky;
    top: 44px;
    display: flex;
    flex: 1;
    justify-content: space-around;
    margin-top: 5px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 9;
}
.tabContro span {
    display: inline-block;
    padding: 3px 8px;
    font-size: 16px;
} 
.active {
    border-bottom: 2px solid var(--color-high-text);
    color: var(--color-high-text);
}
</style>