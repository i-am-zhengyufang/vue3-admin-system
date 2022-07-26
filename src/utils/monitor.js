import { useErrorStore } from "@/store";

const errorHandler = (err, vm, info) => {
    const url = window.location.href
    const errorStore = useErrorStore()
    console.error("哎呀出错啦", err, vm, info)
    errorStore.addErrorLogs({ url, err, vm, info })
}
export default errorHandler