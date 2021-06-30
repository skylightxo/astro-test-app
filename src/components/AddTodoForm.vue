<template>
    <label for="todo-input">
        <span>Enter todo:</span>
        <input v-bind:value="input" v-on:input="input = $event.target.value" v-model="input" type="text" id="todo-input">
        <button @click="handleAddTask" type="submit">Submit</button>
        <p>Input: {{input}}</p>
    </label>
</template>

<script>
import { ref, watch } from 'vue';

import { addTask } from '../store';
import { status } from '../constants';

export default {
    setup() {
        const input = ref('');
        const handleAddTask = () => addTask({ name: input, status: status.ongoing });

        watch(input, (oldValue, newValue) => {
            console.log('Old: ', oldValue, ' new: ', newValue);
        })
        
        return {
            input,
            handleAddTask
        }
    },
}
</script>

<style lang="scss" scoped>

</style>