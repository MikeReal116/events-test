import React from 'react';
import EventCard from '@/components/EventCard';
import { getEvents } from '@/lib/utils';
import { EventoEvent } from '@prisma/client';

async function EventsList({ city }: { city: string }) {
    const events: EventoEvent[] = await getEvents({ city: city.toLowerCase() });

    return (
        <section className="flex flex-wrap gap-10 justify-center p-4">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
}

export default EventsList;
