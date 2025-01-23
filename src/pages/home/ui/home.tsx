'use client';

import dynamic from 'next/dynamic';

import { Header } from '@widgets/header';
import { Tags } from '@widgets/tags';
import { HighlightPosts } from '@widgets/highlight-posts';
import { PopularPosts } from '@widgets/popular-posts';
import { NewPosts } from '@widgets/new-posts';
import { LatestVideos } from '@widgets/latest-videos';
import { TrendyPosts } from '@widgets/trendy-posts';
import { TopPosts } from '@widgets/top-posts/ui/top-posts';
import { Footer } from '@widgets/footer';

const FootballCalendar = dynamic(() => import('@widgets/football-calendar'), {
	loading: () => <div>Loading...</div>,
	ssr: false,
});

const WeatherInfo = dynamic(() => import('@widgets/weather-info'), {
	loading: () => <div>Loading...</div>,
	ssr: false,
});

const Home = () => {
	return (
		<main>
			<Header />
			<Tags />
			<HighlightPosts />
			<PopularPosts />
			<FootballCalendar />
			<NewPosts />
			<LatestVideos />
			<TrendyPosts />
			<WeatherInfo />
			<TopPosts />
			<Footer />
		</main>
	);
};

export { Home };
