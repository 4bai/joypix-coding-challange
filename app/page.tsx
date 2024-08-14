import { DiscussionList } from '~/components/discussions/discussion-list'
import PageLayout from '~/components/layout/page-layout'

export default async function Page() {
  return (
    <PageLayout title="Game Discussions">
      <DiscussionList />
    </PageLayout>

  )
}
