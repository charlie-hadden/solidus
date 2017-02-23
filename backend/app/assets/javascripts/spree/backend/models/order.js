//= require spree/backend/routes
//= require spree/backend/collections/line_items

Spree.Models || (Spree.Models = {});

Spree.Models.Order = Backbone.Model.extend({
  urlRoot: Spree.routes.orders_api,
  idAttribute: "number",

  relations: {
    "line_items": Spree.Collections.LineItems
  },

  advance: function(opts) {
    var options = {
      url: Spree.routes.checkouts_api + "/" + this.id + "/advance",
      type: 'PUT',
    };
    _.extend(options, opts);
    return this.fetch(options)
  }
});
