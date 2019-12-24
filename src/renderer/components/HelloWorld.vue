<template>
    <div>
        <h1>{{ msg }}</h1>
        We are using Node.js {{ nodeVersion }}, Chromium {{ chromeVersion }}, and Electron {{ electronVersion }}.;
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
        @Prop() msg!: string;
        nodeVersion = process.versions.node;
        chromeVersion = process.versions.chrome;
        electronVersion = process.versions.electron;
    }
</script>

<style lang="scss" scoped>
</style>
