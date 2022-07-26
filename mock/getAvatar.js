// const Mock = require('mockjs')
// 由于生成环境不能使用require
import Mock from 'mockjs'
const getAvatar = {
    url: "/api/getAvatar",
    method: "get",
    response: () => {
        const colorArr = ['#ff85c0', '#95de64', '#ffd666', '#69c0ff', '#b37feb']
        const num = Mock.Random.integer(0, colorArr.length - 1)
        return {
            code: 200,
            data: {
                img: Mock.Random.image('40x40', colorArr[num], '#FFF', 'Hello')
            }
        };
    }
}
export default getAvatar