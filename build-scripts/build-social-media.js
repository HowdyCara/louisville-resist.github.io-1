var fs = require("fs");
var handlebars = require("handlebars");

var editWarning = fs.readFileSync("./source/templates/edit-warning.hbs", "utf8");
var header = fs.readFileSync("./source/templates/header.hbs", "utf8");
var footer = fs.readFileSync("./source/templates/footer.hbs", "utf8");
var articlesTemplate = fs.readFileSync("./source/templates/articles.hbs", "utf8");

var socialData = require("../source/data/social-media.json");

var result = editWarning;
result += header;
var socialTemplateAndData = handlebars.compile(articlesTemplate);
result += socialTemplateAndData(socialData);
result += footer;

fs.writeFileSync("./social.html", result);
