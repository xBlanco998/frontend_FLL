export default function EditionDetailLoading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50">
            <div className="w-full max-w-3xl px-4 py-10">
                <div className="w-full rounded-lg border bg-white p-6 shadow-sm dark:bg-black">
                    {/* Edition title */}
                    <div className="skeleton mb-2 h-8 w-32 rounded" />

                    {/* Venue & description */}
                    <div className="space-y-2 mt-1">
                        <div className="skeleton h-4 w-48 rounded" />
                        <div className="skeleton h-4 w-64 rounded" />
                    </div>

                    {/* Participating Teams heading */}
                    <div className="skeleton mt-8 mb-4 h-7 w-48 rounded" />

                    {/* Team list rows */}
                    <ul className="w-full space-y-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <li
                                key={i}
                                className="p-4 w-full border rounded-lg bg-white shadow-sm dark:bg-black"
                            >
                                <div className="skeleton h-4 w-40 rounded" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}