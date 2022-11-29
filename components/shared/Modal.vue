<script setup lang="ts">
const useVideos = useVideoModule()
const closeModal = ()=>{
    useVideos.deleteModal.value = false
    useVideos.watchModal.value = false
}
</script>
<template>
    <div class="modal w-screen h-screen">
        <div class="modal-content relative">
            <div  @click="closeModal" class="cursor-pointer modal-close absolute">
                <img src="~/assets/img/close.svg" alt="">
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    background: rgba(2, 2, 2, 0.6);
    position: fixed;
    z-index: 9;
    display: flex;
    place-items: center;
    justify-content: center;

    &-content {
        width: 900px;
        background: #FFFFFF;
        height: fit-content;
        padding: 58px 60px 29px 90px;
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
        border-radius: 15px;
    }

    &-close {
        top: 50px;
        right: 60px;
    }
}
</style>