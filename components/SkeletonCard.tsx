import React from 'react';
import Skeleton from './Skeleton';

function SkeletonCard() {
    return (
        <div className="space-y-3">
            <Skeleton className="rounded-full h-12 w-12" />
            <Skeleton className="h-4 w-80" />
            <Skeleton className="h-4 w-72" />
            <Skeleton className="h-4 w-72" />
        </div>
    );
}

export default SkeletonCard;
