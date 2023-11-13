/**  Prototype version of the plugin for Tailwind CSS
 *
 * author: Arkadiusz Moscicki
 * license: MIT
 * version: 0.0.1 initial
 *
 * ported original content of index.scss & theme.scss
 * maintaining the structure of the original code
 *
 * this is just a starting point for the plugin
 * using it should allow maintaining tailwindcss processing order
 *
 */

const themeScss = {
  // event-calendar variables
  /* Variables */
  // event-calendar variables
  ".ec": {
    /* HSL */
    "color-scheme": "light",

    "--ec-h": "0",
    "--ec-s": "0%",
    // "--ec-l-50": "97.30%",
    // "--ec-l-100": "95.70%",
    // "--ec-l-200": "93.70%",
    "--ec-l-300": "91.00%",
    // "--ec-l-400": "87.80%",
    "--ec-l-500": "83.50%",
    "--ec-l-600": "78.40%",
    "--ec-l-700": "71.40%",
    // "--ec-l-800": "62.40%",
    // "--ec-l-900": "48.20%",
    // "--ec-l-950": "13.30%",
    "--ec-bg-fallback-color": "#fff",
    "--ec-hs": "var(--ec-h), var(--ec-s)",

    /* Main color */
    // "--ec-color-50": "hsl(var(--ec-hs), var(--ec-l-50))",
    // "--ec-color-100": "hsl(var(--ec-hs), var(--ec-l-100))",
    // "--ec-color-200": "hsl(var(--ec-hs), var(--ec-l-200))",
    "--ec-color-300": "hsl(var(--ec-hs), var(--ec-l-300))",
    // "--ec-color-400": "hsl(var(--ec-hs), var(--ec-l-400))",
    "--ec-color-500": "hsl(var(--ec-hs), var(--ec-l-500))",
    "--ec-color-600": "hsl(var(--ec-hs), var(--ec-l-600))",
    "--ec-color-700": "hsl(var(--ec-hs), var(--ec-l-700))",
    // "--ec-color-800": "hsl(var(--ec-hs), var(--ec-l-800))",
    // "--ec-color-900": "hsl(var(--ec-hs), var(--ec-l-900))",
    // "--ec-color-950": "hsl(var(--ec-hs), var(--ec-l-950))",

    /* General  props */
    // "--ec-bg-color": "<color>", // can be set by the user
    // "--ec-text-color": "<color>", // can be set by the user
    "--ec-border-color": "var(--ec-color-500)",
    "--ec-accent-color": "var(--ec-color-600)",

    /* Buttons */
    "--ec-button-bg-color": "var(--ec-bg-color)",
    "--ec-button-border-color": "var(--ec-color-600)",
    "--ec-button-text-color": "var(--ec-text-color)",
    "--ec-button-active-bg-color": "var(--ec-color-300)",
    "--ec-button-active-border-color": "var(--ec-color-700)",
    "--ec-button-active-text-color": "var(--ec-button-text-color)",

    /* Events */
    "--ec-event-bg-color": "#039be5",
    "--ec-event-text-color": "#fff",
    "--ec-bg-event-color": "var(--ec-color-500)",
    "--ec-bg-event-opacity": "0.3",

    /* Days */
    "--ec-list-day-bg-color": "var(--ec-bg-color, var(--ec-bg-fallback-color))",
    "--ec-today-bg-color": "rgba(255, 220, 40, .15)",
    "--ec-highlight-color": "rgba(188, 232, 241, .3)",

    /* Popup */
    "--ec-popup-bg-color": "var(--ec-bg-color, var(--ec-bg-fallback-color))",

    /* Now Indicator */
    "--ec-now-indicator-color": "#ea4335",

    ".ec-dark &": {
      "color-scheme": "dark",
      "--ec-h": "215",
      "--ec-s": "15%",
      // "--ec-l-50": "5.10%",
      // "--ec-l-100": "8.60%",
      // "--ec-l-200": "13.30%",
      "--ec-l-300": "25.50%",
      // "--ec-l-400": "34.10%",
      "--ec-l-500": "42.40%",
      "--ec-l-600": "49.80%",
      "--ec-l-700": "57.30%",
      // "--ec-l-800": "64.70%",
      // "--ec-l-900": "72.50%",
      // "--ec-l-950": "80.40%",
      "--ec-bg-fallback-color": "#22272e",
    },

    "@media (prefers-color-scheme: dark)": {
      ".ec-auto-dark &": {
        "color-scheme": "dark",
        "--ec-h": "215",
        "--ec-s": "15%",
        // "--ec-l-50": "5.10%",
        // "--ec-l-100": "8.60%",
        // "--ec-l-200": "13.30%",
        "--ec-l-300": "25.50%",
        // "--ec-l-400": "34.10%",
        "--ec-l-500": "42.40%",
        "--ec-l-600": "49.80%",
        "--ec-l-700": "57.30%",
        // "--ec-l-800": "64.70%",
        // "--ec-l-900": "72.50%",
        // "--ec-l-950": "80.40%",
        "--ec-bg-fallback-color": "#22272e",
      },
    },
  },
};

