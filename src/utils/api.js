import request from './axios'
export const getAvatar = () => request.get("/getAvatar");
export const getList = (params) => request.get("/getList", { params })
export const updateList = (params) => request.post('/updateList', params)
export const deleteList = (id) => request.post('/deleteList', id)
export const batchdeleteList = (ids) => request.post('/batchdeleteList', ids)
export const addList = (params) => request.post('/addList', params)