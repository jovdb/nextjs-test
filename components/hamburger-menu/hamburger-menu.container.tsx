import { memo, PropsWithChildren } from "react";
import { useRecoilState } from "recoil";
import { isHamburgerMenuOpenState } from "../hamburger-icon/state";
import { HamburgerMenu } from "./hamburger-menu"

export const HamburgerMenuContainer = memo(({ children }: PropsWithChildren<{}>) => {

    const [isOpen, setIsOpen ] = useRecoilState(isHamburgerMenuOpenState);

    return (
        <HamburgerMenu
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            { children}
        </HamburgerMenu> 
    );
});
HamburgerMenuContainer.displayName = "HamburgerMenuContainer";