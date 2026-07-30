import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-gray-100">
            <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-lg hover:opacity-80 transition">
                    Merwane
                </Link>
                <div className="flex gap-6 text-sm text-gray-600">
                    <Link href="/projets" className="hover:text-black transition">
                        Projets
                    </Link>
                    <Link href="/articles" className="hover:text-black transition">
                        Articles
                    </Link>
                    <Link href="/contact" className="hover:text-black transition">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}