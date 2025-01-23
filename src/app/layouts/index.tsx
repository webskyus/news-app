import {ReactNode} from 'react';
import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import '@/app/styles/globals.css';

const robotoRegular = Roboto({
    weight: '400',
	subsets: ['latin']
});

const robotoMedium = Roboto({
    weight: '500',
	subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'MEGA.news | Your best provider into the news world',
    description: 'News aggregator number 1, just check all your news in one place...',
};

export function RootLayout({
                               children,
                           }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='en'>
        <body
            className={`${robotoRegular.className} antialiased`}>
        	{children}
        </body>
        </html>
    );
}
