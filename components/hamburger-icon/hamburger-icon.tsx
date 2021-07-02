import React from "react";

import styles from "./hamburger-icon.module.css";

export const HamburgerIcon = ({
	isOpen,
	onClick,
}: {
	isOpen?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => (
	<div
		className={`${styles["hamburger-icon"]} ${isOpen ? styles["hamburger-icon--is-open"] : ""}`}
		onClick={(e) => {
			if (onClick) onClick(e);
		}}
	>
		<div className={styles["hamburger-inner"]} />
	</div>
);
HamburgerIcon.displayName = "HamburgerIcon";
