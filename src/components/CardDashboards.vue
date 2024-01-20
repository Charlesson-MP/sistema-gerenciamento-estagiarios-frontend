<script setup>
import { defineProps } from 'vue'

const props = defineProps(['titulo', 'conteudo'])
</script>

<template>
    <div class="card-container" style="background-color: {{ props.color }};">
        <p class="text-h5">{{ props.titulo }}</p>
        <p>{{ props.conteudo }}</p>
    </div>
</template>

<style scoped>
.card-container {
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    color: white;
    font-weight: bolder;
}
</style>
