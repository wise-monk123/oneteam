<template>
  <div class="tasks">
    <h1>Edit Task</h1>
    <div class="form">
      <div>Task ID:#T{{ID}}</div>
      <div>Task Descriptions</div>
      <div>
        <input type="text" name="text" placeholder="$text" v-model="text">
      </div>
      <div>Task Status</div>
      <div>
        <input type="text" name="status" placeholder="$status" v-model="status" disabled>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="optradio" @click="setStatusToDo()">To-Do
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="optradio" @click="setStatusInProgress()">In Progress
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="optradio" @click="setStatusDone()">Done
        </label>
      </div>
      <div>
        <button class="app_post_btn" @click="updateTask">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'EditTask',
  data () {
    return {
      ID: '',
      text: '',
      status: ''
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    async getTasks () {
      console.log(this.$route.params.id)
      const response = await TasksService.getTasks({
        itemId: this.$route.params.id
      })
      console.log(response)
      this.ID = response.data.itemId
      this.text = response.data.text
      this.status = response.data.status
    },
    async updateTask () {
      await TasksService.updateTasks({
        itemId: this.$route.params.id,
        textParam: this.text,
        statusParam: this.status
      })
      this.$router.push({ path: '/tasks' })
    },
    async setStatusToDo () {
      this.status = 'todo'
    },
    async setStatusInProgress () {
      this.status = 'inProgress'
    },
    async setStatusDone () {
      this.status = 'done'
    }
  }
}
</script>
<style type="text/css">
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
