<template>
  <div class="menubar">
    <div class="btn-group" role="group" aria-label="Menu bar">
      <router-link to="/board" :class="buttonClass('/board')">Board</router-link>
      <router-link to="/new" :class="buttonClass('/new')">New Task</router-link>
      <router-link to="/tasks" :class="buttonClass('/tasks')">Manage Tasks</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  methods: {
    buttonClass (path) {
      return {
        btn: true,
        'btn-primary': this.$route.path === path,
        'btn-secondary': this.$route.path !== path,
        'btn-third': this.$route.path !== path
      }
    }
  }
}
</script>

<style>
  .menubar {
    margin-bottom: 16px;
  }
</style>
