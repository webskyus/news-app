import React from 'react';
import { Post } from '@entities/post';
import {POST_CARD_TEMPLATE} from "@entities/post/ui/post";

const HighlightPosts = () => {
	return (
		<section>
			<Post template={POST_CARD_TEMPLATE.POST_CARD_HIGHLIGHT} meta={false} />
		</section>
	);
};

export { HighlightPosts };
