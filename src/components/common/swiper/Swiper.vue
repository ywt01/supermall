<template>
    <div class="Swiper">
        <div class="box" @touchstart="move($event)">
            <slot></slot>
        </div>
        <ol>
        </ol>
    </div>
</template>

<script>
    import SwiperItem from './SwiperItem.vue'
    export default {
        name: 'Swiper',
        data() {
            return {
                liCount: null,
                flag: true,
                count: 0,
                timer: null
            }
        },
        methods: {
            anima(index,target) {
                // 动画效果
                let SwiperItem = document.querySelector('.SwiperItem')
                let box = document.querySelector('.box')
                let li = document.querySelector('ol').querySelectorAll('li');
                if(!target) {
                    target = box
                }
                this.count = parseInt(index);
                target.style.left = - (parseInt(index) + 1) * SwiperItem.offsetWidth + 'px';
                for(var i = 0;i < li.length;i++) {
                    li[i].style.backgroundColor = '#fff';
                }
                if(index === li.length) {
                    li[0].style.backgroundColor = 'blue';
                } else if(index === -1){
                    li[li.length - 1].style.backgroundColor = 'blue';
                } else {
                    li[index].style.backgroundColor = 'blue';
                }
            },
            btn(e) {
                let index = e.target.getAttribute('index')
                let box = document.querySelector('.box')
                box.style.transition = 'all .5s'
                this.anima(index,box)
                clearInterval(this.timer)
                this.timer = null;
                this.timer = this.time()
            },
            prev() {
                // 上一张图片
                let box = document.querySelector('.box')
                let SwiperItem = document.querySelector('.SwiperItem')
                let li = document.querySelector('ol').querySelectorAll('li');
                if(this.count === -1) {
                    box.style.transition = 'none'
                    this.count = li.length - 1
                    box.style.left = - (parseInt(this.count + 1)) * SwiperItem.offsetWidth + 'px'
                    this.anima(this.count)
                }
                box.style.transition = 'all .5s'
                this.anima(this.count-1)
            },
            next() {
                // 下一张图片
                let box = document.querySelector('.box')
                let SwiperItem = document.querySelector('.SwiperItem')
                let li = document.querySelector('ol').querySelectorAll('li');
                if(this.count === li.length) {
                    box.style.transition = 'none'
                    box.style.left = - SwiperItem.offsetWidth + 'px'
                    this.count = 0
                    this.anima(this.count)
                }
                box.style.transition = 'all .5s'
                this.anima(this.count+1)
            },
            move(e) {
                clearInterval(this.timer)
                this.timer = null;
                let box = document.querySelector('.box')
                let that = this
                let startX = e.changedTouches[0].pageX,
                    endX = 0,
                    startOffsetLeft = box.offsetLeft,
                    moveX = 0;
                    // 手动滑动图片
                box.addEventListener('touchmove',function(e) {
                    endX = e.changedTouches[0].pageX
                    moveX = endX - startX
                    box.style.left = moveX + startOffsetLeft + 'px'
                })
                function fn(e) {
                    if(Math.abs(moveX) > 50) {
                        if(moveX < 0) {
                            that.next()
                        } else {
                            that.prev()
                        }
                    } else {
                        that.anima(that.count)
                    }
                    that.timer = that.time()
                    box.removeEventListener('touchend',fn)
                }
                box.addEventListener('touchend',fn)
            },
            time() {
                return setInterval(() => {
                    this.next()
                },2000)
            },
        },
        mounted() {
            // 创建小圆点
            let ol = document.querySelector('ol')
            ol.innerHTML = ''
            let box = document.querySelector('.box')
            for(let i = 0;i < box.children.length;i++) {
                let li = document.createElement('li')
                li.setAttribute('index',i)
                li.addEventListener('click',this.btn)
                ol.appendChild(li)
            }
            // 克隆第一张图片和最后一张图片，无缝滚动
            let firstImg = box.children[0].cloneNode(true)
            let lastImg = box.children[box.children.length - 1].cloneNode(true)
            box.appendChild(firstImg)
            box.insertBefore(lastImg,box.firstChild)
            // 开启定时器滚动图片
            this.timer = this.time();
        },
        beforeUnmount() {
            clearInterval(this.timer)
            this.timer = null;
        },
        components:{
            SwiperItem
        },
    }
</script>

<style scoped>
@import url(./Swiper.css);
h4 {
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>