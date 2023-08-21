'use client';

import getAdjustedColor from '@/scripts/getAdjustedColor';
import { Box, Flex, Text, Tooltip } from '@radix-ui/themes';
import { BsBalloon, BsBox, BsDroplet, BsQuestion } from 'react-icons/bs';
import React from 'react';

export default function ElementOther({ props }) {
    return (
        <Box style={{ backgroundColor: `#FFFFFF`, border: `3px solid #000000`, borderRadius: '10px', padding: '10px', minWidth: '100px', minHeight: '100px', maxHeight: '100px', maxWidth: '100px' }}>
            <Flex direction={'row'} wrap={'wrap'} justify={'center'}>
                    <Text style={{ color: '#000000' }}>{props?.subtitle}</Text>
            </Flex>
            <Flex direction={'row'} wrap={'wrap'} justify={'center'}>
                    <Text align={'center'} size={'7'} style={{ color: '#000000' }}>
                        {props?.title}
                    </Text>
            </Flex>
            <Flex direction={'row'} wrap={'wrap'} justify={'center'}>
                    <Text style={{ color: '#000000' }}>{props?.footer}</Text>
            </Flex>
        </Box>
    )
}
