import { forwardRef } from 'react'
import type { CSSProperties } from 'react'
import styles from './LightLeak.module.css'

type LightLeakProps = {
  color: string
  size: number
  className?: string
  style?: CSSProperties
}

const LightLeak = forwardRef<HTMLDivElement, LightLeakProps>(
  ({ color, size, className, style }, ref) => {
    return (
      <div
        ref={ref}
        className={[styles.leak, className].filter(Boolean).join(' ')}
        style={{
          width: size,
          height: size,
          background: color,
          ...style
        }}
      />
    )
  }
)

LightLeak.displayName = 'LightLeak'

export default LightLeak
