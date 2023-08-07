import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import useListItem from "./hooks";
import { CircularProgress } from "@mui/material";

type Props = {
  onClick: (screen: string) => void;
};

export const MainListItems = ({ onClick }: Props) => {
  return (
    <>
      <ListItemButton onClick={() => onClick("dashboard")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="דשבורד נתונים" />
      </ListItemButton>
      <ListItemButton onClick={() => onClick("newsletter")}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="ניוזלטר" />
      </ListItemButton>
    </>
  );
};

export const SecondaryListItems = () => {
  const { isLoadingLogout, onClickLogOut } = useListItem();

  return (
    <>
      <ListSubheader component="div" inset>
        הגדרות
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="פרטי הלקוח" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon onClick={onClickLogOut} />
        </ListItemIcon>
        <ListItemText onClick={onClickLogOut}>
          {" "}
          {isLoadingLogout ? (
            <CircularProgress
              style={{ width: "25px", height: "25px", color: "#6A806C" }}
            />
          ) : (
            "התנתק"
          )}{" "}
        </ListItemText>
      </ListItemButton>
    </>
  );
};
