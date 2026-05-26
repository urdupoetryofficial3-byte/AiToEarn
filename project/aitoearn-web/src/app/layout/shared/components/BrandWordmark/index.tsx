/**
 * BrandWordmark - 布局区域复用的品牌字标
 */

import { cn } from '@/lib/utils'

export const BRAND_TITLE = '乐伴伴AI运营'

type BrandWordmarkTag = 'h1' | 'span'
type BrandWordmarkSize = 'sidebar' | 'mobile'

export interface BrandWordmarkProps {
  as?: BrandWordmarkTag
  size?: BrandWordmarkSize
  className?: string
}

const WORDMARK_SIZE_CLASSNAME: Record<BrandWordmarkSize, string> = {
  sidebar: 'text-[1.15rem] tracking-[-0.02em]',
  mobile: 'text-base tracking-[-0.02em]',
}

const ANCHOR_SIZE_CLASSNAME: Record<BrandWordmarkSize, string> = {
  sidebar: 'text-[1.12em]',
  mobile: 'text-[1.08em]',
}

export function BrandWordmark({
  as = 'span',
  size = 'sidebar',
  className,
}: BrandWordmarkProps) {
  const Component = as

  return (
    <Component
      className={cn(
        'm-0 flex select-none items-baseline whitespace-nowrap font-semibold leading-none',
        WORDMARK_SIZE_CLASSNAME[size],
        className,
      )}
      aria-label={BRAND_TITLE}
    >
      <span
        className={cn(
          'inline-block font-bold text-foreground transition-transform duration-300 group-hover/logo:-translate-y-px',
          ANCHOR_SIZE_CLASSNAME[size],
        )}
      >
        乐伴伴
      </span>
      <span
        className={cn(
          'inline-flex items-baseline bg-gradient-back bg-clip-text text-transparent transition-transform duration-300 group-hover/logo:translate-x-px ml-1',
        )}
      >
        <span className={cn('inline-block font-bold', ANCHOR_SIZE_CLASSNAME[size])}>AI</span>
        <span>运营</span>
      </span>
    </Component>
  )
}
