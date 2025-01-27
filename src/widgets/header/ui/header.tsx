import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@shared/constants/routes';
import Image from 'next/image';
import { Navigation } from '@widgets/header/ui/components/navigation';
import { Search } from '@widgets/header/ui/components/search';

const Header = () => {
	return (
		<header className={'py-[24px]'}>
			<div className={'container mx-auto'}>
				<div className={'flex items-center justify-between'}>
					<Link href={ROUTES.HOME.path} className={'flex h-[48px]'}>
						<Image
							src='/logo.svg'
							width={120}
							height={48}
							alt='MEGA.news logo'
						/>
					</Link>
					<Navigation />
					<Search />
				</div>
			</div>
		</header>
	);
};

export { Header };
