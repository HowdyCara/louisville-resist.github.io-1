var fs = require("fs");
var handlebars = require("handlebars");


var header = fs.readFileSync("./templates/header.hbs", "utf8");

var footer = fs.readFileSync("./templates/footer.hbs", "utf8");

var articlesTemplate = fs.readFileSync("./templates/articles.hbs", "utf8");



var socialData = require("./data/social-media.json");
var eventsData = require("./data/events.json");
var organizationsData = require("./data/organizations.json");

var result = header;


var socialTemplateAndData = handlebars.compile(articlesTemplate);
result += socialTemplateAndData(socialData);

result += footer;


fs.writeFileSync("./social.html", result);