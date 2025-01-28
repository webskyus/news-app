import React from 'react';
import { Button } from '@shared/ui/button';
import { BookmarkIcon } from 'lucide-react';
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerFooter,
	DrawerClose,
} from '@shared/ui/drawer';

const Bookmark = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant={'link'} className={'py-[24px]'}>
					<BookmarkIcon className={'!w-[24px] !h-[24px]'} />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Are you absolutely sure?</DrawerTitle>
					<DrawerDescription>This action cannot be undone.</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose>
						<Button variant='outline'>Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export { Bookmark };
