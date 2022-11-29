<script setup lang="ts">
const props = defineProps<{ item: any }>()

const useVideos = useVideoModule()
const setVideo = (id: any) => {
    useVideos.setActiveVideo(id)
    useVideos.watchModal.value = true
}
const deleteModal = (id: any) => {
    useVideos.setActiveVideo(id)
    useVideos.deleteModal.value = true
}
</script>

<template>
    <div class="relative item cursor-pointer">
        <div @click="setVideo(props.item)" class="">
            <img :src="props.item.items[0].snippet.thumbnails.high.url" alt="">
        </div>
        <div @click="deleteModal(props.item)" class="item-delete absolute">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="2" fill="#F5F5F5" />
                    <path
                        d="M2 24C1.41667 24 0.9375 23.8125 0.5625 23.4375C0.1875 23.0625 0 22.5833 0 22V2C0 1.41667 0.1875 0.9375 0.5625 0.5625C0.9375 0.1875 1.41667 0 2 0H22C22.5833 0 23.0625 0.1875 23.4375 0.5625C23.8125 0.9375 24 1.41667 24 2V22C24 22.5833 23.8125 23.0625 23.4375 23.4375C23.0625 23.8125 22.5833 24 22 24H2ZM12 14L16 18L18 16L14 12L18 8L16 6L12 10L8 6L6 8L10 12L6 16L8 18L12 14Z"
                        fill="black" />
                </svg>
            </div>        
    </div>
</template>
<style lang="scss" scoped>
.item {
    width: 263px;
    height: 150px;
    margin: auto;
    margin-bottom: 70px !important;
    &-delete {
        top: 10px;
        right: 10px;
        z-index: 000;

        &:hover {
            transform: scale(1.1);
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
    }
}
</style>