import { useEffect,useState } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState("")
    const [isError,setIsError] = useState(false)
    const [isPending,setIsPending] = useState(true)
    
    useEffect(() => {

        const abortCont = new AbortController()

         fetch(url, {signal:abortCont.signal})
        .then(res => {
            if (!res.ok){
                throw Error('couldnt fetch the data for the resource')
            }
            else{
          return  res.json()
            }
        })
        .then(data => {
            // console.log(data)
            setData(data)
            setIsPending(false)
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }
            else{
           setIsError(err.message)
           setIsPending(false)
        //    setIsError(false)
        }
        })

        return () => abortCont.abort()

    },[url])

    return {data,isError,isPending}
}

export default useFetch
