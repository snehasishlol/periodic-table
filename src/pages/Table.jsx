import { Flex, Box } from '@radix-ui/themes';
import elements from '@/data/elements/elements';
import images from '@/data/images/images';
import React from 'react';
import Element from '@/components/Element';
import ElementHolder from '@/components/ElementHolder';
import ElementOther from '@/components/ElementOther';
import ElementIndex from '@/components/ElementIndex';
import Credits from '@/components/Credits';

export default function Table() {
    return (
        <Box rows={'2'} columns={'1'} gap={'9'} style={{ zoom: '65%', overflow: 'visible' }}>
                <Box rows={'7'} columns={'1'} gap={'1'}>
                    <Flex gap={'1'} id={'period-1'} style={{ width: '100%' }}>
                        <Element element_image={images[0]} props={elements[0]} />
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => (<ElementHolder key={i} />))}
                        <Element element_image={images[1]} props={elements[1]} />
                    </Flex>

                    <Flex gap={'1'} id={'period-2'}>
                        <Element element_image={images[2]} props={elements[2]} />
                        <Element element_image={images[3]} props={elements[3]} />
                        <ElementHolder />
                        <ElementHolder x={<ElementIndex />} />
                        <ElementHolder x={<Credits />} />
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => (<ElementHolder key={i} />))}
                        <Element element_image={images[4]} props={elements[4]} />
                        <Element element_image={images[5]} props={elements[5]} />
                        <Element element_image={images[6]} props={elements[6]} />
                        <Element element_image={images[7]} props={elements[7]} />
                        <Element element_image={images[8]} props={elements[8]} />
                        <Element element_image={images[9]} props={elements[9]} />
                    </Flex>

                    <Flex gap={'1'} id={'period-3'}>
                        <Element element_image={images[10]} props={elements[10]} />
                        <Element element_image={images[11]} props={elements[11]} />
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (<ElementHolder key={i} />))}
                        <Element element_image={images[12]} props={elements[12]} />
                        <Element element_image={images[13]} props={elements[13]} />
                        <Element element_image={images[14]} props={elements[14]} />
                        <Element element_image={images[15]} props={elements[15]} />
                        <Element element_image={images[16]} props={elements[16]} />
                        <Element element_image={images[17]} props={elements[17]} />
                    </Flex>

                    <Flex gap={'1'} id={'period-4'}>
                        {
                            elements.map((el) => (
                                <>
                                    {
                                        el.period === '4' ?
                                            <>
                                                <Element props={el} element_image={images[el.atomic_number-1]} key={el.atomic_number} />
                                            </>
                                            : null
                                    }
                                </>
                            ))
                        }
                    </Flex>

                    <Flex gap={'1'} id={'period-5'}>
                        {
                            elements.map((el) => (
                                <>
                                    {
                                        el.period === '5' ?
                                            <>
                                                <Element props={el} element_image={images[el.atomic_number-1]} key={el.atomic_number} />
                                            </>
                                            : null
                                    }
                                </>
                            ))
                        }
                    </Flex>

                    <Flex gap={'1'} id={'period-6'}>
                        <Element element_image={images[54]} props={elements[54]} />
                        <Element element_image={images[55]} props={elements[55]} />
                        <ElementOther props={{ title: 'Ln', subtitle: '57-71', footer: 'Lanthanides' }} />
                        {
                            elements.map((el) => (
                                <>
                                    {
                                        el.period === '6' ?
                                            <>
                                                {
                                                    el.atomic_number > 71 ?
                                                        <>
                                                            <Element props={el} element_image={images[el.atomic_number-1]} key={el.atomic_number} />
                                                        </>
                                                        : null
                                                }
                                            </>
                                            : null
                                    }
                                </>
                            ))
                        }
                    </Flex>

                    <Flex gap={'1'} id={'period-7'}>
                        <Element element_image={images[86]} props={elements[86]} />
                        <Element element_image={images[87]} props={elements[87]} />
                        <ElementOther props={{ title: 'An', subtitle: '89-103', footer: 'Actinides' }} />
                        {
                            elements.map((el) => (
                                <>
                                    {
                                        el.period === '7' ?
                                            <>
                                                {
                                                    el.atomic_number > 103 ?
                                                        <>
                                                            <Element props={el} element_image={images[el.atomic_number-1]} key={el.atomic_number} />
                                                        </>
                                                        : null
                                                }
                                            </>
                                            : null
                                    }
                                </>
                            ))
                        }
                    </Flex>
                </Box>

                {/* Lanthinides and Actinides */}

                <Flex gap={'2'} direction={'column'} wrap={'wrap'} style={{ marginTop: '40px' }}>
                    <Flex gap={'1'}>
                        <ElementHolder />
                        <ElementOther props={{ title: 'Ln', subtitle: '57-71', footer: 'Lanthanides' }} />
                        {
                            elements.map((el) => (
                                <>
                                    {
                                        el.period === '6' ?
                                            <>
                                                {
                                                    el.atomic_number > 56 && el.atomic_number < 72 ?
                                                        <>
                                                            <Element props={el} element_image={images[el.atomic_number-1]} key={el.atomic_number} />
                                                        </>
                                                        : null
                                                }
                                            </>
                                            : null
                                    }
                                </>
                            ))
                        }
                        <ElementHolder />
                    </Flex>

                    <Flex gap={'1'}>
                        <ElementHolder />
                        <ElementOther props={{ title: 'An', subtitle: '89-103', footer: 'Actinides' }} />
                        {
                            elements.map((el) => (
                                <>
                                    {
                                        el.period === '7' ?
                                            <>
                                                {
                                                    el.atomic_number > 88 && el.atomic_number < 104 ?
                                                        <>
                                                            <Element props={el} element_image={images[el.atomic_number-1]} key={el.atomic_number} />
                                                        </>
                                                        : null
                                                }
                                            </>
                                            : null
                                    }
                                </>
                            ))
                        }
                        <ElementHolder />
                    </Flex>
                </Flex>
        </Box>
    )
}
