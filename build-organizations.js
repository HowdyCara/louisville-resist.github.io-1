var fs = require("fs");
var handlebars = require("handlebars");


var header = fs.readFileSync("./templates/header.hbs", "utf8");
var footer = fs.readFileSync("./templates/footer.hbs", "utf8");
var organizationsTemplate = fs.readFileSync("./templates/organizations.hbs", "utf8");
var organizationsData = require("./data/organizations.json");

var result = header;
var organizationsTemplateAndData = handlebars.compile(organizationsTemplate);
result += organizationsTemplateAndData(organizationsData);
result += footer;

fs.writeFileSync("./organizations.html", result);


//build home page
var homeContent = fs.readFileSync("./templates/home.hbs", "utf8");
var homePage = header;
homePage += homeContent;
homePage += footer;

fs.writeFileSync("./index.html", homePage);

//build submit page
var submitContent = fs.readFileSync("./templates/submit.hbs", "utf8");
var submitPage = header;
submitPage += submitContent;
submitPage += footer;

fs.writeFileSync("./submit.html", submitPage);