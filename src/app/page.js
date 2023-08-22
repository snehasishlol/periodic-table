import Table from "@/pages/Table";
import { Box } from "@radix-ui/themes";

export default function Home() {
	return (
		<Box style={{ justifyContent: 'center', textAlign: 'center', alignContent: 'center', padding: '1%' }}>
			<Table />
		</Box>
	)
}
