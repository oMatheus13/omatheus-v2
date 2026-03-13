import { useEffect, useState } from 'react'

export default function useAssetAvailable(url?: string) {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    if (!url) {
      setAvailable(false)
      return
    }
    let canceled = false

    const check = async () => {
      try {
        const response = await fetch(url, { method: 'HEAD' })
        const contentType = response.headers.get('content-type') || ''
        const isHtml = contentType.includes('text/html')
        if (response.ok && !isHtml) {
          if (!canceled) setAvailable(true)
          return
        }
        if (response.status === 405) {
          const getResponse = await fetch(url, { method: 'GET' })
          const getContentType = getResponse.headers.get('content-type') || ''
          const getIsHtml = getContentType.includes('text/html')
          if (!canceled) setAvailable(getResponse.ok && !getIsHtml)
          return
        }
        if (!canceled) setAvailable(false)
      } catch {
        if (!canceled) setAvailable(false)
      }
    }

    check()

    return () => {
      canceled = true
    }
  }, [url])

  return available
}
