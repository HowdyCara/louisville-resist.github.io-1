var fs = require("fs");
var handlebars = require("handlebars");


var header = fs.readFileSync("./templates/header.hbs", "utf8");
var footer = fs.readFileSync("./templates/footer.hbs", "utf8");
var eventsTemplate = fs.readFileSync("./templates/events.hbs", "utf8");
var eventsData = require("./data/events.json");

var result = header;
var eventsTemplateAndData = handlebars.compile(eventsTemplate);
result += eventsTemplateAndData(eventsData);
result += footer;

fs.writeFileSync("./events.html", result);