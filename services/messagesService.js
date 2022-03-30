// internal database (code) can be on database, or object, yet out of scope

var internalDatabase = [
  {context: ["Hello", "Hi"], response: "Welcome to StationFive."},
  {context: ["Goodbye", "bye"], response: "Thank you, see you around."}
]

exports.post = function (message) {
  var element = internalDatabase.find(data => {
    var isExists = false;
    data.context.forEach(context => {
      if(message.includes(context)) {
        isExists = true; 
      }
    });
    return isExists;
  });
  return element ? element.response : "Sorry, I don't understand."
}