import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import prisma from '@/lib/db';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function getEvents({ city }: { city: string }) {
    const response = await prisma.eventoEvent.findMany({
        where: {
            city:
                city === 'all'
                    ? undefined
                    : capitalizeFirstLetter(city.toLowerCase()),
        },
        orderBy: {
            date: 'asc',
        },
    });
    console.log('response', response);
    return response;
}

export async function getEventBySlug(slug: string) {
    const response = await prisma.eventoEvent.findUnique({
        where: {
            slug,
        },
    });
    return response;
}

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
