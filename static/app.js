// Progressive enhancement only. The site is complete without JavaScript: every
// row, score and link is present in the HTML. This script adds a presentation
// filter on the comparison page. It never fetches data or sends anything.
(function () {
  "use strict";

  var form = document.querySelector("[data-model-filter]");
  if (!form) {
    return;
  }

  var toggles = Array.prototype.slice.call(
    form.querySelectorAll("input[data-model-toggle]")
  );
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("[data-model]")
  );
  if (!toggles.length || !rows.length) {
    return;
  }

  var form_ = form;
  form_.hidden = false;

  function apply() {
    var visible = {};
    toggles.forEach(function (input) {
      visible[input.getAttribute("data-model-toggle")] = input.checked;
    });
    rows.forEach(function (row) {
      var slug = row.getAttribute("data-model");
      row.setAttribute(
        "data-model-hidden",
        visible[slug] === false ? "true" : "false"
      );
    });
  }

  toggles.forEach(function (input) {
    input.addEventListener("change", apply);
  });

  apply();
})();