const indexScss = {
  ...themeScss,
  /* Grid */
  ".ec-days, .ec-day, .ec-day-title, .ec-resource": {
    /** Tailwid equivalent:
     * flex-1 min-w-0 max-w-full
     **/
    flex: "1 1 0",
    minWidth: "0",
    maxWidth: "100%",
  },

  ".ec": {
    /** Tailwind equivalent:
     * flex flex-col text-[var(--ec-text-color)] bg-[var(--ec-bg-color)]
     * the transparent is default in tailwind
     * https://github.com/tailwindlabs/tailwindcss/pull/12299
     **/
    display: "flex",
    flexDirection: "column",
    color: "var(--ec-text-color)",
    backgroundColor: "var(--ec-bg-color)",
    WebkitTapHighlightColor: "transparent",

    /* Scrollbar */
    "&::-webkit-scrollbar": {
      /** Tailwind equivalent:
       * bg-transparent
       **/
      backgroundColor: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      /** Tailwind equivalent:
       * border-4 border-solid border-transparent shadow-none
       * bg-[var(--ec-border-color)] bg-clip-padding
       * rounded-lg min-h-[40px]
       **/
      border: "4px solid transparent",
      boxShadow: "none",
      backgroundColor: "var(--ec-border-color)",
      backgroundClip: "padding-box",
      borderRadius: "8px",
      minHeight: "40px",
    },

    "&:hover::-webkit-scrollbar-thumb": {
      /** Tailwind equivalent:
       *  bg-[var(--ec-accent-color)]
       **/
      backgroundColor: "var(--ec-accent-color)",
    },
  },

  ".ec-hidden-scroll": {
    /** Tailwind equivalent:
     * overflow-y-scroll hidden invisible flex-shrink-0
     **/
    display: "none",
    overflowY: "scroll",
    visibility: "hidden",
    flexShrink: "0",

    ".ec-with-scroll &": {
      /** Tailwind equivalent:
       * block
       **/
      display: "block",
    },
  },

  /* Toolbar */
  ".ec-toolbar": {
    /** Tailwind equivalent:
     * flex flex-[0_0_auto] justify-between items-center mb-[1em]
     **/
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1em",

    "> *": {
      /** Tailwind equivalent:
       * mb-[-.5em]
       **/
      marginBottom: "-.5em",

      "> *": {
        /** Tailwind equivalent:
         * mb-[.5em]
         **/
        marginBottom: ".5em",

        "&:not(:last-child)": {
          /** Tailwind equivalent:
           * mr-[.75em]
           **/
          marginRight: ".75em",
        },
      },
    },
  },

  ".ec-title": {
    /** Tailwind equivalent:
     * m-0
     * but i believe it may be default anyway
     **/
    margin: "0",
  },

  ".ec-button": {
    /** Tailwind equivalent:
     * bg-[var(--ec-button-bg-color)] border-[var(--ec-button-border-color)]
     * border border-solid p-[.375rem_.75rem] text-base rounded-[.25rem]
     **/
    backgroundColor: "var(--ec-button-bg-color)",
    border: "1px solid var(--ec-button-border-color)",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    borderRadius: ".25rem",

    "&:not(:disabled)": {
      /** Tailwind equivalent:
       * text-[var(--ec-button-text-color)] cursor-pointer
       **/
      color: "var(--ec-button-text-color)",
      cursor: "pointer",
    },

    "&:not(:disabled):hover, &.ec-active": {
      /** Tailwind equivalent:
       * bg-[var(--ec-button-active-bg-color)] border-[var(--ec-button-active-border-color)]
       * color-[var(--ec-button-active-text-color)] z-[1]
       **/
      backgroundColor: "var(--ec-button-active-bg-color)",
      borderColor: "var(--ec-button-active-border-color)",
      color: "var(--ec-button-active-text-color)",
      zIndex: "1", // make all borders visible
    },
  },

  ".ec-button-group": {
    /** Tailwind equivalent:
     * inline-flex
     **/
    display: "inline-flex",

    ".ec-button:not(:first-child)": {
      /** Tailwind equivalent:
       * rounded-tl-none rounded-bl-none ml-[-1px]
       **/
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
      marginLeft: "-1px",
    },

    ".ec-button:not(:last-child)": {
      /** Tailwind equivalent:
       * rounded-tr-none rounded-br-none
       **/
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
  },

  ".ec-icon": {
    /** Tailwind equivalent:
     * inline-block w-[1em]
     **/
    display: "inline-block",
    width: "1em",

    "&.ec-prev:after, &.ec-next:after": {
      /** Tailwind equivalent:
       * worth to mention tailwind offers before: and after: prefixes for pseudo elements
       *
       * content-['""'] relative w-[.5em] h-[.5em]
       * border-t-2 border-t-solid border-t-current
       * border-r-2 border-r-solid border-r-current
       * inline-block
       **/
      content: '""',
      position: "relative",
      width: ".5em",
      height: ".5em",
      borderTop: "2px solid currentcolor",
      borderRight: "2px solid currentcolor",
      display: "inline-block",
    },

    "&.ec-prev:after": {
      /** Tailwind equivalent:
       * rotate-[-135deg] translate-x-[-2px] tranlate-y-[2px]
       **/
      transform: "rotate(-135deg) translate(-2px, 2px)",
    },

    "&.ec-next:after": {
      /** Tailwind equivalent:
       * rotate-[45deg] translate-x-[-2px] tranlate-y-[2px]
       **/
      transform: "rotate(45deg) translate(-2px, 2px)",
    },
  },

  /* Header */
  ".ec-header, .ec-all-day, .ec-body, .ec-days, .ec-day": {
    /** Tailwind equivalent:
     * border-1 border-solid border-[var(--ec-border-color)]
     **/
    border: "1px solid var(--ec-border-color)",
  },

  ".ec-header": {
    /** Tailwind equivalent:
     * flex shrink-0
     **/
    display: "flex",
    flexShrink: "0",

    ".ec-resource": {
      /** Tailwind equivalent:
       * flex-col
       **/
      flexDirection: "column",

      ".ec-days": {
        /** Tailwind equivalent:
         * as tailwind does not offer direct short for border-top-style
         * we can for example declare own class for it or use some clever syntax
         *
         * [border-top-style:_solid]
         **/
        borderTopStyle: "solid",
      },
    },

    ".ec-days": {
      /** Tailwind equivalent:
       * simillar case as above but i think 0 may give
       *
       * border-b-0 [border-bottom:_none]
       **/
      borderBottom: "none",
    },

    ".ec-day": {
      /** Tailwind equivalent:
       * min-h-[24px] line-h-[24px] text-center overflow-hidden overflow-ellipsis
       **/
      minHeight: "24px",
      lineHeight: "24px",
      textAlign: "center",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },

  /* All Day */
  ".ec-all-day": {
    /** Tailwind equivalent:
     * again setting border top to 0
     *
     * flex-shrink-0 border-t-0
     **/
    flexShrink: "0",
    borderTop: "none",

    ".ec-days": {
      /** Tailwind equivalent:
       * and again border bottom to 0
       *
       * border-b-0 [border-bottom:_none]
       **/
      borderBottom: "none",
    },

    ".ec-day": {
      /** Tailwind equivalent:
       * pb-1
       **/
      paddingBottom: "4px",
    },
  },

  /* Body */
  ".ec-body": {
    /** Tailwind equivalent:
     * relative overflow-x-hidden overflow-y-auto
     **/
    position: "relative",
    overflowX: "hidden",
    overflowY: "auto",

    ".ec:not(.ec-list) &": {
      /** Tailwind equivalent:
       * [border-top:_none]
       **/
      borderTop: "none",
    },

    ".ec-day-grid &": {
      /** Tailwind equivalent:
       * flex-1
       **/
      flex: "1 1 auto",
    },
  },

  ".ec-sidebar": {
    /** Tailwind equivalent:
     * flex-[0_0_auto] flex-col w-auto max-w-full p-[0_4px_0_8px] flex-col justify-center
     **/
    flex: "0 0 auto",
    width: "auto",
    maxWidth: "100%",
    padding: "0 4px 0 8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  ".ec-sidebar-title": {
    /** Tailwind equivalent:
     * invisible overflow-y-hidden h-0 text-right
     **/
    visibility: "hidden",
    overflowY: "hidden",
    height: "0",
    textAlign: "right",

    ".ec-all-day &": {
      /** Tailwind equivalent:
       * visible py-2 px-0
       **/
      visibility: "visible",
      height: "auto",
      padding: "8px 0",
    },
  },

  ".ec-content": {
    /** Tailwind equivalent:
     * flex
     **/
    display: "flex",

    ".ec-day-grid &": {
      /** Tailwind equivalent:
       * flex-col h-full
       **/
      flexDirection: "column",
      height: "100%",
    },

    ".ec-day-grid .ec-uniform &": {
      /** Tailwind equivalent:
       * overflow-hidden
       **/
      overflow: "hidden", // remove scrolling due to hidden events
    },

    ".ec-list &": {
      /** Tailwind equivalent:
       * flex-col
       **/
      flexDirection: "column",
    },
  },

  ".ec-resource": {
    /** Tailwind equivalent:
     * flex
     **/
    display: "flex",
  },

  ".ec-days": {
    /** Tailwind equivalent:
     * flex [border-style:_none_none_solid]
     **/
    display: "flex",
    borderStyle: "none none solid",

    "&:last-child": {
      /** Tailwind equivalent:
       * [border-bottom:_none]
       **/
      borderBottom: "none",
    },

    ".ec-day-grid &, .ec-resource &": {
      /** Tailwind equivalent:
       * flex-[1_0_auto]
       **/
      flex: "1 0 auto",
    },

    ".ec-day-grid .ec-uniform &": {
      /** Tailwind equivalent:
       * flex-[1_1_0%] min-h-0
       **/
      flex: "1 1 0%", // % is required to work properly for both auto and fixed calendar height
      minHeight: "0",
    },
  },

  ".ec-day": {
    /** Tailwind equivalent:
     * [border-style:_none_none_none_solid]
     **/
    borderStyle: "none none none solid",

    "&.ec-today": {
      /** Tailwind equivalent:
       * bg-[var(--ec-today-bg-color)]
       **/
      backgroundColor: "var(--ec-today-bg-color)",
    },

    "&.ec-highlight": {
      /** Tailwind equivalent:
       * bg-[var(--ec-highlight-color)]
       **/
      backgroundColor: "var(--ec-highlight-color)",
    },

    ".ec-day-grid .ec-body &": {
      /** Tailwind equivalent:
       * min-h-[5em] relative
       **/
      minHeight: "5em",
      position: "relative",
    },

    ".ec-day-grid .ec-uniform &": {
      /** Tailwind equivalent:
       * min-h-0
       **/
      minHeight: "0",
    },

    ".ec-day-grid &:first-child": {
      /** Tailwind equivalent:
       * [border-left:_none]
       **/
      borderLeft: "none",
    },

    "&.ec-other-month .ec-day-head": {
      /** Tailwind equivalent:
       * opacity-30
       **/
      opacity: ".3",
    },

    ".ec-list &": {
      /** Tailwind equivalent:
       * flex-[1_0_auto] bg-[var(--ec-list-day-bg-color)] [border-style:_solid_none]
       * py-4 px-[14px] [font-weight:_bold] sticky top-0 z-[2]
       **/
      flex: "1 0 auto",
      backgroundColor: "var(--ec-list-day-bg-color)",
      borderStyle: "solid none",
      padding: "8px 14px",
      fontWeight: "bold",
      position: "sticky",
      top: "0",
      zIndex: "2",

      "&:first-child": {
        /** Tailwind equivalent:
         * [border-top:_none]
         **/
        borderTop: "none",
      },
    },
  },

  ".ec-day-grid": {
    /** Tailwind equivalent:
     *
     **/
    ".ec-day-head": {
      /** Tailwind equivalent:
       * text-right p-[4px_4px_3px]
       **/
      textAlign: "right",
      padding: "4px 4px 3px",
    },

    ".ec-day-foot": {
      /** Tailwind equivalent:
       * absolute bottom-0 p-[2px] text-[.85em]
       **/
      position: "absolute",
      bottom: "0",
      padding: "2px",
      fontSize: ".85em",

      a: {
        /** Tailwind equivalent:
         * cursor-pointer
         **/
        cursor: "pointer",
      },
    },
  },

  ".ec-list": {
    /** Tailwind equivalent:
     *
     **/
    ".ec-day-side": {
      /** Tailwind equivalent:
       * float-right
       **/
      float: "right",
    },

    ".ec-no-events": {
      /** Tailwind equivalent:
       * text-center p-[5em_0]
       **/
      textAlign: "center",
      padding: "5em 0",
    },
  },

  ".ec-events": {
    /** Tailwind equivalent:
     * m-[0_6px_0_0]
     **/
    margin: "0 6px 0 0",

    ".ec-time-grid &, &.ec-preview": {
      /** Tailwind equivalent:
       * relative
       **/
      position: "relative",
    },
  },

  ".ec-event": {
    /** Tailwind equivalent:
     * flex p-[2px] text-[var(--ec-event-text-color)] box-border
     * shadow-[0_0_1px_0_var(--ec-border-color)] bg-[var(--ec-event-bg-color)]
     * rounded-[3px] text-[.85em] [line-height:_1.5] z-[1]
     **/
    display: "flex",
    padding: "2px",
    color: "var(--ec-event-text-color)",
    boxSizing: "border-box",
    boxShadow: "0 0 1px 0 var(--ec-border-color)",
    backgroundColor: "var(--ec-event-bg-color)",
    borderRadius: "3px",
    fontSize: ".85em",
    lineHeight: "1.5",
    zIndex: "1", // put it above the pointer event (for multi-day events in month view)

    ".ec-day-grid &, .ec-all-day &": {
      /** Tailwind equivalent:
       * relative
       **/
      position: "relative",
    },

    ".ec-time-grid .ec-body &": {
      /** Tailwind equivalent:
       * absolute
       **/
      position: "absolute",
    },

    ".ec-list &": {
      /** Tailwind equivalent:
       * flex-row py-2 px-[14px]
       **/
      flexDirection: "row",
      padding: "8px 14px",
      color: "inherit",
      backgroundColor: "transparent",
      borderRadius: "0",
    },

    "&.ec-preview": {
      /** Tailwind equivalent:
       * absolute z-[1000] w-full select-none opacity-80
       **/
      position: "absolute",
      zIndex: "1000",
      width: "100%",
      userSelect: "none",
      opacity: ".8",

      ".ec-day:hover &": {
        /** Tailwind equivalent:
         * flex
         **/
        display: "flex",
      },
    },

    "&.ec-pointer": {
      /** Tailwind equivalent:
       * text-inherit pointer-events-none select-none absolute z-0 shadow-none hidden
       **/
      color: "inherit",
      pointerEvents: "none",
      userSelect: "none",
      position: "absolute",
      zIndex: "0",
      boxShadow: "none",
      display: "none",

      ".ec-day:hover &": {
        /** Tailwind equivalent:
         * flex
         **/
        display: "flex",
      },

      ".ec-day:hover &.ec-resizing-y": {
        /** Tailwind equivalent:
         * !cursor-ns-resize
         **/
        cursor: "ns-resize !important",
      },

      ".ec-day:hover &.ec-resizing-x": {
        /** Tailwind equivalent:
         * !cursor-ew-resize
         **/
        cursor: "ew-resize !important",
      },
    },
  },

  ".ec-event-body": {
    /** Tailwind equivalent:
     * flex flex-col w-full
     **/
    display: "flex",
    flexDirection: "column",
    width: "100%",

    ".ec-day-grid &, .ec-all-day &": {
      /** Tailwind equivalent:
       * flex-row
       **/
      flexDirection: "row",
    },
  },

  ".ec-event-tag": {
    /** Tailwind equivalent:
     * w-1 rounded-sm mr-2
     **/
    width: "4px",
    borderRadius: "2px",
    marginRight: "8px",
  },

  ".ec-event-time": {
    /** Tailwind equivalent:
     * overflow-hidden whitespace-nowrap m-0 mb-[1px] flex-shrink-0
     **/
    overflow: "hidden",
    whiteSpace: "nowrap",
    margin: "0 0 1px 0",
    flexShrink: "0",

    ".ec-day-grid &": {
      /** Tailwind equivalent:
       * m-0 mr-[3px] max-w-full text-ellipsis
       **/
      margin: "0 3px 0 0",
      maxWidth: "100%",
      textOverflow: "ellipsis",
    },
  },

  ".ec-event-title": {
    /** Tailwind equivalent:
     * overflow-hidden
     **/
    overflow: "hidden",

    ".ec-day-grid &, .ec-all-day &": {
      /** Tailwind equivalent:
       * min-h-[1.5em] whitespace-nowrap text-ellipsis
       **/
      minHeight: "1.5em",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },

    ".ec-time-grid .ec-body &": {
      /** Tailwind equivalent:
       * t-0 sticky
       **/
      position: "sticky",
      top: "0",
    },

    ".ec-list &": {
      /** Tailwind equivalent:
       * text-[1rem]
       *
       * could potentially be text-base
       **/
      fontSize: "1rem",
    },
  },

  ".ec-draggable": {
    /** Tailwind equivalent:
     * cursor-pointer select-none
     **/
    cursor: "pointer",
    userSelect: "none",
  },

  ".ec-ghost": {
    /** Tailwind equivalent:
     * opacity-50 select-none
     **/
    opacity: ".5",
    userSelect: "none",
  },

  ".ec-bg-events": {
    /** Tailwind equivalent:
     * relative
     **/
    position: "relative",
  },

  ".ec-bg-event": {
    /** Tailwind equivalent:
     * absolute bg-[var(--ec-bg-event-color)] opacity-[var(--ec-bg-event-opacity)] w-full z-[1]
     **/
    position: "absolute",
    backgroundColor: "var(--ec-bg-event-color)",
    opacity: "var(--ec-bg-event-opacity)",
    width: "100%",
    zIndex: "1",
  },

  ".ec-time, .ec-line": {
    /** Tailwind equivalent:
     * h-6
     **/
    height: "24px",
  },

  ".ec-time": {
    /** Tailwind equivalent:
     * relative [line-height:_24px] top-[-12px] text-right whitespace-nowrap
     **/
    position: "relative",
    lineHeight: "24px",
    top: "-12px",
    textAlign: "right",
    whiteSpace: "nowrap",

    ".ec-header &, .ec-all-day &": {
      /** Tailwind equivalent:
       * invisible overflow-y-hidden h-0
       **/
      visibility: "hidden",
      overflowY: "hidden",
      height: "0",
    },
  },

  ".ec-lines": {
    /** Tailwind equivalent:
     * w-2
     **/
    width: "8px",
  },

  ".ec-line:not(:first-child):after": {
    /** Tailwind equivalent:
     * context-['""'] absolute w-full
     * [border-bottom:_1px_solid_var(--ec-border-color)] pointer-events-none
     **/
    content: '""',
    position: "absolute",
    width: "100%",
    borderBottom: "1px solid var(--ec-border-color)",
    pointerEvents: "none",
  },

  ".ec-body:not(.ec-compact) .ec-line:nth-child(even):after": {
    /** Tailwind equivalent:
     * [border-bottom-style:_dotted]
     **/
    borderBottomStyle: "dotted",
  },

  ".ec-popup": {
    /** Tailwind equivalent:
     * absolute top-0 flex flex-col w-[110%] min-w-[180px] z-[1010]
     * p-[8px_10px_14px] bg-[var(--ec-popup-bg-color)] [border:_1px_solid_var(--ec-border-color)]
     * rounded-[6px] outline-['1px_solid_transparent']
     * [box-shadow:_'0_1px_3px_0_hsla(var(--ec-hs),_50%,_.15),_0_4px_8px_3px_hsla(var(--ec-hs),_50%,_.15)']
     **/
    position: "absolute",
    top: "0",
    display: "flex",
    flexDirection: "column",
    width: "110%",
    minWidth: "180px",
    zIndex: "1010",
    padding: "8px 10px 14px",
    backgroundColor: "var(--ec-popup-bg-color)",
    border: "1px solid var(--ec-border-color)",
    borderRadius: "6px",
    outline: "1px solid transparent",
    boxShadow:
      "0 1px 3px 0 hsla(var(--ec-hs), 50%, .15), 0 4px 8px 3px hsla(var(--ec-hs), 50%, .15)",

    ".ec-day-head": {
      /** Tailwind equivalent:
       * text-left flex justify-between
       **/
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",

      a: {
        /** Tailwind equivalent:
         * cursor-pointer text-[1.5em] [line-height:_.8]
         **/
        cursor: "pointer",
        fontSize: "1.5em",
        lineHeight: ".8",
      },
    },

    ".ec-events": {
      /** Tailwind equivalent:
       * m-0 min-h-0 overflow-auto
       **/
      margin: "0",
      minHeight: "0",
      overflow: "auto",
    },
  },

  ".ec-extra": {
    /** Tailwind equivalent:
     * realative h-full overflow-hidden ml-[-6.5px] select-none
     **/
    position: "relative",
    height: "100%",
    overflow: "hidden",
    marginLeft: "-6.5px",
    userSelect: "none",
  },

  ".ec-now-indicator": {
    /** Tailwind equivalent:
     * absolute z-[1005] w-full [border-top:_var(--ec-now-indicator-color)_solid_2px] pointer-events-none
     **/
    position: "absolute",
    zIndex: "1005",
    width: "100%",
    borderTop: "var(--ec-now-indicator-color) solid 2px",
    pointerEvents: "none",

    "&:before": {
      /** Tailwind equivalent:
       * bg-[var(--ec-now-indicator-color)] rounded-full content-['""'] absolute h-[12px]
       * mt-[-7px] w-[12px] pointer-events-none
       **/
      background: "var(--ec-now-indicator-color)",
      borderRadius: "50%",
      content: '""',
      position: "absolute",
      height: "12px",
      marginTop: "-7px",
      width: "12px",
      pointerEvents: "none",
    },

    ".ec-day-grid &": {
      /** Tailwind equivalent:
       * t-0
       **/
      top: "0",
    },
  },

  ".ec-resizer": {
    /** Tailwind equivalent:
     * absolute user-select-none
     **/
    position: "absolute",
    userSelect: "none",

    ".ec-day-grid &, .ec-all-day &": {
      /** Tailwind equivalent:
       * top-0 right-0 bottom-0 w-1/2 max-w-[8px] cursor-ew-resize
       **/
      top: "0",
      right: "0",
      bottom: "0",
      width: "50%",
      maxWidth: "8px",
      cursor: "ew-resize",
    },

    ".ec-time-grid .ec-body &": {
      /** Tailwind equivalent:
       * left-0 right-0 bottom-0 h-1/2 max-h-[8px] cursor-ns-resize
       **/
      left: "0",
      right: "0",
      bottom: "0",
      height: "50%",
      maxHeight: "8px",
      cursor: "ns-resize",
    },
  },

  ".ec-dragging": {
    /** Tailwind equivalent:
     * !cursor-pointer
     **/
    cursor: "pointer !important",
  },
  ".ec-resizing-y": {
    /** Tailwind equivalent:
     * !cursor-ns-resize
     **/
    cursor: "ns-resize !important",
  },
  ".ec-resizing-x": {
    /** Tailwind equivalent:
     * !cursor-ew-resize
     **/
    cursor: "ew-resize !important",
  },
};

export default ({ addUtilities }) => {
  addUtilities(indexScss);
};
