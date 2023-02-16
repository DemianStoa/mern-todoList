import axios from "axios"

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export const getLists = () =>  API.get('/list')
export const createList = async (text) => await API.post('/list/create',{text})
export const updateList = async (list) => await API.patch('/list/update', list)
export const deleteList = async (_id) => await API.delete(`/list/${_id}`)