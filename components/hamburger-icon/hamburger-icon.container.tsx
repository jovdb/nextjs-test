import React, { memo, useState } from "react";
import { useRecoilState } from "recoil";
import { HamburgerIcon } from "./hamburger-icon";
import { isHamburgerMenuOpenState } from "./state";

export const HamburgerIconContainer = memo(function HamburgerIconContainer() {
	const [isOpen, setIsOpen] = useRecoilState(isHamburgerMenuOpenState);
	return (
		<HamburgerIcon
			isOpen={isOpen}
			onClick={() => setIsOpen(prev => !prev)}
		/>
	);
});
HamburgerIconContainer.displayName = "HamburgerIconContainer";
