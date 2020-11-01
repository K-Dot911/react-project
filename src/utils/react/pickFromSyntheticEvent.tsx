import React from 'react';

export function pickFromSyntheticEvent<T extends HTMLElement>() {
    return <K extends keyofT>(key: K) =>
        <E extends ((t: T[k]) => void)>(fn: E) =>
            (e: React.SyntheticEvent<T>) =>
                fn(e.currentTarget[key]);
}