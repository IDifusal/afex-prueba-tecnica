<script setup lang="ts">
const props = defineProps<{ items: any }>()
</script>
<template>
    <div v-if="props.items.length > 0"> Loading ....</div>
    <div v-else class="flex  list-cards m-auto">
        <VideoCard v-for="item in props.items._value" :item="item">
        </VideoCard>
    </div>
</template>



<style scoped>
.list-cards {
    width: 929px;
    height: 100vh;
    min-width: 0;
    flex-wrap: wrap;
    margin-top: 134px;
    place-content:flex-start
}
</style>