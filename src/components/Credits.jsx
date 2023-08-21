'use client';

import { Dialog, Flex, Text, Button, Link } from '@radix-ui/themes';
import React from 'react';
import { BsCheck, BsCup, BsGithub, } from 'react-icons/bs';

export default function Credits() {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button size={'3'} color={'green'} variant={'outline'}><BsCheck /> Credits</Button>
            </Dialog.Trigger>

            <Dialog.Content>
                <Flex direction={'column'} justify={'center'} align={'center'} gap={'3'}>
                    <Flex direction={'column'} gap={'5'} justify={'center'} align={'center'}>
                        <Text size={'5'}>Made with 💗 by <Link href={'https://snehasish.me'}>snehasish</Link></Text>
                        <Flex direction={'row'} gap={'3'} justify={'center'} align={'center'}>
                            <Link href={'https://ko-fi.com/snehasishlol'}><Button size={'1'} variant={'outline'} color={'purple'}><BsCup /> Ko-fi</Button></Link>
                            <Link href={'https://github.com/snehasishlol'}><Button size={'1'} variant={'outline'} color={'gray'}><BsGithub /> GitHub</Button></Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}