data = [
  {
    name: "vishal",
    city: "kidfglcoole",
    state: "watedrford",
    postcode: "93d027",
    Image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "name 2",
    city: "kilswdfcoole",
    state: "waterdford",
    postcode: "93027",
    Image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "name 1",
    city: "kilcdoole",
    state: "wataerford",
    postcode: "93dfg027",
    Image: "https://randomuser.me/api/portraits/men/99.jpg",
  },
  {
    name: "name 3",
    city: "kilhcoole",
    state: "wateerford",
    postcode: "930f27",
    Image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "name 4",
    city: "rkilcoole",
    state: "waterhgford",
    postcode: "fg93027",
    Image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    name: "name 5",
    city: "kilcoole",
    state: "waterford",
    postcode: "93027",
    Image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

//create iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

candidates = cvIterator(data);
resume();

let btn = document.getElementById("next");
btn.addEventListener("click", resume);

function resume() {
  currentCandidate = candidates.next().value;
  let Image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    Image.innerHTML = `<img class="img-thumbnail"  src="${currentCandidate.Image}" alt="" />`;
    profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.city}</li>
                            <li class="list-group-item">${currentCandidate.state}</li>
                            <li class="list-group-item">${currentCandidate.Image}</li>
                            <li class="list-group-item">${currentCandidate.postcode}</li>
                        </ul>`;

  } else {
    alert("End of candidates Application");
    window.location.reload();
  }
}
