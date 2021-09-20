var ADVANCE_SEARCH_SCHEMA = {
  type: "ADVANCED_SEARCH",
  // dependencies: [{ type: "script", path: "./events.js" }],
  properties: {
    tabs: [
      {
        type: "LINK",
        properties: {
          path: "http://google.com",
          content: "SEARCH",
        },
        attributes: { class: "is-active" },
      },
      {
        type: "LINK",
        properties: {
          path: "http://facebook.com",
          content: "ADVANCED SEARCH",
        },
      },
      {
        type: "LINK",
        properties: {
          path: "#",
          content: "EXAMPLE SEARCH",
        },
        events: { click: "clickMe" },
      },
    ],
    search: {
      title: "Search",
      placeholder: "Enter search term here",
      icon: null,
    },
    filters: [
      {
        type: "CHECKLIST",
        title: "STATUS",
        selectall: true,
        options: [
          { name: "Active", value: "active" },
          { name: "Draft", value: "draft" },
          { name: "Template", value: "template" },
          { name: "Template", value: "template" },
          { name: "Template", value: "template" },
          { name: "Template", value: "template" },
        ],
      },
      {
        type: "CHECKLIST",
        title: "VISIBILITY",
        selectall: true,
        options: [
          { name: "Internal", value: "internal" },
          { name: "External", value: "external" },
        ],
      },
      {
        type: "CHECKLIST",
        title: "LANGUAGE",
        selectall: true,
        options: [
          { name: "English", value: "internal" },
          { name: "Russian", value: "external" },
        ],
      },
      {
        type: "CHECKLIST",
        title: "Company Profile",
        selectall: true,
        options: [
          { name: "Default (Demo Company HQ)", value: "internal" },
          { name: "Demo Company(Suomi, Helsenki)", value: "external" },
        ],
      },
    ],
  },
};
