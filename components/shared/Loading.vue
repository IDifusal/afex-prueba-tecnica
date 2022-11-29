<template>
    <div class="loader">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="">
    </div>
</template>

<style lang="scss" scoped>
.loader {
    background-color: #FFFFFF;
    opacity: .8;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    z-index: 100000;
}
</style>