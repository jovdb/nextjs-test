import styles from "./menu.module.css";

export const Menu = ({
    labels: { address },
}: {
    labels: {
        address: string;
    };
}) => {
    return (
        <div className={`${styles["menu"]}`}>
            TRANSLATED AT RUN-TIME<br />
            { address }: Grembergen
        </div>
    );
};
Menu.displayName = "Menu";