<template>
    <input @input="updateTerm"  v-model="searchTerm"  type="text" placeholder="Añadir" class="form-control w-8/12" />
</template>

<script setup lang="ts">
const searchTerm = ref<string>('')
const useVideos = useVideoModule()

 const updateTerm = ()=>{
    useVideos.searchTerm.value =searchTerm.value
 }
</script>

<style scoped>
.form-control {
    padding: 19px 23px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px 0px 0px 5px;
}
</style>