import Table from "@/pages/Table";
import { Flex } from "@radix-ui/themes";

export default function Home() {
	return (
		<Flex justify={'center'} align={'center'} style={{ padding: '1%' }}>
			<Table />
		</Flex>
	)
}
