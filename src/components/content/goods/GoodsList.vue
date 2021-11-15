<template>
    <div class="goodsList">
        <div v-for="(item,index) in goods[type].list" :key="index">
            <a :href="item.link" class="goodLink">
                <img :src="item.show.img" alt="">
                <p class="info">{{item.title}}</p>
                <section class="goodsInfo">
                    <span>{{item.price}}</span>
                    <i class="icon">{{item.cfav}}</i>
                </section>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GoodsList',
        props:{
            goods:{
                type: Object,
                default() {
                    return {}
                }
            },
            type:{
                type:String,
                default: 'pop'
            }
        }
    }
</script>

<style scoped>
.goodsList {
    display: flex;
    flex-flow: row wrap;
    margin-top: 8px;
}
.goodsList div {
    flex: 40%;
    margin: 5px 5px;
    box-shadow: 1px -1px 4px rgba(211, 210, 210, 0.9);
    border-radius: 20px;
    overflow: hidden;
}
.goodLink {
    display: flex;
    height: 340px;
    flex-direction: column;
    justify-content: space-between;
}
.goodsList div img {
    width: 100%;
}
.info {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-wrap: nowrap;
}
.goodsInfo {
   position: relative;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
.goodsInfo .icon::before {
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    right: 35px;
    top: -1px;
    background: url(../../../assets/img/home/xing.png);
    background-size: contain;
}
.goodsList div span {
    font-weight: 700;
    margin-left: 8px;
}
.goodsList div i {
    font-size: 12px;
    margin-right: 8px;
    font-style: normal;
}

</style>