import React, { memo, useState } from "react";
import { HamburgerIcon } from "./hamburger-icon";

export const HamburgerIconContainer = memo(function HamburgerIconContainer() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<HamburgerIcon
			isOpen={isOpen}
			onClick={() => setIsOpen(prev => !prev)}
		/>
	);
});
HamburgerIconContainer.displayName = "HamburgerIconContainer";
