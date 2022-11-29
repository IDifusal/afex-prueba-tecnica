<script setup lang="ts">
const useVideos = useVideoModule()
const isModalVisible = ref(true)
const modalWatch = ref(false)
const inputText = ref('')
const closeModal = () => {
    isModalVisible.value = false
    modalWatch.value = false
}
onMounted(() =>
    useVideos.getVideoList(),
)

const deleteVideo =()=>{
    console.log('deleting')
}
const addVideo = () => {
    useVideos.searchVideoDetail(useVideos.searchTerm.value)
}
</script>
<template>
    <SharedModal v-if="useVideos.deleteModal.value" @closeModal='closeModal'>
        <h3 class="mb-[45px]">¿Seguro que quieres eliminar este video?</h3>
        <div class="buttons gap-[29px] flex place-content-end">
            <SharedButton @action='closeModal' color="white" title="Cancelar" />
            <SharedButton @action='deleteVideo' title="Eliminar" />
        </div>
    </SharedModal>
    <SharedModal v-if="useVideos.watchModal.value" @closeModal='closeModal'>
        <div v-if="useVideos.active.value" class="watch-content flex">
            <div class="w-1/2">
                <iframe height="308"  class="w-full mb-4"
                    :src="`https://www.youtube.com/embed/${useVideos.active.value.items[0].id.videoId}`" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="w-1/2 p-5">
                <h3 class="text-2xl font-medium">{{useVideos.active.value.items[0].snippet.title}}</h3>
                <p class="text-xl ">{{useVideos.active.value.items[0].snippet.description}}</p>
            </div>
        </div>
    </SharedModal>
    <div class="font-medium pt-[120px]">
        <div class="topbar flex flex-col container m-auto">
            <h2 class="text-[28px]">Añadir nuevo video</h2>
            {{useVideos.active.value}}
        <form @submit.prevent="addVideo">
            <SharedInputControl/>
            <SharedButton title='Añadir' @action='addVideo' />
        </form>
        </div>
        <VideoList :items="useVideos.videoList" />
    </div>
</template>


<style scoped>

</style>