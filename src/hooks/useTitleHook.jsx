import { useEffect } from "react"

const useTitleHook = title => {
    useEffect(() => {
        document.title = `${title} | TE`;
    },[title])
}

export default useTitleHook;