'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React from 'react';
import { motion } from 'framer-motion';

function NavLink({ href, label }: { href: string; label: string }) {
    const activePath = usePathname();
    return (
        <div className="relative h-full flex items-center">
            <Link
                href={href}
                className={clsx(' hover:text-white transition ', {
                    'text-white': activePath === href,
                    'text-white/50': activePath !== href,
                })}
            >
                {label}
            </Link>
            {activePath === href && (
                <motion.div
                    layoutId="navigation-active-link"
                    className="h-1 w-full bg-accent absolute bottom-0"
                ></motion.div>
            )}
        </div>
    );
}

export default NavLink;
