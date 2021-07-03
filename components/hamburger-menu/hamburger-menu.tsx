import styles from "./hamburger-menu.module.css";

export const HamburgerMenu = ({
    children,
    isOpen,
    onClose,
}: React.PropsWithChildren<{
    isOpen?: boolean;
    onClose: () => void;
}>) => {
    return (
        <>
            <div
                className={`${styles["hamburger-menu__scrim"]} ${isOpen ? styles["hamburger-menu__scrim--open"] : ""}`}
                onClick={onClose}
            />
            <div
                className={`${styles["hamburger-menu"]} ${isOpen ? styles["hamburger-menu--open"] : ""}`}
            >
                {isOpen ? children : null}
            </div>
        </>
    );
};
HamburgerMenu.displayName = "HamburgerMenu";