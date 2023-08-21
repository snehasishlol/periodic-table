'use client';

import getAdjustedColor from '@/scripts/getAdjustedColor';
import { Box, Flex, Text } from '@radix-ui/themes';
import { BsBalloon, BsBox, BsDroplet, BsQuestion } from 'react-icons/bs';
import React from 'react';
import ElementInfo from './ElementInfo';

export default function Element({ props, element_image }) {
    return (
        <ElementInfo props={props} element_image={element_image}>
            <Box style={{ backgroundColor: `${props.color_hex}`, border: `3px solid ${getAdjustedColor(`${props.color_hex}`, 20)}`, borderRadius: '10px', padding: '10px', minWidth: '100px', minHeight: '100px', maxHeight: '100px', maxWidth: '100px' }}>
                <Flex direction={'row'} wrap={'wrap'} justify={'between'}>
                    <Text style={{ color: getAdjustedColor(`${props.color_hex}`, 100) }}>{props.atomic_number}</Text>
                    <Text style={{ color: getAdjustedColor(`${props.color_hex}`, 100) }}>
                        {
                            props.state === 'Solid' ?
                                <BsBox />
                                :
                                props.state === 'Liquid' ?
                                    <BsDroplet />
                                    :
                                    props.state === 'Gas' ?
                                        <BsBalloon />
                                        :
                                        <BsQuestion />
                        }
                    </Text>
                </Flex>
                <Flex direction={'row'} wrap={'wrap'} justify={'center'}>
                    <Text align={'center'} size={'7'} style={{ color: getAdjustedColor(`${props.color_hex}`, 100) }}>
                        {props.symbol}
                    </Text>
                </Flex>
                <Flex direction={'row'} wrap={'wrap'} justify={'end'}>
                    <Text style={{ color: getAdjustedColor(`${props.color_hex}`, 100) }}>{props.atomic_mass}</Text>
                </Flex>
            </Box>
        </ElementInfo>
    )
}
