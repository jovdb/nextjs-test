import React, { memo } from "react";
import { useLabels } from "../../hooks/useLabels";
import { useLoading } from "../../hooks/useLoading";
import { Menu } from "./menu";

export const MenuContainer = memo(() => {
    const { labels, isLoading } = useLabels(["address"]);

    useLoading(isLoading);

    if (isLoading) return null;

    const address = labels?.address ?? "";

    return (
        <Menu labels={{ address }} />
    );
});
MenuContainer.displayName = "MenuContainer";