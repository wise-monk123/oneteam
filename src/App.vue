<template>
  <div id="app">

    <div class="page-header">
      <h1>One Team Board</h1>
    </div>
    <menu-bar></menu-bar>

    <router-view/>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
export default {
  name: 'app',
  components: {
    'menu-bar': MenuBar
  }
}
</script>

<style>
  .page-header h1 {
    font-weight: 300;
  }

  .card {
    margin-bottom: 10px;
  }

  .card:last-child {
    margin-bottom: 25px;
  }

  .card-block {
    padding: 15px;
  }
</style>
