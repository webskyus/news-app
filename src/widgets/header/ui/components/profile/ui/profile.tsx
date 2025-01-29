import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@shared/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
} from '@shared/ui/dropdown-menu';
import { Button } from '@shared/ui/button';

const Profile = () => {
	return (
		<article className={'flex items-center '}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className={'py-[23px] text-H5'} variant='outline'>
						<Avatar className={'rounded-2'}>
							<AvatarImage
								src='https://github.com/shadcn.png'
								width={48}
								height={48}
								alt='User avatar image'
							/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						Orhan
						<ChevronDown />
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent className='w-56'>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							Profile
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Billing
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Settings
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Keyboard shortcuts
							<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem>Email</DropdownMenuItem>
									<DropdownMenuItem>Message</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>More...</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
						<DropdownMenuItem>
							New Team
							<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>GitHub</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuItem disabled>API</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</article>
	);
};

export { Profile };
