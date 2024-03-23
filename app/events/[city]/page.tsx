import EventList from '@/components/EventsList';
import H1 from '@/components/H1';
import { Suspense } from 'react';
import EventsLoading from './loading';
import { Metadata } from 'next';
import { capitalizeFirstLetter } from '@/lib/utils';

export function generateMetadata({
    params,
}: {
    params: { city: string };
}): Metadata {
    const city = decodeURIComponent(params.city);
    console.log('city', city);
    return {
        title: `Events in ${capitalizeFirstLetter(city)} | EventFinder`,
    };
}

function EventsPage({ params }: { params: { city: string } }) {
    const city = decodeURIComponent(params.city);

    return (
        <main>
            <div className="flex items-center justify-center p-4 lg:p-8">
                <H1>
                    {city === 'all' && 'All events'}
                    {city !== 'all' &&
                        `Events in ${capitalizeFirstLetter(city)}`}
                </H1>
            </div>

            <Suspense fallback={<EventsLoading />}>
                <EventList city={city} />
            </Suspense>
        </main>
    );
}

export default EventsPage;
