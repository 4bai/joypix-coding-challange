import React from "react";
import PageHeader from "./page-header";

export default function PageLayout({ title, children }: { title: string, children: React.ReactNode }) {
    return <div>
        <PageHeader text={title} />
        <div>
            {children}
        </div>
    </div>;
}   