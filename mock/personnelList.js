// const { Random, mock } = require('mockjs')
import { Random, mock } from "mockjs";
let list = []
let cnt = 40


const handleRandomImage = (width = 50, height = 50) => {
    return `https://picsum.photos/${width}/${height}?random=${Random.guid()}`
}

for (let i = 0; i < cnt; i++) {
    const addr = Random.county(true)
    list.push(
        mock({
            id: '@id',
            name: '@cname',
            addr: addr.split(' '),
            bigImg: handleRandomImage(200, 200),
            'status|1': ['未启用', '正常启用', '禁用'],
            balance: '@integer(0,1000)'
        })
    )
}
export const getList = {
    url: "/api/getList",
    method: "get",
    response: ({ query }) => {
        const { keywords = "", pageNo = 1, pageSize = 5 } = query
        const begin = (pageNo - 1) * pageSize
        const end = pageNo * pageSize
        const filterList = list.filter(item => item.name.indexOf(keywords) !== -1)
        const resList = filterList.slice(begin, end)
        cnt = filterList.length
        return {
            code: 200,
            data: {
                totalNum: cnt,
                list: resList,
            }
        };
    }
}

export const updateList = {
    url: "/api/updateList",
    method: "post",
    response: (params) => {
        const newdata = params.body
        const targetIdx = list.findIndex(item => item.id === newdata.id)
        Object.keys(newdata).map(key => {
            list[targetIdx][key] = newdata[key]
        })
        return {
            code: 200,
            data: {
                message: '修改成功'
            }
        };
    }
}

export const deleteList = {
    url: "/api/deleteList",
    method: "post",
    response: (params) => {
        const { id } = params.body
        list = list.filter((item) => item.id !== id)
        cnt = cnt - 1
        return {
            code: 200,
            data: {
                message: '删除成功'
            }
        };
    }
}


export const batchdeleteList = {
    url: "/api/batchdeleteList",
    method: "post",
    response: (params) => {
        const delids = params.body
        list = list.filter((item) => !delids.some(delid => delid === item.id))
        cnt = cnt - delids.length
        return {
            code: 200,
            data: {
                message: '删除成功'
            }
        };
    }
}

export const addList = {
    url: "/api/addList",
    method: "post",
    response: (params) => {
        const data = params.body
        data.id = Random.id()
        data.bigImg = handleRandomImage(200, 200),
            list = [data, ...list]
        cnt = cnt + 1
        return {
            code: 200,
            data: {
                message: '添加成功'
            }
        };
    }
}

