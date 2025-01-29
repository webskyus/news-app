import React from 'react';
import { EllipsisVertical, SearchIcon } from 'lucide-react';
import { Button } from '@shared/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@shared/ui/dialog';

const Search = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant={'ghost'}
					className={`
				flex items-center 
				w-[400px] py-[24px] px-[16px] mr-[12px]
				rounded-1 bg-gray
			`}>
					<EllipsisVertical className={'stroke-black75'} />

					<p className={'ml-[20px] text-black75'}>Search anything</p>

					<SearchIcon
						width={20}
						height={20}
						strokeWidth={3}
						className={'ml-auto stroke-black75'}
					/>
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export { Search };
