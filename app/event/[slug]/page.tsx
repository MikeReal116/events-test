import H1 from '@/components/H1';
import { getEventBySlug } from '@/lib/utils';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

async function EventDetail({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const event = await getEventBySlug(slug);
    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <main>
            <section className="relative h-[361px] overflow-hidden flex items-center justify-center">
                <Image
                    src={event.imageUrl}
                    alt={event.name}
                    fill
                    className="object-cover blur-3xl z-0"
                    quality={50}
                    sizes="(max-width: 1280px) 100vw , 1280px"
                />

                <div className="z-1 relative flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">
                    <Image
                        src={event.imageUrl}
                        width={300}
                        height={201}
                        alt={event.name}
                        priority
                        className="rounded-md border-2 border-white/20"
                    />
                    <div className="space-y 2 sm:space-y-4">
                        <p className="text-white/75">
                            {new Date(event.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                        <H1 className="whitespace-nowrap text-2xl lg:text-4xl">
                            {event.name}
                        </H1>
                        <p className="whitespace-nowrap">
                            Organized by{' '}
                            <span className="italic">
                                {event.organizerName}
                            </span>
                        </p>
                        <button className="border-white/10  bg-blur w-full border-2 capitalize rounded-md px-6 py-2 bg-white/20 hover:scale-105 transition focus:scale-105">
                            Get Tickets
                        </button>
                    </div>
                </div>
            </section>
            <Section>
                <SectionHeading>About this event</SectionHeading>
                <SectionContent>{event.description}</SectionContent>
            </Section>
            <Section>
                <SectionHeading>Location</SectionHeading>
                <SectionContent>{event.location}</SectionContent>
            </Section>
        </main>
    );
}

export default EventDetail;

const Section = ({ children }: PropsWithChildren) => {
    return (
        <section className="p-4 max-w-2xl mx-auto leading-8 text-white/75">
            {children}
        </section>
    );
};

const SectionHeading = ({ children }: PropsWithChildren) => {
    return (
        <h2 className="text-2xl font-semibold mb-4 text-center">{children}</h2>
    );
};

const SectionContent = ({ children }: PropsWithChildren) => {
    return <p className="text-center">{children}</p>;
};
