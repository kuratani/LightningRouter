({
  render : function (component, event, helper) {
    var token = event.getParam("token");
    var querystring = event.getParam("querystring");

    var route = JSON.parse(component.get("v.route"));
    if($A.util.isUndefined(token)) {
      token = component.get("v.init");
    }
    var cmpName = route[token];

    $A.createComponent(
      "c:" + cmpName,
      {
        "aura:Id": cmpName,
      },
      function(newCmp){
        if (component.isValid()) {
          var body = component.get("v.body");
          body.pop();
          body.push(newCmp);
          component.set("v.body", body);
        }
      }
    );
  }
})
