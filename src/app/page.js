import Table from "@/pages/Table";
import { Box } from "@radix-ui/themes";

export default function Home() {
	return (
		<Box style={{ padding: '1%', textAlign: 'center', margin: 'auto', justifyContent: 'center', alignItems: 'center' }}>
			<Table />
		</Box>
	)
}
