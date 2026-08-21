// Trackr — minimal vanilla JS, no build step required.

document.addEventListener('DOMContentLoaded', function () {
  var chips = document.querySelectorAll('.filter-chip');
  var rows = document.querySelectorAll('.program-row');

  if (!chips.length || !rows.length) return;

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');

      var filter = chip.getAttribute('data-filter');

      rows.forEach(function (row) {
        var category = row.getAttribute('data-category');
        var show = filter === 'all' || filter === category;
        row.style.display = show ? '' : 'none';
      });
    });
  });
});
