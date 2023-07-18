var sortableOptions2 = {
  group: {
    name: "sortable-list-2",
    pull: true,
    put: true,
  },
  animation: 250,
  forceFallback: true

};

var containers = null;
containers = document.querySelectorAll(".container");
for (var i = 0; i < containers.length; i++) {
  new Sortable(containers[i], sortableOptions2);
}