var fs = require("fs");
var handlebars = require("handlebars");


var header = fs.readFileSync("./templates/header.hbs", "utf8");

var footer = fs.readFileSync("./templates/footer.hbs", "utf8");

var articlesTemplate = fs.readFileSync("./templates/articles.hbs", "utf8");



var articlesData = require("./data/articles.json");
var eventsData = require("./data/events.json");
var organizationsData = require("./data/organizations.json");

var result = header;


var articlesTemplateAndData = handlebars.compile(articlesTemplate);
result += articlesTemplateAndData(articlesData);

result += footer;


fs.writeFileSync("./articles.html", result);