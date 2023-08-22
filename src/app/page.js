import Table from "@/pages/Table";
import { Flex, Text } from "@radix-ui/themes";
import { Kanit } from "next/font/google";
import Image from "next/image";

const kanit = Kanit({ subsets: ['latin'], weight: '400' });

export default function Home() {
	return (
		<>
			<Table />
		</>
	)
}
