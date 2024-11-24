<script setup>
import { rating } from '@/stores/configurations';
import { useCounterStore } from '@/stores/counter';

const conterStore=useCounterStore()
</script>

<template>
    <form>
        <section v-for="question of rating">
            <span>{{question.name}}</span>
            <select v-model="conterStore.thisLane[question.name]">
                <option v-for="alternative in question.choises" :value="alternative">{{ alternative.title }}</option>
            </select>
        </section>
        <button @click.prevent="conterStore.calculate()">Errechnen</button>
    </form>
    Score:
    <pre>{{ conterStore.ratingValue }}</pre>
</template>