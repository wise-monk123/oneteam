<template>
  <div class = "managetask-view">
      <table>
        <tr>
          <td width="200">Task ID</td>
          <td width="550">Description</td>
          <td width="200">Status</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="task in tasks" :key="task.id">
          <td>#T{{ task.itemId }}</td>
          <td>{{ task.text }}</td>
          <td>{{ task.status }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditTask', params: { id: task.itemId } }">Edit</router-link> |
            <a href="#" @click="deleteTask(task.itemId)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'tasks',
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    async getTasks () {
      const response = await TasksService.fetchTasks()
      this.tasks = response.data.items
      console.log(this.tasks)
    },
    async deleteTask (id) {
      await TasksService.deleteTask(id)
      this.$router.push({path: '/tasks'})
      location.reload()
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
