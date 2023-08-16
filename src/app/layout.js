import './globals.css';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'NextJS + Radix Themes',
	description: 'A NextJS App customized with Radix Themes.',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Theme appearance={'light'}>
					{children}
				</Theme>
			</body>
		</html>
	)
}
