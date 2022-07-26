import { defineStore } from 'pinia'

export const useErrorStore = defineStore('errorLog', {
    state: () => ({
        errorLogs: [
            {
                url: 'xxx',
                err: 'Converting circular structure to JSON',
                info: '错误错误我是错误'
            }
        ]
    }),
    getters: {
        errorLogsNum: (state) => state.errorLogs.length
    },
    actions: {
        addErrorLogs(error) {
            // 这里通过this.errorLogs是拿不到的，本来想通过计算属性，发现不行
            this.errorLogs.push(error)
        },
        clearErrorLogs() {
            this.errorLogs.length = 0
        }
    }

})