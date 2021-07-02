import React, { ReactNode } from "react";
import { Logo } from "../logo/logo";
import styles from "./header.module.css";

export const HeaderLeft = () => {
	return (
		<>
			<Logo />
		</>
	);
};

HeaderLeft.displayName = "HeaderLeftContainer";

export const Header = ({
	left,
	right,
}: {
	left?: ReactNode;
	right?: ReactNode;
}) => (
	<header className={styles.header}>
		<div className={styles.header__left}>{left}</div>
		<div className={styles.header__right}>{right}</div>
	</header>
);
Header.displayName = "Header";