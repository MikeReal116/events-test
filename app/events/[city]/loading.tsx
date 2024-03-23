import Skeleton from '@/components/Skeleton';
import SkeletonCard from '@/components/SkeletonCard';
import React from 'react';

function EventsLoading() {
    return (
        <div className="flex flex-col items-center">
            {/* <Skeleton className=" h-12 w-44 my-4 lg:my-8" /> */}
            <div className="flex flex-wrap gap-10 justify-center w-full">
                {Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </div>
    );
}

export default EventsLoading;
