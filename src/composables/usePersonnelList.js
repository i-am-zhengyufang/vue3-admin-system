import { onMounted, reactive, watch } from "vue";
import { getList, updateList, deleteList, addList, batchdeleteList } from "@/utils/api";
// 作用：增删改查list

function popMessage(msg) {
    ElNotification.success({
        message: msg,
        showClose: false,
    });
}



export default function usePersonnelList() {
    const personnelObj = reactive({
        keywords: '',
        pageNo: 1,
        pageSize: 5,
        totalNum: 0,
        list: [],
    });

    const getPersonnelList = async () => {
        console.log('没反应？？？');
        const {
            data: { totalNum, list },
        } = await getList({ pageNo: personnelObj.pageNo, pageSize: personnelObj.pageSize, keywords: personnelObj.keywords });
        personnelObj.totalNum = totalNum;
        personnelObj.list = list;
    };

    const handleSizeChange = (val) => {
        personnelObj.pageSize = val;
        getPersonnelList();
    };

    const handleCurrentChange = (val) => {
        personnelObj.pageNo = val;
        getPersonnelList();
    };

    const updatePersonnelList = (data) => {
        updateList({ ...data });
        popMessage('修改成功')
        getPersonnelList();

    }
    const deletePersonnelList = (row) => {
        ElMessageBox.confirm("确定要删除吗?", "Warning", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
        }).then(() => {
            deleteList({ id: row.id })
            popMessage('删除成功')
            getPersonnelList();
        }).catch(() => {
            popMessage('取消删除')
        });
    }

    const batchdeletePersonnelList = (rows) => {
        if (rows.value.length) {
            ElMessageBox.confirm("确定要删除吗?", "Warning", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                // 如果这里的代码有错误，它是会进入catch的哦，因此控制台没错不要就真以为没错了
                let ids = rows.value.map(item => item.id)
                batchdeleteList(ids)
                popMessage('删除成功')
                getPersonnelList();
            }).catch(() => {
                popMessage('取消删除')
            });
        }
        else popMessage('未选中任何一行')
    }

    const addPersonnelList = (data) => {
        addList(data)
        popMessage('添加成功')
        personnelObj.pageNo = 1
        getPersonnelList()
        // 由于我添加到第一个，所以添加后页码返回首页

    }

    const searchQuery = (query) => {
        personnelObj.keywords = query.value
        personnelObj.pageNo = 1
    }

    // 看着官网写的，好新奇的写法

    onMounted(getPersonnelList);
    watch(() => personnelObj.keywords, getPersonnelList)
    // 等价于92行写个getPersonnelList()
    return {
        personnelObj,
        getPersonnelList,
        handleSizeChange,
        handleCurrentChange,
        updatePersonnelList,
        deletePersonnelList,
        batchdeletePersonnelList,//我草一定要导出
        addPersonnelList,
        searchQuery
    }

}