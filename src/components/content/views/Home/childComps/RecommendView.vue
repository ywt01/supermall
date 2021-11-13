<template>
    <div class="recommends">
        <div v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RecommendView',
        props: {
            recommend : {
                type: Array,
                defualt() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.recommends {
    display: flex;
    flex: 1;
    justify-content: space-between;
    width: 100%;
    padding: 15px 5px 25px;
    text-align: center;
    border-bottom: 8px solid #eee;
}
.recommends img {
    width: 80px;
    height: 80px;
}
</style>