import { FC, memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import cls from "./Sidebar.module.scss";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { LangSwitcher } from "@/shared/ui/LangSwitcher";
import { VStack } from "@/shared/ui/Stack";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSelector(getSidebarItems);
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const itemList = useMemo(
		() =>
			sidebarItemsList.map((item) => (
				<SidebarItem key={item.path} collapsed={collapsed} item={item} />
			)),
		[collapsed, sidebarItemsList]
	);

	return (
		<aside
			data-testid="sidebar"
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				theme={ButtonTheme.BACKGROUND_INVERTED}
				className={cls.collapseBtn}
				data-testid="sidebar-toggle"
				size={ButtonSize.L}
				square
				onClick={onToggle}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<VStack role={"navigation"} gap="8" className={cls.items}>
				{itemList}
			</VStack>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.lang} />
			</div>
		</aside>
	);
});
