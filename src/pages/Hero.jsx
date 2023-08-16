'use client';

import { Box, Button, Flex, Heading, Link } from '@radix-ui/themes';
import React from 'react';

export default function Hero() {
    return (
        <Box>
            <Box style={{ margin: '10% 15%' }}>
                <Heading size={'9'} style={{ lineHeight: '120%', letterSpacing: '-1px' }}>NextJS</Heading>
                <Heading size={'9'} style={{ lineHeight: '120%', letterSpacing: '-1px' }}>and</Heading>
                <Heading size={'9'} style={{ lineHeight: '120%', letterSpacing: '-1px' }}>Radix Themes</Heading>

                <Flex direction={'row'} wrap={'wrap'} justify={'start'} gap={'2'} style={{ marginTop: '5%' }}>
                    <Link href={'https://github.com/snehasishlol/nextjs-radixthemes'}><Button size={'3'} variant={'solid'} color={'purple'}>Start Using</Button></Link>
                    <Link href={'https://github.com/snehasishlol'}><Button size={'3'} variant={'outline'} color={'purple'}>GitHub</Button></Link>
                </Flex>
            </Box>
        </Box>
    )
}
