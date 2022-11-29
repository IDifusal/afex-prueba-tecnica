<script setup lang="ts">
interface Props {
    title: string,
    color?: string
}
const props = withDefaults(defineProps<Props>(), {
    color: 'blue'
})
</script>

<template>
    <button @click.prevent="$emit('action')" :class="props.color" class="btn btn-video text-base bg-white font-bold"
        type="submit">{{ props.title }}</button>
</template>


<style lang="scss" scoped>
.btn-video {
    color: #ffffff;
    padding: 17.5px 98px;
    border-radius: 0px 10px 10px 0px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14);
    border-radius: 10px;
    border: 1px solid #136AE4;
    width: 253px;
    height: 57px;
    &.blue {
        background: #136AE4;
    }

    &.white {
        background: #ffffff;
        color: #136AE4;
    }
    &:hover{
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 4px rgba(0, 0, 0, 0.32), 0px 2px 2px rgba(0, 0, 0, 0.14);
    }
}
</style>