var fs = require("fs");
var handlebars = require("handlebars");

var editWarning = fs.readFileSync("./source/templates/edit-warning.hbs", "utf8");
var header = fs.readFileSync("./source/templates/header.hbs", "utf8");
var footer = fs.readFileSync("./source/templates/footer.hbs", "utf8");
var eventsTemplate = fs.readFileSync("./source/templates/events.hbs", "utf8");
var eventsData = require("../source/data/events.json");

var result = editWarning;
result += header;
var eventsTemplateAndData = handlebars.compile(eventsTemplate);
result += eventsTemplateAndData(eventsData);
result += footer;

fs.writeFileSync("./events.html", result);
