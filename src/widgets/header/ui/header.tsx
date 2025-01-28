import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@shared/constants/routes';
import Image from 'next/image';
import { Search } from '@widgets/header/ui/components/search';
import { Bookmark } from '@widgets/header/ui/components/bookmark';
import { Profile } from '@widgets/header/ui/components/profile';
import { Navigation } from '@entities/user/navigation';

const Header = () => {
	return (
		<header className={'py-[24px]'}>
			<div className={'container mx-auto'}>
				<div className={'flex items-center'}>
					<Link href={ROUTES.HOME.path} className={'flex h-[48px]'}>
						<Image
							src='/logo.svg'
							width={120}
							height={48}
							alt='MEGA.news logo'
						/>
					</Link>
					<nav className={'ml-[60px]'}>
						<Navigation />
					</nav>
					<nav className={'flex ml-auto'}>
						<Search />
						<Profile />
						<Bookmark />
					</nav>
				</div>
			</div>
		</header>
	);
};

export { Header };
