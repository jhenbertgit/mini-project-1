/**
 * script from https://gwhs.i.gov.ph/pst/
 */
(function (d, eId) {
  var js,
    gjs = d.getElementById(eId);
  js = d.createElement("script");
  js.id = "gwt-pst-jsdk";
  js.src = "//gwhs.i.gov.ph/pst/gwtpst.js?" + new Date().getTime();
  gjs.parentNode.insertBefore(js, gjs);
})(document, "pst-container");
