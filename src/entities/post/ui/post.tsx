import React, { FC, ReactElement } from 'react';
import { PostCard } from '@entities/post/ui/components/post-card';
import { PostCardHighlight } from '@entities/post/ui/components/post-card-highlight';
import { PostCardHighlightVideo } from '@entities/post/ui/components/post-card-highlight-video';
import { PostCardHorizontal } from '@entities/post/ui/components/post-card-horizontal';
import { PostMeta } from '@entities/post/ui/components/post-meta';

export enum POST_CARD_TEMPLATE {
	DEFAULT = 'DEFAULT',
	POST_CARD_HIGHLIGHT = 'POST_CARD_HIGHLIGHT',
	POST_CARD_HIGHLIGHT_VIDEO = 'POST_CARD_HIGHLIGHT_VIDEO',
	POST_CARD_HORIZONTAL = 'POST_CARD_HORIZONTAL',
}

interface Props {
	template: keyof typeof POST_CARD_TEMPLATE;
	meta: boolean;
	slides: string[];
}

const Post: FC<Props> = ({ template, meta, slides }) => {
	const postCardTemplate = {
		[POST_CARD_TEMPLATE.DEFAULT]: <PostCard />,
		[POST_CARD_TEMPLATE.POST_CARD_HIGHLIGHT]: (
			<PostCardHighlight slides={slides} />
		),
		[POST_CARD_TEMPLATE.POST_CARD_HIGHLIGHT_VIDEO]: <PostCardHighlightVideo />,
		[POST_CARD_TEMPLATE.POST_CARD_HORIZONTAL]: <PostCardHorizontal />,
	} as Record<keyof typeof POST_CARD_TEMPLATE, ReactElement>;

	return (
		<article>
			{postCardTemplate[template]}
			{meta && <PostMeta />}
		</article>
	);
};

export { Post };
