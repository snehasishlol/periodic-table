import './globals.css';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Interactive Periodic Table',
	description: 'A simple, interactive and informative periodic table.',
	keywords: ['Periodic Table', 'Interactive Periodic Table'],
	authors: [{ name: 'snehasish', url: 'https://snehasish.me' }],
	colorScheme: 'dark',
	creator: 'snehasish',
	publisher: 'snehasish',
	openGraph: {
		title: 'Interactive Periodic Table',
		description: 'A simple, interactive and informative periodic table.',
		url: 'https://ptable.snehasish.me',
		siteName: 'Interactive Periodic Table',
		images: [
			{
				url: '/icon.png',
				width: 400,
				height: 400,
			}
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/icon.png',
	},
	themeColor: '#83D8FF',
	twitter: {
		card: 'summary_large_image',
		title: 'Interactive Periodic Table',
		description: 'A simple, interactive and informative periodic table.',
		siteId: '',
		creator: '@snehasishlol',
		creatorId: '',
		images: ['/icon.png'],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Theme appearance={'dark'}>
					{children}
				</Theme>
			</body>
		</html>
	)
}
