<template>
    <label for="todo-input">
        <span>Enter todo:</span>
        <input v-bind:value="input" v-on:input="input = $event.target.value" v-model="input" type="text" id="todo-input">
        <button @click="handleAddTask" type="submit">Submit</button>
    </label>
</template>

<script>
import { ref } from 'vue';

import { addTask } from '../store';
import { status } from '../constants';

export default {
    setup() {
        const input = ref('');
        const handleAddTask = () => {
            addTask({ name: input.value, status: status.ongoing })
            input.value = '';
        };

        return {
            input,
            handleAddTask
        }
    },
}
</script>

<style lang="scss" scoped>

</style>