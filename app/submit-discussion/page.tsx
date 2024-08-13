import React from "react";
import { createClient } from "~/utils/supabase/server";
import DiscussionForm from "@/components/discussions/discussion-form"
import PageLayout from '~/components/layout/page-layout'
import { redirect } from "next/navigation";

export default async function SubmitDiscussionPage() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/");
    }
    return (
        <PageLayout title="Start Discussion">
            <div className="w-full flex justify-center">
                <div className="w-[600px] flex flex-col justify-center">
                    <DiscussionForm />
                </div>
            </div>
        </PageLayout>
    )
}