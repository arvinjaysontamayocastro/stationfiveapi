// internal database (code) can be on database, or object, yet out of scope

var internalDatabase = [
  { contextLowerCase: ["hello", "hi"], context: ["Hello", "Hi"], response: "Welcome to StationFive." },
  { contextLowerCase: ["goodbye", "bye"], context: ["Goodbye", "bye"], response: "Thank you, see you around." }
]

exports.post = function (message) {
  var messageLowerCase = message.toLowerCase();
  var index = -1;
  var response = "";
  var contextFound = ""; // note, this can be used in the future, for now, just set its value
  internalDatabase.foreach (data => {
    data.context.forEach(context => {
      var indexOfContext = messageLowerCase.indexOf(context.toLowerCase);
      if (indexOfContext != -1 && (index === -1 || index > indexOfContext)) { // note, decided to have internalDatabase.contextLowerCase for faster output (this in concept should have input of .toLowerCase() when inputing)
        index = indexOfContent;
        contextFound = context;
        response = data.response;
      }
    });
  });
  return contextFound ? response : "Sorry, I don't understand."
}