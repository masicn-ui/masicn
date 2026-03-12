// File: src/system/PortalHost.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PortalHostProps {
    portalsRef: React.RefObject<Map<string, React.ReactNode>>;
    subscribe: (listener: () => void) => () => void;
}

export function PortalHost({ portalsRef, subscribe }: PortalHostProps) {
    const [, forceUpdate] = React.useReducer((c: number) => c + 1, 0);

    React.useEffect(() => {
        return subscribe(forceUpdate);
    }, [subscribe]);

    return (
        <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
            {Array.from(portalsRef.current.entries()).map(([key, node]) => (
                <React.Fragment key={key}>
                    {node}
                </React.Fragment>
            ))}
        </View>
    );
}
