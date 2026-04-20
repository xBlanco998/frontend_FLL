import PageShell from "@/app/components/page-shell";

export default function ScientificProjectDetailLoading() {
    return (
        <PageShell eyebrow="Scientific Project" title="" description="">
            <div className="space-y-8">
                {/* Header skeleton */}
                <div className="space-y-2">
                    <div className="skeleton h-8 w-64 rounded" />
                    <div className="skeleton h-4 w-32 rounded" />
                </div>

                {/* Project details section */}
                <section>
                    <div className="mb-4 space-y-1">
                        <div className="skeleton h-3 w-20 rounded" />
                        <div className="skeleton h-6 w-40 rounded" />
                    </div>
                    <div className="rounded-lg border border-border bg-card p-5">
                        <div className="space-y-3">
                            <div className="flex gap-4">
                                <div className="skeleton h-4 w-16 rounded" />
                                <div className="skeleton h-4 w-24 rounded" />
                            </div>
                            <div className="flex gap-4">
                                <div className="skeleton h-4 w-20 rounded" />
                                <div className="skeleton h-4 w-48 rounded" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Presenting team section */}
                <section>
                    <div className="mb-4 space-y-1">
                        <div className="skeleton h-3 w-20 rounded" />
                        <div className="skeleton h-6 w-36 rounded" />
                    </div>
                    <div className="rounded-lg border border-border bg-card p-5">
                        <div className="space-y-2">
                            <div className="skeleton h-5 w-40 rounded" />
                            <div className="skeleton h-4 w-56 rounded" />
                        </div>
                    </div>
                </section>

                {/* Evaluation room section */}
                <section>
                    <div className="mb-4 space-y-1">
                        <div className="skeleton h-3 w-16 rounded" />
                        <div className="skeleton h-6 w-40 rounded" />
                    </div>
                    <div className="rounded-lg border border-border bg-card p-5">
                        <div className="skeleton h-4 w-72 rounded" />
                    </div>
                </section>
            </div>
        </PageShell>
    );
}