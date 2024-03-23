'use client';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

function SearchForm() {
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchQuery = inputRef.current?.value;
        if (searchQuery) {
            router.push(`/events/${searchQuery.toLowerCase()}`);
        }
    };

    return (
        <form className="w-full sm:w-96" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Search events in any city..."
                spellCheck={false}
                className="w-full p-3 rounded-lg focus:outline-none bg-white/[8%]  focus:ring-accent/50  focus:ring-2 focus:bg-white/10 transition"
            />
        </form>
    );
}

export default SearchForm;
