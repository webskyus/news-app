import React, { useEffect, useState } from 'react';
import { Tag } from '@entities/tag';
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@shared/ui/carousel';

const Tags = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<aside className={'mb-[24px]'}>
			<div className={'container mx-auto'}>
				<div className={'px-[12px] py-[12px] rounded-1 bg-gray'}>
					<Carousel
						opts={{
							align: 'start',
						}}
						setApi={setApi}
						className='w-full'>
						<CarouselContent>
							{Array.from({ length: 21 }).map((_, index) => (
								<CarouselItem key={index} className='basis-1/7'>
									<Tag
										name={'#Food'}
										image={'https://github.com/shadcn.png'}
										link={'/'}
									/>
								</CarouselItem>
							))}
						</CarouselContent>

						{current > 1 && (
							<CarouselPrevious className={'translate-x-[20px]'} />
						)}
						{current < 20 && <CarouselNext className={'translate-x-[-20px]'} />}
					</Carousel>
				</div>
			</div>
		</aside>
	);
};

export { Tags };
