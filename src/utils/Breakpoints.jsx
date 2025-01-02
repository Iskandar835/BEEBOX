// All this component is for an use-friendly media queries

const breakpoints = {
  xs: "320px",
  md: "767px",
  te: "768px",
  lg: "1024px",
};

export const devices = {
  tabs: `(min-width:${breakpoints.md}) and (max-width:${breakpoints.lg})`,
  tabsAndMobile: `(width = ${breakpoints.xs}) and (width = ${breakpoints.lg})`,
  tabsAndDesktop: `(min-width:${breakpoints.te})`,
  desktop: `(min-width:${breakpoints.lg})`,
};
