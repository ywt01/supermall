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
                this.flag = false
                let SwiperItem = document.querySelector('.SwiperItem')
                let li = document.querySelector('ol').querySelectorAll('li');
                if(index === li.length) {
                    target.style.transition = 'none'
                    target.style.left = 0
                    index = 0
                }
                if(index === -1) {
                    target.style.transition = 'none'
                    index = li.length - 1
                    target.style.left = - (index + 1) * SwiperItem.offsetWidth + 'px'
                }
                this.count = parseInt(index);
                target.style.transition = 'all .5s'
                target.style.left = - (index + 1) * SwiperItem.offsetWidth + 'px';
                for(var i = 0;i < li.length;i++) {
                    li[i].style.backgroundColor = '#fff';
                }
                li[index].style.backgroundColor = 'blue';
                this.flag = true;
            },
            btn(e) {
                let index = e.target.getAttribute('index')
                if(this.flag) {
                    let box = document.querySelector('.box')
                    this.anima(index,box)
                }
            },
            move(e) {
                let box = document.querySelector('.box')
                let startX = e.changedTouches[0].pageX;
                let offsetInit = box.offsetLeft
                let that = this
                let moveX = 0;
                box.addEventListener('touchmove',function(e) {
                    let endX = e.changedTouches[0].pageX
                    moveX = endX - startX
                    box.style.left = offsetInit + moveX + 'px'
                })
                box.addEventListener('touchend',fn) 
                function fn() {
                    if(Math.abs(moveX) > 100) {
                        if(moveX > 0) {
                            that.anima(that.count-1,box);
                        } else {
                            that.anima(that.count+1,box);
                        }
                    } else {
                        that.anima(that.count,box);
                    }
                    box.removeEventListener('touchend',fn)
                }
            },
            time() {
                return setInterval(() => {
                  let box = document.querySelector('.box')
                  let i = this.count + 1
                  this.anima(i,box)
                },2000)
            },
        },
        mounted() {
            let box = document.querySelector('.box')
            let count = box.children.length
            let ol = document.querySelector('ol')
            let _this = this;
            for(let i = 0;i < count;i++) {
                var li = document.createElement('li')
                li.setAttribute('index',i)
                li.addEventListener('click',function(e){
                    _this.btn(e)
                }) 
                ol.append(li)
            }
            let imgClongFirst = box.children[0].cloneNode(true)
            let imgClongLast = box.children[box.children.length - 1].cloneNode(true)
            box.appendChild(imgClongFirst)
            box.insertBefore(imgClongLast,box.children[0])
            box.addEventListener('touchstart',function() {
                clearInterval(_this.timer)
                _this.timer = null;
            })         
            box.addEventListener('touchend',function() {
                _this.timer = _this.time()
            })      
            this.timer = this.time()
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