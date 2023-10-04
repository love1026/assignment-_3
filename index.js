var names = ["lovi", "John", "ravi"];
for (i = 0; i < names.length; i++) {
  var name = names[i];
  if (name[0] === "j" || name[0] === "J") {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("hello " + names[i]);
  }
}
