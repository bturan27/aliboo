let givenName;
setTimeout(() => {
  givenName = "Teknasyon";
  console.log(asyncExample());
}, 3000);
function asyncExample() {
  return `Execution of "asyncExample()" function, and givenName is "${givenName}".`;
}
console.log(asyncExample());
console.log("World.");