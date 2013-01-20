Template.tmp.route = function () {
	console.log("handler");
	console.log(Session.get("currentPage"));
  if (Session.get("currentPage") == "main") {
  	console.log("hooray");
    return true;
  } else {
  	console.log("boo");
    return false;
  }
}