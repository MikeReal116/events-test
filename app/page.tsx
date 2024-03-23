import H1 from '@/components/H1';
import SearchForm from '@/components/SearchForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex flex-col items-center px-3 justify-center">
            <H1>Find events around you</H1>
            <p className="mb-12 mt-7 text-2xl lg:3xl opacity-75">
                Browse more than{' '}
                <span className="italic underline font-bold text-accent">
                    5,000 events
                </span>{' '}
                around you
            </p>
            <SearchForm />
            <section className="flex text-sm text-white/50 justify-center mt-6 gap-x-4">
                <p>Popular:</p>
                <ul className="flex items-center gap-x-2 font-semibold">
                    <li>
                        <Link href="/events/helsinki">Helsinki</Link>
                    </li>
                    <li>
                        <Link href="/events/accra">Accra</Link>
                    </li>
                </ul>
            </section>
        </main>
    );
}
