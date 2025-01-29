import React, { FC } from 'react';
import { Button } from '@shared/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
	name: string;
	image: string;
	link: string;
}

const Tag: FC<Props> = ({ name, image, link }) => {
	return (
		<Button
			asChild
			className={`
            relative z-[2] 
            mr-[12px] px-[70px] py-[24px] 
            !text-H5 
            overflow-hidden
        `}>
			<Link href={link}>
				{name}

				<Image
					src={image}
					fill={true}
					objectFit={'cover'}
					alt={`News portal tag ${name}`}
					className={'z-[-1]'}
				/>

				<div
					className={'absolute z-[-1] inset-0 bg-black/20 backdrop-blur-sm'}
				/>
			</Link>
		</Button>
	);
};

export { Tag };
