<template>
    <div :title="title" class="tabContro">
        <div v-for="(item,index) in title" :key="index">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabContro',
        props:{
          title:{
            type:Array,
            default() {
              return []
            }
          }
        }
    }
</script>

<style scoped>
.tabContro {
    display: flex;
    flex: 1;
    justify-content: space-around;
    margin-top: 5px;
}
.tabContro span {
    display: inline-block;
    padding: 3px 8px;
    border-bottom: 2px solid transparent;
    font-size: 14px;
} 
.tabContro div:first-child span {
    border-bottom: 2px solid red;
}
</style>