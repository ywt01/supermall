<template>
    <div class="recommends">
        <div v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img v-lazy="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RecommendView',
        data() {
            return {
                recommend : [
                {
                image:"https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
                link:"http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
                title:"十点抢券"
            },
                {
                image:"https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
                link:"https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
                title:"好物特卖"

            },
                {
                image:"https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
                link:"http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
                title:"内购福利"
            },
                {
                image:"https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
                link:"http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
                title:"初秋上新"
            },
            ]
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