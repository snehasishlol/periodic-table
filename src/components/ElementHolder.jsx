'use client';

import getAdjustedColor from '@/scripts/getAdjustedColor';
import { Box, VisuallyHidden } from '@radix-ui/themes';
import React from 'react';

export default function ElementHolder({ x }) {
    return (
        <Box style={{ padding: '10px', minWidth: '100px', minHeight: '100px', maxHeight: '100px', maxWidth: '100px' }}>
            {
                typeof x !== 'undefined' && x !== null ?
                <>{x}</>
                :
                <VisuallyHidden />
            }
        </Box>
    )
}
