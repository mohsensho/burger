const orm = require('../config/orm');

const burger = {
  view: function (cbfunc) {
    orm.selectAll('burgers', cbfunc);
  },
  create: function (burgerName, cbfunc) {
    const newBurger = { burger_name: burgerName };
    orm.insertOne('burgers', newBurger, cbfunc);
  },
  devour: function (id, cbfunc) {
    orm.updateOne('burgers', { devoured: 1 }, { id: id }, cbfunc);
  }
}

module.exports = burger;