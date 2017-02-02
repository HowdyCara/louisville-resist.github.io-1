var fs = require("fs");
var handlebars = require("handlebars");


var editWarning = fs.readFileSync("./source/templates/edit-warning.hbs", "utf8");
var header = fs.readFileSync("./source/templates/header.hbs", "utf8");
var footer = fs.readFileSync("./source/templates/footer.hbs", "utf8");
var articlesTemplate = fs.readFileSync("./source/templates/articles.hbs", "utf8");

var articlesData = require("../source/data/articles.json");

var result = editWarning;
result += header;
var articlesTemplateAndData = handlebars.compile(articlesTemplate);
result += articlesTemplateAndData(articlesData);
result += footer;

fs.writeFileSync("./articles.html", result);
