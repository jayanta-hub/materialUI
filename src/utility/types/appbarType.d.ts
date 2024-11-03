
export interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  export type SideBarItems = {
    id: number;
    segment: string;
    title: string;
    icon: JSX.Element;
    link: string;
    isSelected: boolean;
  }[];

  export interface ListLinkProps{
    list:SideBarItems,
    isMobileView:boolean,
    closeDrawer:() => void
  }