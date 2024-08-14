import React from 'react'
import DiscussionDetail from '~/components/discussions/discussion-detail'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>

      <DiscussionDetail discussionId={params.slug} />
    </>
  )
}
