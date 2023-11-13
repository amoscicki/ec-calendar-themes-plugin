export const applyTheme = (theme, customTheme = {}) => {
  const viewNames = {
    "ec-day-grid ec-month-view": "dayGridMonth",
    "ec-time-grid ec-day-view": "timeGridDay",
    "ec-time-grid ec-week-view": "timeGridWeek",
    "ec-list ec-day-view": "listDay",
    "ec-list ec-week-view": "listWeek",
    "ec-list ec-month-view": "listMonth",
    "ec-list ec-year-view": "listYear",
    "ec-time-grid ec-resource-day-view": "resourceDay",
    "ec-time-grid ec-resource-week-view": "resourceWeek",
  };
  const themeSettings = customTheme[viewNames[theme.view]];
  if (themeSettings !== undefined) {
    return {
      ...theme,
      ...Object.keys(themeSettings).reduce((acc, setting) => {
        acc[setting] = applyClasses({
          ...themeSettings[setting],
          defaultClasses: theme[setting],
        });
        return acc;
      }, {}),
    };
  }
  return theme;
};

const applyClasses = ({
  additionalClasses,
  applyDefaultClasses,
  defaultClasses,
}) => {
  return `${applyDefaultClasses ? defaultClasses : ""} ${additionalClasses}`;
};
