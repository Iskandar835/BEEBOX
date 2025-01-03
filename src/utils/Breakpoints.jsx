// All this component is for an use-friendly media queries

const breakpoints = {
  md: "768px",
  lg: "1025px",
  xl: "1440px",
};

export const devices = {
  tabs: `(min-width:${breakpoints.md}) and (max-width:${breakpoints.lg})`,
  tabsAndDesktop: `(min-width:${breakpoints.md})`,
  desktop: `(min-width:${breakpoints.lg})`,
  XlDesktop: `(min-width:${breakpoints.xl})`,
};
