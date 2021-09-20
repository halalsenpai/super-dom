const clickMe = (a, b, c) => {
  alert("alert by clicking me" + a);
  console.log("param", a);
  console.log("param", b);
  console.log("param", c);
  console.log(a + b);
};

const changeMe = (e) => {
  e.preventDefault();
  console.log(e);
  var ed = document.getElementById("myForm");
  console.log(ed.elements);

  var data = new FormData(document.getElementById("myForm"));
  //   for a js object
  console.log(Object.fromEntries(data));

  //   for key value pairs
  console.log(...data);
};

// var ed = document.getElementById("myForm");
