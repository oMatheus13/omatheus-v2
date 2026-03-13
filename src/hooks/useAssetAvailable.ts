import { useEffect, useState } from 'react'

export default function useAssetAvailable(url?: string) {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    if (!url) return
    let canceled = false

    const check = async () => {
      try {
        const response = await fetch(url, { method: 'HEAD' })
        if (response.ok) {
          if (!canceled) setAvailable(true)
          return
        }
        if (response.status === 405) {
          const getResponse = await fetch(url, { method: 'GET' })
          if (!canceled) setAvailable(getResponse.ok)
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
