import Table from "@/pages/Table";
import { Flex, Text } from "@radix-ui/themes";
import { Kanit } from "next/font/google";
import Image from "next/image";

const kanit = Kanit({ subsets: ['latin'], weight: '400' });

export default function Home() {
	return (
		<>
			<Flex direction={'column'} justify={'center'} align={'center'} style={{ overflow: 'scroll' }}>
				<Flex direction={'row'} gap={'2'} justify={'center'}>
					<Image src={'/icon.png'} height={50} width={50} />
					<Text className={kanit.className} size={'7'} style={{ lineHeight: '200%'}}>PERIODIC TABLE</Text>
				</Flex>
				<Table />
			</Flex>
		</>
	)
}
