import TopBar from "@/components/navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen">
            <TopBar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
            </main>
        </div>
    );
}
