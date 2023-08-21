import React from 'react';
import { Dialog, Flex, Box, Text, Heading, Tabs, Table, ScrollArea, Link } from '@radix-ui/themes';
import Image from 'next/image';

export default function ElementInfo({ props, element_image, children }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450, minWidth: 450, minHeight: 510, maxHeight: 510 }}>
                <Flex gap="4" justify={'center'}>
                    <Box>
                        <Heading size="3" as="h3">
                            {props.name}
                        </Heading>
                        <Text as="div" size="2" color="gray">
                            {props.symbol}
                        </Text>

                        <Tabs.Root defaultValue="description">
                            <Tabs.List>
                                <Tabs.Trigger value="description">Information</Tabs.Trigger>
                                <Tabs.Trigger value="properties">Properties</Tabs.Trigger>
                            </Tabs.List>

                            <Box px="4" pt="3" pb="2">
                                <Tabs.Content value="description">
                                    <ScrollArea type={'always'} scrollbars={'vertical'} style={{ maxHeight: '340px' }}>
                                        <Text size="2">{props.description}</Text>

                                        <Flex style={{ margin: '20px' }} justify={'center'}>
                                            <Image src={element_image} height={200} width={300} />
                                        </Flex>

                                        <Flex wrap={'wrap'} direction={'row'} gap={'5'} justify={'center'}>
                                            <Text size={'2'}>Image by Wikipedia</Text>
                                        </Flex>

                                        <Flex wrap={'wrap'} direction={'row'} gap={'5'} justify={'center'} style={{ marginTop: '20px' }}>
                                            <Link href={`https://en.wikipedia.org/wiki/${props.name}`}>Wikipedia</Link>
                                            <Link href={`https://google.com/search?q=${props.name}`}>Google</Link>
                                        </Flex>
                                    </ScrollArea>
                                </Tabs.Content>

                                <Tabs.Content value="properties" style={{ minWidth: '350px' }}>
                                    <Table.Root variant="surface">
                                        <Table.Body>
                                            <ScrollArea type={'always'} scrollbars={'vertical'} style={{ maxHeight: '340px' }}>
                                                <Table.Row>
                                                    <Table.RowHeaderCell>Other Name</Table.RowHeaderCell>
                                                    <Table.Cell>{props.other_name}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Discovered By</Table.RowHeaderCell>
                                                    <Table.Cell>{props.discovered}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Named By</Table.RowHeaderCell>
                                                    <Table.Cell>{props.named}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Year Discovered</Table.RowHeaderCell>
                                                    <Table.Cell>{props.year_discovered}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Atomic Number</Table.RowHeaderCell>
                                                    <Table.Cell>{props.atomic_number}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Atomic Mass</Table.RowHeaderCell>
                                                    <Table.Cell>{props.atomic_mass}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Group Number</Table.RowHeaderCell>
                                                    <Table.Cell>{props.group}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Period Number</Table.RowHeaderCell>
                                                    <Table.Cell>{props.period}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Block</Table.RowHeaderCell>
                                                    <Table.Cell>{props.block}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Boiling Point</Table.RowHeaderCell>
                                                    <Table.Cell>{props.boiling_point}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Melting Point</Table.RowHeaderCell>
                                                    <Table.Cell>{props.melting_point}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>State (at STP)</Table.RowHeaderCell>
                                                    <Table.Cell>{props.state}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Electronic Configuration</Table.RowHeaderCell>
                                                    <Table.Cell>{props.electronic_configuration}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Color</Table.RowHeaderCell>
                                                    <Table.Cell>{props.color}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Density</Table.RowHeaderCell>
                                                    <Table.Cell>{props.density}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Critical Point</Table.RowHeaderCell>
                                                    <Table.Cell>{props.critical_point}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Covalent Radius</Table.RowHeaderCell>
                                                    <Table.Cell>{props.covalent_radius}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Van Der Waal Radius</Table.RowHeaderCell>
                                                    <Table.Cell>{props.vanderwaal_radius}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Oxidation States</Table.RowHeaderCell>
                                                    <Table.Cell>{props.oxidation_states}</Table.Cell>
                                                </Table.Row>

                                                <Table.Row>
                                                    <Table.RowHeaderCell>Electronegativity</Table.RowHeaderCell>
                                                    <Table.Cell>Pauling Scale: {props.electronegativity.pauling}</Table.Cell>
                                                </Table.Row>
                                            </ScrollArea>
                                        </Table.Body>
                                    </Table.Root>
                                </Tabs.Content>
                            </Box>
                        </Tabs.Root>
                    </Box>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}