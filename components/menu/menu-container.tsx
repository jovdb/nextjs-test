import React, { memo } from "react";
import { useLabels } from "../../hooks/useLabels";
import { Menu } from "./menu";

export const MenuContainer = memo(() => {
    const { labels, isLoading } = useLabels(["address"]);

    if (isLoading) {
        return <>Loading...</>;
    }

    const address = labels?.address ?? "";

    return (
        <Menu labels={{ address }} />
    );
});
MenuContainer.displayName = "MenuContainer";