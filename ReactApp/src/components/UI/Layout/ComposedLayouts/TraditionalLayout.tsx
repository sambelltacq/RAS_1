import React, { useState, useContext } from "react";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BottomNavigation from "@mui/material/BottomNavigation";
import Card from "@mui/material/Card";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

import SideDrawer from "../LayoutComponents/SideDrawer";
import MoreVertDrawer from "../LayoutComponents/MoreVertDrawer";

import AutomationStudioContext from "../../../SystemComponents/AutomationStudioContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

/**
 * The TraditionalLayout Component is a wrapper on the Material-UI AppBar, BottomNavigation and Drawer components. The TraditionalLayout is intended to wrap content to provide a consistent look and feel across all interfaces.<br/><br/>
 * The TraditionalLayout component is implemented with an elevated appbar (content scrolls under appbar), fixed footer (footer fixed to bottom of window) and swipeable drawers (swipe from left/right on touch devices).<br/><br/>
 * When used outside of the styleguide the appbar and footer will span the entire window.<br/><br/>
 */
const TraditionalLayout = ({
  title = null,
  alignTitle = "left",
  titleVariant = "h6",
  titleTextStyle = {},
  denseAppBar = false,
  drawerItems = null,
  moreVertDrawerItems = null,
  hideMoreVertMenu = false,
  hideToggleThemeListItem = false,
  hideHomeDrawerButton = false,
  hideDrawerAfterItemClick = false,
  hideMoreVertDrawerAfterItemClick = false,
  showFooter = false,
  footerHeight = 30,
  footerContents = null,
  ...others
}: TraditionalLayoutProps) => {
  const theme = useTheme();

  const themeType = theme.palette.mode;

  const context = useContext(AutomationStudioContext);
  const notInStyleGuide = context.styleGuideRedirect;

  const [showDrawer, setShowDrawer] = useState(false);
  const [showMVDrawer, setShowMVDrawer] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        color={themeType === "dark" ? "inherit" : "primary"}
        position={notInStyleGuide ? undefined : "static"}
        elevation={theme.palette.paperElevation}
      >
        <Toolbar
          variant={denseAppBar ? "dense" : undefined}
          style={{ display: "flex" }}
        >
          <IconButton
            onClick={() => setShowDrawer(true)}
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            hideDrawerAfterItemClick={hideDrawerAfterItemClick}
            hideHomeDrawerButton={hideHomeDrawerButton}
            drawerItems={drawerItems}
          />
          {title && (
            <Typography
              sx={(theme) => ({
                textAlign: alignTitle,
                flexGrow: 1,
                ...titleTextStyle,
              })}
              variant={titleVariant}
            >
              {title}
            </Typography>
          )}
          {others.tabs && (
            <Tabs
              style={{ flexGrow: 1 }}
              value={others.tabValue}
              textColor="inherit"
              onChange={others.handleTabChange}
              {...others.tabProps}
            >
              {others.tabs.map((option, index) => (
                <Tab key={index.toString()} label={option} />
              ))}
            </Tabs>
          )}
          {!hideMoreVertMenu && (
            <React.Fragment>
              <IconButton
                sx={{
                  marginLeft: "auto",
                }}
                aria-label="display more actions"
                edge="end"
                color="inherit"
                onClick={() => setShowMVDrawer(true)}
                size="large"
              >
                <MoreVertRoundedIcon />
              </IconButton>
              <MoreVertDrawer
                showMVDrawer={showMVDrawer}
                setShowMVDrawer={setShowMVDrawer}
                hideMoreVertDrawerAfterItemClick={
                  hideMoreVertDrawerAfterItemClick
                }
                moreVertDrawerItems={moreVertDrawerItems}
                hideToggleThemeListItem={hideToggleThemeListItem}
              />
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      {notInStyleGuide && (
        <div style={{ marginBottom: denseAppBar ? "3em" : "4em" }} />
      )}
      <React.Fragment>
        {/* ---Children--- */}
        {others.children}
        {/* ---Children--- */}
      </React.Fragment>
      {showFooter && (
        <React.Fragment>
          <BottomNavigation
            sx={(theme) => ({
              width: "100%",
              position: "fixed",
              bottom: 0,
              height: footerHeight,
              borderRadius: 0,
              boxShadow: theme.shadows[24],
            })}
            component={Card}
            style={{
              position: notInStyleGuide ? undefined : "relative",
              backgroundColor:
                themeType === "dark" ? undefined : theme.palette.primary.main,
            }}
          >
            {footerContents}
          </BottomNavigation>
          {notInStyleGuide && <div style={{ marginBottom: footerHeight }} />}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

interface TraditionalLayoutProps {
  /** Title to be displayed in the app bar */
  title?: string|null;
  /** Alignment of the title in the app bar */
  alignTitle?: "left" | "center" | "right";
  /** Typography variant of the title text */
  titleVariant?: string;
  /** JSX style to override title text defaults */
  titleTextStyle?: object;
  /** Directive to use dense variant of the app bar */
  denseAppBar?: boolean;
  /** Items to be displayed in the side drawer (left side) */
  drawerItems?: React.ReactNode;
  /** Items to be displayed in the more vert side drawer (right side) */
  moreVertDrawerItems?: React.ReactNode;
  /** Directive to hide the more vert side drawer icon and menu */
  hideMoreVertMenu?: boolean;
  /** Directive to hide the 'Toggle Theme' item in the more vert side drawer menu */
  hideToggleThemeListItem?: boolean;
  /** Directive to hide the 'Home' item in the side drawer menu */
  hideHomeDrawerButton?: boolean;
  /** Directive to hide side drawer once item on it has been clicked */
  hideDrawerAfterItemClick?: boolean;
  /** Directive to hide more vert side drawer once item on it has been clicked */
  hideMoreVertDrawerAfterItemClick?: boolean;
  /** Directive to show Footer element */
  showFooter?: boolean;
  /** Height of the Footer element */
  footerHeight?: number;
  /** Items to be displayed in the Footer element */
  footerContents?: React.ReactNode;
  /** MUI Tab labels to be displayed in the AppBar element */
  tabs?: string[];
  /** Tab index */
  tabValue?: number;
  /** Callback for tab change */
  handleTabChange?: (event: React.SyntheticEvent, newValue: number) => void;
  /** Tab props */
  tabProps?: object;
  /** Children components */
  children: React.ReactNode;
}

export default TraditionalLayout;
