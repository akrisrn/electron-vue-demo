<template>
  <div>
    <h1>{{ msg }}</h1>
    We are using Node.js {{ versions.node }}, Chromium {{ versions.chrome }}, and Electron {{ versions.electron }}.
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    private versions = process.versions;
  }
</script>

<style lang="scss" scoped>
</style>
