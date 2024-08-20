import React from 'react'
import { SparklesText } from '~/components/ui/sparkles-text'

export default function PageHeader({ text, className, ...props }: { text: string | undefined, className?: string }) {
  if (!text)
    return null
  return (
    <div>
      <SparklesText text={text} className={`text-center my-10 ${className}`} {...props} />
    </div>
  )
}
