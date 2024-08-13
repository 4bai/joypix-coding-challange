import React from 'react'
import { SparklesText } from '~/components/ui/sparkles-text'

export default function PageHeader({ text }: { text: string }) {
    return (
        <div>
            <SparklesText text={text} className='text-center my-10' />
        </div>
    )
}