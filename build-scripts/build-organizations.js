var fs = require("fs");
var handlebars = require("handlebars");

var editWarning = fs.readFileSync("./source/templates/edit-warning.hbs", "utf8");
var header = fs.readFileSync("./source/templates/header.hbs", "utf8");
var footer = fs.readFileSync("./source/templates/footer.hbs", "utf8");
var organizationsTemplate = fs.readFileSync("./source/templates/organizations.hbs", "utf8");

var organizationsData = require("../source/data/organizations.json");

var result = editWarning;
result += header;
var organizationsTemplateAndData = handlebars.compile(organizationsTemplate);
result += organizationsTemplateAndData(organizationsData);
result += footer;

fs.writeFileSync("./organizations.html", result);


//build home page
var homeContent = fs.readFileSync("./source/templates/home.hbs", "utf8");
var homePage = editWarning;
homePage += header;
homePage += homeContent;
homePage += footer;

fs.writeFileSync("./index.html", homePage);

//build submit page
var submitContent = fs.readFileSync("./source/templates/submit.hbs", "utf8");
var submitPage = editWarning;
submitPage += header;
submitPage += submitContent;
submitPage += footer;

fs.writeFileSync("./submit.html", submitPage);
