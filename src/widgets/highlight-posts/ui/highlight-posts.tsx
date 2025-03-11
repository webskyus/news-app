import React from 'react';
import { Post } from '@entities/post';
import { POST_CARD_TEMPLATE } from '@entities/post/ui/post';

const HighlightPosts = () => {
	const slide = ['https://github.com/shadcn.png'];
	const slides = [
		'https://github.com/shadcn.png',
		'https://github.com/shadcn.png',
		'https://github.com/shadcn.png',
	];

	return (
		<section className={'mb-[24px]'}>
			<div className={'container mx-auto'}>
				<div
					className={
						'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_2fr] gap-4'
					}>
					<Post
						template={POST_CARD_TEMPLATE.POST_CARD_HIGHLIGHT}
						meta={false}
						slides={slide}
					/>
					<Post
						template={POST_CARD_TEMPLATE.POST_CARD_HIGHLIGHT}
						meta={false}
						slides={slide}
					/>
					<Post
						template={POST_CARD_TEMPLATE.POST_CARD_HIGHLIGHT}
						meta={false}
						slides={slides}
					/>
				</div>
			</div>
		</section>
	);
};

export { HighlightPosts };
