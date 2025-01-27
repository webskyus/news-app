import React from 'react';
import { EllipsisVertical, SearchIcon } from 'lucide-react';

const Search = () => {
	return (
		<div
			className={
				'flex items-center w-[400px] py-[14px] px-[16px] rounded-1 bg-gray'
			}>
			<EllipsisVertical className={'stroke-black75'} />

			<p className={'ml-[20px] text-black25'}>Search anything</p>

			<SearchIcon width={20} height={20} className={'ml-auto stroke-black75'} />
		</div>
	);
};

export { Search };
