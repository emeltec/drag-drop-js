var opts = {
  group: '.group',
  filter: '.header',
  draggable: '.item',
  ghostClass: "ghost",
};

var el = document.getElementById('main');
var sortable = Sortable.create(el, opts);
var el = document.getElementById('tunnel');
var sortable = Sortable.create(el, opts);

var el = document.getElementById('zone');
var sortable = Sortable.create(el, opts);

//You can also define item

/*

  MAIN Sortable

    Section A Sortable

      Zone 1 Sortable

        DEVICE #1

        DEVICE #2

      Zone 2 Sortable

    Section B Sortable


*/