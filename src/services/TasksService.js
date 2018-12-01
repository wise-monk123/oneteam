import Api from '@/services/Api'

export default {
  fetchTasks () {
    return Api().get('items')
  },

  updateTasks (params) {
    return Api().put('items/' + params.itemId, params)
  },

  getTasks (params) {
    return Api().get('items/' + params.itemId)
  },

  deleteTask (id) {
    return Api().delete('items/' + id)
  }
}
