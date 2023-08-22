'use client';

import { Dialog, Flex, Box, Text, Code, Callout, Button } from '@radix-ui/themes';
import React from 'react';
import { BsCardList, BsInfoCircle } from 'react-icons/bs';

export default function ElementIndex() {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button size={'3'}><BsCardList /> Index</Button>
            </Dialog.Trigger>

            <Dialog.Content>
                <Flex direction={'column'} justify={'center'} align={'center'} gap={'3'}>
                    <Elm />
                    <Flex direction={'column'} gap={'3'}>
                        <Text size={'5'}>Index: with reference to the above example element</Text>
                        <Flex direction={'column'} gap={'1'}>
                            <Text size={'3'}><Code>El</Code> represents the <strong>symbol</strong> of the element.</Text>
                            <Text size={'3'}><Code>Z</Code> represents the <strong>atomic number</strong> of the element.</Text>
                            <Text size={'3'}><Code>S</Code> represents the <strong>state at STP</strong> of the element.</Text>
                            <Text size={'3'}><Code>A</Code> represents the <strong>atomic mass</strong> of the element.</Text>
                        </Flex>
                    </Flex>
                    <Callout.Root>
                        <Callout.Icon>
                            <BsInfoCircle />
                        </Callout.Icon>
                        <Callout.Text>
                            Click on respective element box to get a descriptive information on the element.
                        </Callout.Text>
                    </Callout.Root>
                    <Callout.Root color={'green'}>
                        <Callout.Icon>
                            <BsInfoCircle />
                        </Callout.Icon>
                        <Callout.Text>
                            The background color of the element box represents the color of the element at room temperature.
                        </Callout.Text>
                    </Callout.Root>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}


function Elm() {
    return (
        <Box style={{ backgroundColor: `#FFFFFF`, border: `3px solid #000000`, borderRadius: '10px', padding: '10px', minWidth: '100px', minHeight: '100px', maxHeight: '100px', maxWidth: '100px', zoom: '70%' }}>
            <Flex direction={'row'} wrap={'wrap'} justify={'between'}>
                <Text style={{ color: '#000000' }}>Z</Text>
                <Text style={{ color: '#000000' }}>S</Text>
            </Flex>
            <Flex direction={'row'} wrap={'wrap'} justify={'center'}>
                <Text align={'center'} size={'7'} style={{ color: '#000000' }}>
                    El
                </Text>
            </Flex>
            <Flex direction={'row'} wrap={'wrap'} justify={'end'}>
                <Text style={{ color: '#000000' }}>A</Text>
            </Flex>
        </Box>
    )
}