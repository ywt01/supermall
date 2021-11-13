<template>
    <div class="NarBar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name:'NavBar'
    }
</script>

<style scoped>
.NarBar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: var(--color-tint);
    color: #fff;
}
.left,
.right {
    width: 60px;
}
.center {
    flex: 1;
}
</style>