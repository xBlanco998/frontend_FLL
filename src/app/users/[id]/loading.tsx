import PageShell from "@/app/components/page-shell";

export default function UserDetailLoading() {
    return (
        <PageShell eyebrow="Participant profile" title="" description="">
            <div className="space-y-8">
                {/* User details */}
                <div className="space-y-3">
                    <div className="skeleton h-3 w-24 rounded" />
                    <div className="skeleton h-6 w-40 rounded" />
                    <div className="skeleton h-4 w-56 rounded" />
                </div>

                <div className="editorial-divider" />

                {/* Records section */}
                <div className="space-y-4">
                    <div className="skeleton h-3 w-16 rounded" />
                    <div className="skeleton h-6 w-24 rounded" />

                    <div className="grid gap-4">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={i}
                                className="rounded-lg border border-border/90 bg-card p-5"
                            >
                                <div className="space-y-2">
                                    <div className="skeleton h-3 w-12 rounded" />
                                    <div className="skeleton h-5 w-48 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageShell>
    );
}