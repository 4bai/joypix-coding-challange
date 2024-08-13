import React from "react"
import Link from "next/link"
import PageLayout from "~/components/layout/page-layout"
import DiscussionDetail from "../../../components/discussions/discussion-detail"
export default function Page({ params }) {
    return <PageLayout title="Discussion">
        <Link href="/">Back</Link>
        <h1>{params.slug}</h1>
        <DiscussionDetail discussionId={params.slug} />

    </PageLayout>
}