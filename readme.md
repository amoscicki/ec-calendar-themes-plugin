# Plugin example config

## Imports

```javascript
import { applyTheme } from "path/to/the/plugin/event-calendar-customTheme.js";
import { ecCustomTheme } from "path/to/your/theme";
```

## Inside calendar \{options\} object:

```javascript
const options = {
  // (...)
  theme: (theme) => {
    return applyTheme(theme, ecCustomTheme);
  },
  // (...)
};
```

## Example theme file content

_~Note: Due to currently applied stylesheet structure,
you may find specificity of the styles will require `!` in front of your tailwindcss classes in order for them to be applied.~_

```javascript
export const ecCustomTheme = {
  dayGridMonth: {
    // active tab button
    active: {
      additionalClasses:
        "!p-4 !rounded-lg !border-4 !border-red-500 !bg-red-500",
      applyDefaultClasses: true,
    },
  },
  timeGridWeek: {
    // active tab button
    active: {
      additionalClasses: "!p-6 rounded-lg border-4 border-red-200 bg-red-100",
      applyDefaultClasses: true,
    },
  },
  //   timeGridDay: {},
  //   listDay: {},
  //   listWeek: {},
  //   listMonth: {},
  //   listYear: {},
  //   resourceDay: {},
  //   resourceWeek: {},
};
```

# Default classes and descriptions per View:

## DayGrid

active: "ec-active", // active tab button
allDay: "ec-all-day ", // ?? unused?
bgEvent: "ec-bg-event ", // ?? unused?
bgEvents: "ec-bg-events ", // ?? unused?
body: "ec-body ", // container of calendar grid without day name row
button: "ec-button ", // clickable tabs (except currently selected)
buttonGroup: "ec-button-group ", // container of tabs
calendar: "ec ", // container of whole ec-calendar
compact: "ec-compact ", // ?? unused?
content: "ec-content ", // container of calendar grid without day name row
day: "ec-day", // column
dayHead: "ec-day-head", // cell's header
days: "ec-days", // row
event: "ec-event", // event
eventBody: "ec-event-body", // event's body
eventTime: "ec-event-time", // event's time
eventTitle: "ec-event-title", // event's title
events: "ec-events", // container for events cell
extra: "ec-extra", // ?? unused?
handle: "ec-handle", // ?? unused?
header: "ec-header", // container of calendar grid with day name row
hiddenScroll: "ec-hidden-scroll ", // ?? unused?
highlight: "ec-highlight ", // ?? unused?
icon: "ec-icon ", // navigation icons (< >)
line: "ec-line ", // ?? unused?
lines: "ec-lines ", // ?? unused?
nowIndicator: "ec-now-indicator ", // ?? unused?
otherMonth: "ec-other-month ", // cells outside displayed month (other month)
sidebar: "ec-sidebar ", // ?? unused?
sidebarTitle: "ec-sidebar-title ", // ?? unused?
today: "ec-today ", // today's highlighted cell
time: "ec-time ", // ?? unused?
title: "ec-title ", // title (month name and year)
toolbar: "ec-toolbar ", // navigation bar
weekdays: [
"ec-sun ", // column sunday
"ec-mon", // column monday
"ec-tue", // column tuesday
"ec-wed", // column wednesday
"ec-thu", // column thursday
"ec-fri", // column friday
"ec-sat", // column saturday
],
withScroll: "ec-with-scroll ", // ?? unused?
