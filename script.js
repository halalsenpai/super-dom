const data = {
  formID: "Form-1",
  data: { email: "abdullahchaghtai@gmail.com", password: "helloworld" },
};

var FORM = [
  {
    node: "form",
    style: { href: "./random.style.css", options: { rel: "stylesheet" } },
    events: { submit: { ref: "changeMe" } },
    options: [
      {
        key: "class",
        value: "my-form container p-4 mt-5",
      },
      {
        key: "id",
        value: "Form-1",
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
                  {
                    key: "name",
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
                  {
                    key: "name",
                    value: "password",
                  },
                ],
              },
            ],
          },
          {
            node: "div",
            options: [{ key: "class", value: "form-check mt-2 w-100" }],
            children: [
              {
                node: "input",
                content: "This is a checkbox",
                options: [
                  { key: "type", value: "checkbox" },
                  { key: "name", value: "checkbox" },
                  { key: "value", value: "sample-checkbox" },
                  { key: "class", value: "form-check-input" },
                ],
              },
              {
                node: "label",
                content: "This is a checkbox",
                options: [{ key: "class", value: "form-check-label" }],
              },
            ],
          },
          {
            node: "div",
            options: [{ key: "class", value: "col-12 col-md-8" }],
            children: [
              {
                node: "label",
                options: [
                  {
                    key: "class",
                    value: "form-label",
                  },
                ],
                content: "Select secret color",
              },
              {
                node: "select",
                options: [
                  { key: "class", value: "form-control" },
                  { key: "name", value: "normal-select" },
                ],
                children: [
                  { node: "option", content: "Open this select menu" },
                  { node: "option", content: "Blue" },
                  { node: "option", content: "Red" },
                  { node: "option", content: "Green" },
                ],
              },
            ],
          },
          {
            node: "div",
            options: [
              { key: "id", value: "react-select" },
              // { key: "name", value: "react-select" },
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
      {
        node: "div",
        options: [{ key: "class", value: "d-flex justify-content-center" }],
        children: [
          {
            node: "button",
            content: "Submit",
            options: [
              { key: "class", value: "btn btn-primary mt-3" },
              { key: "type", value: "submit" },
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

// Level 1 Components

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

//  Level 2 Components

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

// Core Functions

// Renderer
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

const pushData = (data) => {
  const form = document.getElementById(data.formID);
  console.log(form.elements);
  for (const key in data.data) {
    if (Object.hasOwnProperty.call(data.data, key)) {
      const element = data.data[key];
      console.log(form.elements[key]);
      form.elements[key].value = element;
    }
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

doMagic(document.body, FORM);

// doMagic(document.body, MAP);

// makeDom(document.body, CUSTOMTEMPLATE);

// doMagic(document.body, advancedSearch);
pushData(data);
