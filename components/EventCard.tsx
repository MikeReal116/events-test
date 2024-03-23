import { EventoEvent } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function EventCard({ event }: { event: EventoEvent }) {
    return (
        <Link
            href={`/event/${event.slug}`}
            className="relative flex flex-col flex-1 basis-80 max-w-[500px] h-[380px] bg-white/[3%] rounded-xl overflow-hidden transition hover:scale-105 active:scale-[1.05] "
        >
            <Image
                src={event.imageUrl}
                alt={event.name}
                width={500}
                height={280}
                className="h-[60%] w-full object-cover"
            />
            <div className="flex flex-col flex-1 items-center justify-center">
                <h2 className="text-2xl font-semibold">{event.name}</h2>
                <p className="italic text-white/70">By {event.organizerName}</p>
                <p className="text-sm text-white/50 mt-4">{event.location}</p>
            </div>
            <section className="bg-black/30 w-[45px] h-[45px] rounded-md flex flex-col justify-center items-center absolute top-[12px] left-[12px]">
                <h2 className="font-semibold">
                    {new Date(event.date).toLocaleDateString('en-US', {
                        day: '2-digit',
                    })}
                </h2>
                <p className="text-xs uppercase text-accent">
                    {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                    })}
                </p>
            </section>
        </Link>
    );
}

export default EventCard;
