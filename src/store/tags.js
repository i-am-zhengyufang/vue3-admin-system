import { defineStore } from 'pinia'

export const useTagsStore = defineStore('tags', {
    state: () => {
        return {
            list: [
            ]
        }
    },
    getters: {
        isShow: (state) => state.list.length > 0,
        nameList: (state) => state.list.map(item => item.name)
    },
    actions: {
        delTagItem(index) {
            this.list.splice(index, 1)
        },
        addTagItem(data) {
            this.list.push(data)
        },
        clearTags() {
            this.list = []
        },
        closeOtherTags(data) {
            this.list = this.list.filter((item) => item.name === data.name)
        }
    }

})