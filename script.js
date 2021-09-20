var FORM = [
  {
    node: "form",
    style: { href: "./random.style.css", options: { rel: "stylesheet" } },
    options: [
      {
        key: "class",
        value: "my-form container",
      },
    ],
    children: [
      {
        node: "div",
        options: [
          {
            key: "class",
            value: "row",
          },
        ],
        children: [
          {
            node: "div",
            options: [
              {
                key: "class",
                value: "col-12 col-md-4",
              },
            ],
            children: [
              {
                node: "label",
                options: [
                  {
                    key: "class",
                    value: "form-label",
                  },
                ],
                content: "Email",
              },
              {
                node: "input",
                options: [
                  {
                    key: "class",
                    value: "form-control",
                  },
                  {
                    key: "type",
                    value: "email",
                  },
                ],
              },
            ],
          },
          {
            node: "div",
            options: [
              {
                key: "class",
                value: "col-12 col-md-8",
              },
            ],
            children: [
              {
                node: "label",
                options: [
                  {
                    key: "class",
                    value: "form-label",
                  },
                ],
                content: "Password",
              },
              {
                node: "input",
                options: [
                  {
                    key: "class",
                    value: "form-control",
                  },
                  {
                    key: "type",
                    value: "password",
                  },
                ],
              },
            ],
          },
          {
            node: "div",
            options: [
              { key: "id", value: "react-select" },
              { key: "class", value: "w-100 container mt-3" },
            ],
            script: {
              src: "./react-select.script.js",
              options: { type: "text/babel" },
            },
          },
          {
            node: "div",
            options: [{ key: "class", value: "container mt-3 w-100" }],
            script: {
              src: "./jquery-select.script.js",
              options: { type: "text/babel" },
            },

            children: [
              { node: "label", content: "Jquery Select" },
              {
                node: "select",
                options: [
                  { key: "id", value: "jquery-select" },
                  { key: "class", value: "w-100 container mt-3" },
                ],
                children: [
                  {
                    node: "option",
                    options: [{ key: "value", value: "Karachi" }],
                    content: "Karachi",
                  },
                  {
                    node: "option",
                    options: [{ key: "value", value: "Islamabad" }],
                    content: "Islamabad",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

var MAP = [
  {
    node: "div",
    options: [
      { key: "id", value: "mapid" },
      {
        key: "style",
        value: "height: 300px; margin-top: 40px; width: 100%",
      },
      { key: "class", value: "container" },
    ],
    script: { src: "./map.script.js", options: { type: "text/babel" } },
  },
];

var NAVBAR = [
  {
    node: "nav",
    options: [
      {
        key: "class",
        value: "navbar navbar-expand-lg navbar-light bg-light",
      },
    ],
    events: {
      click: () => {
        alert("agaya");
      },
    },
    children: [
      {
        node: "div",
        options: [
          {
            key: "class",
            value: "container-fluid",
          },
        ],
        children: [
          {
            node: "a",
            content: "Navbar",
            options: [
              {
                key: "class",
                value: "navbar-brand",
              },
              {
                key: "href",
                value: "#",
              },
            ],
          },
          {
            node: "button",
            options: [
              {
                key: "class",
                value: "navbar-toggler",
              },
              {
                key: "type",
                value: "button",
              },
            ],
            onClick: () => alert("I am clicked!"),
            children: [
              {
                node: "span",
                options: [
                  {
                    key: "class",
                    value: "navbar-toggler-icon",
                  },
                ],
              },
            ],
          },
          {
            node: "div",
            options: [
              {
                key: "class",
                value: "collapse navbar-collapse",
              },
              {
                key: "id",
                value: "navbarNavAltMarkup",
              },
            ],
            children: [
              {
                node: "div",
                options: [
                  {
                    key: "class",
                    value: "navbar-nav",
                  },
                ],
                children: [
                  {
                    node: "a",
                    content: "Home",
                    options: [
                      {
                        key: "class",
                        value: "nav-link active",
                      },
                      {
                        key: "href",
                        value: "#",
                      },
                    ],
                  },
                  {
                    node: "a",
                    content: "Features",
                    options: [
                      {
                        key: "class",
                        value: "nav-link",
                      },
                      {
                        key: "href",
                        value: "#",
                      },
                    ],
                  },
                  {
                    node: "a",
                    content: "Pricing",
                    options: [
                      {
                        key: "class",
                        value: "nav-link",
                      },
                      {
                        key: "href",
                        value: "#",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

var IMAGE_SCHEMA = {
  type: "IMAGE",
  properties: {
    path: "./img/pexels-josh-sorenson-1714208.jpg",
  },
  attributes: { class: "custom-image w-25" },
};

var LINK_SCHEMA = {
  type: "LINK",
  properties: { path: "google.com", content: "this is a link" },
  attributes: { class: "custom-link" },
};

var SELECT_SCHEMA = {
  type: "SELECT",
  properties: {
    options: [
      { name: "option 1", value: "OPTION1" },
      { name: "option 2", value: "OPTION2" },
      { name: "option 3", value: "OPTION3" },
      { name: "option 4", value: "OPTION4" },
    ],
  },
};

var CUSTOMTEMPLATE = [
  IMAGE_SCHEMA,
  {
    node: "div",
    content: "This is a regular node",
    children: [IMAGE_SCHEMA],
    options: [{ key: "class", value: "container" }],
  },
  LINK_SCHEMA,
  SELECT_SCHEMA,
];

var CARD_SCHEMA = [
  {
    type: "CARD",
    data: [
      {
        type: "IMAGE",
        properties: {
          path: "./img/pexels-josh-sorenson-1714208.jpg",
        },
        attributes: { class: "custom-image" },
      },
    ],
    cardTitle: "Hello World",
    cardText: "This is a random descrption",
    link: {
      type: "LINK",
      properties: { path: "http://google.com", content: "this is a link" },
      attributes: { class: "custom-link" },
    },
  },
];

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
        events: { click: { ref: "clickMe", params: { a: 1, b: 2, c: 3 } } },
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

function setAttrs(attrs, dom) {
  for (let j = 0; j < attrs.length; j++) {
    const attr = attrs[j];
    dom.setAttribute(attr.key, attr.value);
  }
}

function setEvents(events, dom) {
  for (const key in events) {
    if (Object.hasOwnProperty.call(events, key)) {
      const event = events[key];
      console.log(event);
      if (event.hasOwnProperty("params")) {
        console.log("dropping true");
        var ekeys = Object.keys(event.params).join();
        var evalues = Object.values(event.params);
        var eventFuncton = new Function(`${ekeys}`, `return ${event.ref}(${ekeys})`);
        dom.addEventListener(key, () => eventFuncton(...evalues), false);
      } else {
        var eventFuncton = new Function("", `return ${event.ref}`);
        dom.addEventListener(key, eventFuncton(), false);
      }
      // https://www.w3schools.com/jsref/dom_obj_event.asp

      // dom.setAttribute(key, event);
    }
  }
}

function addScript(script, dom) {
  var s = document.createElement("script");

  for (const key in script.options) {
    const option = script.options[key];
    s.setAttribute(key, option);
  }

  s.setAttribute("src", script.src);
  dom.appendChild(s);
}

function addStyleSheet(link, dom) {
  console.log(link);
  var s = document.createElement("link");
  for (const key in link.options) {
    const option = link.options[key];
    s.setAttribute(key, option);
  }
  s.setAttribute("href", link.href);

  dom.appendChild(s);
}

function setAttributes(container, attributes) {
  console.log(attributes);
  for (const key in attributes) {
    const attr = attributes[key];

    container.setAttribute(key, attr);
  }
}

function createElement(el) {
  return document.createElement(el);
}

const makeImg = (schema) => {
  let obj = {};

  Object.defineProperties(obj, {
    node: { value: "img" },
    options: {
      value: [
        { key: "src", value: schema.properties.path },
        {
          key: "class",
          value: schema.attributes.class ? schema.attributes.class : "default-class",
        },
      ],
    },
  });
  const data = [obj];
  return data;
};

const makeLink = (schema) => {
  let obj = {
    node: "a",
    options: [
      { key: "href", value: schema.properties.path },
      { key: "class", value: schema?.attributes?.class },
    ],
    content: schema.properties.content,
  };
  if (schema.events) {
    obj.events = { ...schema.events };
  }
  return [obj];
};

const makeSelect = (schema) => {
  let obj = {};
  obj.children = [];
  Object.defineProperties(obj, { node: { value: "select" } });
  for (let i = 0; i < schema.properties.options.length; i++) {
    const element = schema.properties.options[i];
    obj.children.push({
      node: "option",
      content: element.name,
      children: [{ key: "value", value: element.value }],
    });
  }
  return [obj];
};

const makeCard = (schema) => {
  let obj = {};
  var img = makeImg(schema[0].image);
  var link = makeLink(schema[0].link);

  Object.defineProperties(obj, {
    node: { value: "div" },
    options: { value: [{ key: "class", value: "card" }] },
    children: {
      value: [
        img[0],
        {
          node: "div",
          options: [{ key: "class", value: "card-body" }],
          children: [
            {
              node: "h5",
              options: [{ key: "class", value: "card-title" }],
              content: "card-title",
            },
            {
              node: "p",
              options: [{ key: "class", value: "card-title" }],
              content: "card-title",
            },
            link[0],
          ],
        },
      ],
    },
  });

  return [obj];
};

const makeAdvancedSearch = (schema) => {
  var dd = null;
  const linkArr = [];
  var sections = [];

  if (schema.properties.tabs && schema.properties.tabs.length) {
    for (let i = 0; i < schema.properties.tabs.length; i++) {
      const element = schema.properties.tabs[i];
      let [link] = makeLink(element);

      linkArr.push(link);
    }
  }
  console.log(linkArr);
  if (schema.properties.search) {
    let obj = {
      node: "div",
      options: [
        {
          key: "class",
          value: "filter-category filter-search filter-search-panel",
        },
        {
          key: "data-category",
          value: "search_words",
        },
      ],
      children: [
        {
          node: "div",
          options: [{ key: "class", value: "filter-category-header" }],
          children: [
            {
              node: "h4",
              content: "Search",
              children: [
                {
                  node: "span",
                  options: [
                    {
                      key: "class",
                      value: "glyphicon glyphicon-triangle-bottom",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          node: "div",
          options: [
            {
              key: "class",
              value: "filter-category-selections filter-category-search-selections",
            },
          ],
          children: [
            {
              node: "div",
              options: [{ key: "class", value: "search-field-wrapper" }],
              children: [
                {
                  node: "label",
                  children: [
                    {
                      node: "span",
                      options: [{ key: "class", value: "icon-magnifier" }],
                    },
                    {
                      node: "input",
                      options: [
                        {
                          key: "class",
                          value: "form-control searchform-input",
                        },
                        {
                          key: "name",
                          value: "search",
                        },
                        {
                          key: "id",
                          value: "search-id",
                        },
                        {
                          key: "type",
                          value: "search",
                        },
                        {
                          key: "placeholder",
                          value: schema?.properties?.search?.placeholder ? schema?.properties?.search?.placeholder : "Search",
                        },
                      ],
                    },
                    {
                      node: "span",
                      options: [
                        {
                          key: "class",
                          value: "info-button-icon icon-question fix-overflow-top info-box-fixed",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
    sections.push(obj);
  }
  if (schema.properties.filters) {
    let arr = [];
    for (let i = 0; i < schema.properties.filters.length; i++) {
      const el = schema.properties.filters[i];
      switch (el.type) {
        case "CHECKLIST":
          const json = makeCheckList(el);
          let obj = {
            node: "div",
            options: [{ key: "class", value: "filter-category filter-search-panel" }],
            children: [
              {
                node: "div",
                options: [{ key: "class", value: "filter-category-header" }],
                children: [
                  {
                    node: "h4",
                    content: el.title,
                    children: [
                      {
                        node: "span",
                        options: [
                          {
                            key: "class",
                            value: "glyphicon glyphicon-triangle-bottom",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                node: "div",
                options: [{ key: "class", value: "filter-category-selections " }],
                children: [
                  {
                    node: "div",
                    children: [
                      {
                        node: "label",
                        content: "select all",
                        children: [
                          {
                            node: "input",
                            options: [
                              { key: "type", value: "checkbox" },
                              { key: "value", value: "select-all" },
                              { key: "class", value: "filter-all" },
                              { key: "data-value", value: "select-all" },
                              { key: "name", value: "testcheck" },
                            ],
                          },
                        ],
                      },
                      {
                        node: "hr",
                      },
                    ],
                  },
                  json,
                ],
              },
            ],
          };
          arr.push(obj);

          break;

        default:
          break;
      }
    }
    sections = [...sections, ...arr];
  }
  let obj = {
    node: "form",
    options: [
      { key: "class", value: "panel search-panel" },
      { key: "id", value: "myForm" },
      { key: "name", value: "myForm" },
    ],
    events: { submit: { ref: "changeMe" } },
    children: [
      {
        node: "div",
        options: [{ key: "class", value: "tabs primary" }],
        children: [
          {
            node: "div",
            options: [{ key: "class", value: "clear-all-filters clearfix" }],
            children: [
              {
                node: "span",
                options: [{ key: "class", value: "clear-all" }],
                content: "Clear all",
              },
              {
                node: "span",
                options: [{ key: "class", value: "reset to default" }],
                content: "Reset to default",
              },
            ],
          },
          {
            node: "div",
            options: [{ key: "class", value: "search-tab-categories" }],
            children: linkArr,
          },
        ],
      },
      {
        node: "div",
        options: [{ key: "class", value: "saved-filters" }],
        children: [
          {
            node: "div",
            options: [{ key: "class", value: "saved-filters-header" }],
            children: [
              {
                node: "div",
                options: [
                  {
                    key: "class",
                    value: "overlay-background overlay-close-no-confirmation",
                  },
                ],
              },
              {
                node: "h4",
                content: "Saved Searches",
                children: [
                  {
                    node: "span",
                    options: [
                      {
                        key: "class",
                        value: "glyphicon glyphicon-triangle-bottom",
                      },
                    ],
                  },
                ],
              },
              {
                node: "a",
                content: "save as",
                options: [{ key: "class", value: "save-filter-button" }],
              },
            ],
          },
        ],
      },
      {
        node: "div",
        options: [{ key: "class", value: "searchform-content" }],
        children: sections,
      },
      {
        node: "button",
        content: "Submit",
        options: [{ key: "type", value: "submit" }],
      },
    ],
  };

  if (schema.dependencies && schema.dependencies.length) {
    for (let i = 0; i < schema.dependencies.length; i++) {
      const element = schema.dependencies[i];
      switch (element.type) {
        case "script":
          obj.script = { src: element.path, options: { type: "text/javascript" } };

          break;

        case "stylesheet":
          obj.style = { href: element.path, options: { rel: "stylesheet" } };
          break;

        default:
          break;
      }
    }
  }

  console.log("Object from adv search", obj);

  return [obj];
};

const doMagic = (container, schema) => {
  for (let i = 0; i < schema.length; i++) {
    const el = schema[i];
    let dom = createElement(el.node);

    if (el.options) setAttrs(el.options, dom);
    if (el.events) setEvents(el.events, dom);
    // if (el.content) dom.innerHTML = el.content;

    if (el.children && el.children.length) {
      doMagic(dom, el.children);
    }
    container.appendChild(dom);
    if (el.content) dom.insertAdjacentHTML("beforeend", el.content);

    if (el.script) addScript(el.script, container);
    if (el.style) addStyleSheet(el.style, document.head);
  }
};

const makeTemplate = (container, component) => {
  switch (component.type) {
    case "card":
      makeCard(container, component);
      break;

    case "navbar":
      console.log("fell into navbar");
      break;

    case "ADVANCE_SEARCH":
      console.log("fell into seacrh panel");
      makeAdvancedSearch(component);
      break;

    default:
      break;
  }
};

const elementType = (container, component) => {
  switch (component.type) {
    case "IMAGE":
      return makeImg(component);

    case "LINK":
      console.log("fell into LINK");
      console.log(makeLink(component));
      return makeLink(component);

    case "SELECT":
      console.log("fell into select panel");
      return makeSelect(component);

    case "CHECKBOX":
      console.log("fell into select panel");
      return;

    case "INPUT":
      console.log("fell into select panel");
      return;

    case "BUTTON":
      console.log("fell into select panel");
      return;
    default:
      break;
  }
};

const makeDom = (container, schema) => {
  for (let i = 0; i < schema.length; i++) {
    const el = schema[i];
    if (el.hasOwnProperty("type")) {
      // makeTemplate(container, el);
      const obj = elementType(container, el);
      doMagic(container, obj);
    } else {
      console.log(el);
      doMagic(container, [el]);
    }
  }
};

const makeCheckList = (schema) => {
  var arr = [];

  for (let i = 0; i < schema.options.length; i++) {
    const option = schema.options[i];

    let obj = {
      node: "div",
      children: [
        {
          node: "label",
          content: option.name,
          children: [
            {
              node: "input",
              options: [
                { key: "type", value: "checkbox" },
                { key: "value", value: option.value },
                { key: "data-value", value: option.value },
              ],
            },
          ],
        },
      ],
    };

    arr.push(obj);
  }
  arr = {
    node: "div",
    options: [{ key: "class", value: "checkboxes" }],
    children: arr,
  };

  return arr;
};

const CHECKLIST = {
  type: "CHECKLIST",
  title: "Outcome",
  selectall: true,
  options: [
    { name: "Documents", value: "documents" },
    { name: "Descriptions", value: "descriptions" },
    { name: "Tags", value: "Tags" },
  ],
};

// makeCheckList(CHECKLIST);

// doMagic(document.body, NAVBAR);

// doMagic(document.body, FORM);

// doMagic(document.body, MAP);

// makeDom(document.body, CUSTOMTEMPLATE);

const advancedSearch = makeAdvancedSearch(ADVANCE_SEARCH_SCHEMA);
doMagic(document.body, advancedSearch);
