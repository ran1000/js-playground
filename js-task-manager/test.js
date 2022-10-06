const Controller = require("./controller");
const View = require("./view");
const Repository = require("./repository");
const Router = require("./router");
const prompt = require('prompt');
prompt.start();

const view = new View();
const repository = new Repository();
const controller = new Controller(view, repository);
new Router(controller).run();
