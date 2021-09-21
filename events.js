const clickMe = (a, b, c) => {
  alert("alert by clicking me" + a);
  console.log("param", a);
  console.log("param", b);
  console.log("param", c);
  console.log(a + b);
};

const changeMe = (e) => {
  e.preventDefault();
  var data = new FormData(document.getElementById("Form-1"));
  //   for a js object
  console.log(Object.fromEntries(data));

  //   for key value pairs
  console.log(...data);
};
