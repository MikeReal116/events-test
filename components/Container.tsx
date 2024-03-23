import React, { PropsWithChildren } from 'react';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={`max-w-7xl bg-white/5 mx-auto w-full ${className}`}>
            {children}
        </div>
    );
}

export default Container;
