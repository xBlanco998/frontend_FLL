export default function TeamDetailLoading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50">
            <div className="w-full max-w-3xl px-4 py-10">
                <div className="w-full rounded-lg border bg-white p-6 shadow-sm dark:bg-black">
                    {/* Team name */}
                    <div className="skeleton mb-2 h-8 w-48 rounded" />

                    {/* City & coach */}
                    <div className="mb-6 space-y-2">
                        <div className="skeleton h-4 w-36 rounded" />
                        <div className="skeleton h-4 w-44 rounded" />
                    </div>

                    {/* Team Members heading */}
                    <div className="skeleton mt-8 mb-4 h-7 w-40 rounded" />

                    {/* Member rows */}
                    <div className="space-y-3">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between rounded-lg border border-border p-4"
                            >
                                <div className="space-y-1">
                                    <div className="skeleton h-4 w-32 rounded" />
                                    <div className="skeleton h-3 w-20 rounded" />
                                </div>
                                <div className="skeleton h-8 w-20 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}