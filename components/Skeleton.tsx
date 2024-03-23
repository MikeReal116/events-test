import { cn } from '@/lib/utils';
import React from 'react';

function Skeleton({ className }: { className?: string }) {
    return (
        <div>
            <div
                className={cn(
                    'animate-pulse bg-white/5 h-40 w-40 rounded-lg',
                    className
                )}
            ></div>
        </div>
    );
}

export default Skeleton;
