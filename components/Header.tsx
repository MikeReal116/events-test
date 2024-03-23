import Link from 'next/link';
import React from 'react';
import NavLink from '@/components/NavLink';

const routes = [
    { name: 'Home', path: '/' },
    { name: 'All Events', path: '/events/all' },
];

function Header() {
    return (
        <header className="flex justify-between items-center border-b border-white/10 h-14 px:3 sm:px-9">
            <Link href="/"> EVENTO </Link>
            <nav className="h-full">
                <ul className="flex items-center gap-6 text-sm h-full">
                    {routes.map((route) => (
                        <li key={route.path} className="h-full">
                            <NavLink
                                href={route.path}
                                label={route.name}
                            ></NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
