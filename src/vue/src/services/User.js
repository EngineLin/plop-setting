import axios from 'axios'

export default class UserService {
  baseUrl = '/api/user'

  // Create
  create (params) {
    return axios.post(this.baseUrl + '/path', params)
  }

  // Read all
  findAll (params) {
    return axios.get(this.baseUrl + '/path', params)
  }

  // Read one
  find (id, params) {
    return axios.get(this.baseUrl + `/path/${id}`, params)
  }

  // Update
  update (params) {
    return axios.put(this.baseUrl + '/path', params)
  }

  // Delete
  delete (params) {
    return axios.delete(this.baseUrl + '/path', params)
  }
}
