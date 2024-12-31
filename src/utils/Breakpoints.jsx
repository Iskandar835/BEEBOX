// All this component is for an use-friendly media queries

const breakpoints = {
  xs: "320px",
  md: "767px",
  lg: "1024px",
};

export const devices = {
  tabs: `(width = ${breakpoints.md}) and (width = ${breakpoints.lg})`,
  tabsAndMobile: `(width = ${breakpoints.xs}) and (width = ${breakpoints.lg})`,
  onlyComputeur: `(width >= ${breakpoints.lg})`,
};
