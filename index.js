console.log("hello worldsss");
// variables

let shafts = AvailableShafts;
let OrginalShafts = AvailableShafts;
// Events

$("#Qone").click(function () {
  event.preventDefault();
  //hide Question
  $(".questionOne").addClass("hide");

  console.log($("#Steel").is(":checked"));
  console.log($("#Graphite").is(":checked"));
  getOptions($("#Steel").is(":checked"));

  $(".questionTwo").removeClass("hide");
  buildQtwo();
});

$("#Qtwo").click(function () {
  event.preventDefault();

  $(".questionTwo").addClass("hide");

  getNextOption("tempo", $("input[name=tempo]:checked", ".tempoOPtions").val());
  $(".questionThree").removeClass("hide");
  buildQThree();
});

$("#Qthree").click(function () {
  event.preventDefault();

  $(".questionThree").addClass("hide");

  getNextFour(
    "SwingSpeed",
    $("input[name=SwingSpeed]:checked", ".swingSpeedOPtions").val()
  );
  $(".questionFour").removeClass("hide");
  BuildLastOption();

  //   buildQfour();
});

$("#Qfour").click(function () {
  event.preventDefault();

  $(".questionFour").addClass("hide");
  console.log();
  getNextfive(
    "relese",
    $("input[name=relese]:checked", ".releaseOPtions").val()
  );

  $(".questionFive").removeClass("hide");
  BuildFithOption();
});

$("#QFive").click(function () {
  event.preventDefault();

  $(".questionFive").addClass("hide");
  console.log();
  getNextSix(
    "trajectory",
    $("input[name=trajectory]:checked", ".TrajectoryOPtions").val()
  );

  $(".questionSix").removeClass("hide");
  BuildSixOption();
});

$("#QSix").click(function () {
  event.preventDefault();

  $(".questionSix").addClass("hide");
  console.log();
  getNextSeven("spin", $("input[name=spin]:checked", ".spinOPtions").val());

  $(".questionSeven").removeClass("hide");
  BuildSevenOption();
});

$("#QSeven").click(function () {
  event.preventDefault();

  $(".questionSeven").addClass("hide");
  console.log();
  getNextEight(
    "distance_control",
    $("input[name=distance_control]:checked", ".distance_controlOPtions").val()
  );

  $(".questioneight").removeClass("hide");
  BuildEighOption();
});

$("#QEight").click(function () {
  event.preventDefault();

  $(".questioneight").addClass("hide");
  console.log();
  getfinalPoints(
    "weight",
    $("input[name=weight]:checked", ".weightOPtions").val()
  );

  $(".answerReveal ").removeClass("hide");
  $(".myChartTwo ").removeClass("opacityZero");

  // generateChart();
  // $(".myshaft").text(winner.shaft_name);
});

// Functions;
function checkAnswer() {
  // if (shafts.length > 1) {
  //   $(".questionFour").removeClass("hide");
  //   BuildLastOption();
  // } else {
  //   $(".answerReveal").removeClass("hide");
  //   $(".myshaft").text(shafts[0].shaft_name);
  // }
}
function getfinalPoints(myKey, value) {
  console.log("value", value);
  console.log("before", shafts);
  shafts = shafts.filter((obj) => obj.weight === value);
  console.log("final", value);
  let num = 0;
  if (value === "LITE") {
    num = 3;
  }
  if (value === "MID") {
    num = 5;
  }
  if (value === "TOUR") {
    num = 8;
  }
  if (value === "HEAVY") {
    console.log("its heavy!!! ");
    num = 10;
  }
  console.log("my number", num);
  addData(myChartTwo, "weight", num);
  OrginalShafts.forEach(function (arrayItem) {
    if (arrayItem.weight === value) {
      arrayItem.count += 10;
    }
  });
  updateChart("answer reveal ");
}

function getNextEight(myKey, value) {
  console.log("value", value);
  console.log("before", shafts);
  shafts = shafts.filter((obj) => obj.distance_control === value);
  console.log("final", shafts);

  let num = 0;
  if (value === "DISTANCE/CONTROL") {
    num = 5;
  } else if (value === "DISTANCE") {
    num = 10;
  }

  addData(myChartTwo, "DISTANCE (10) or CONTROL (0)", num);
  OrginalShafts.forEach(function (arrayItem) {
    if (arrayItem.distance_control === value) {
      arrayItem.count += 10;
    }
  });

  updateChart(" Distance question");
}
function getNextSeven(myKey, value) {
  console.log("value", value);
  console.log("before", shafts);
  shafts = shafts.filter((obj) => obj.spin === value);
  console.log("final", shafts);
  let num = 0;
  if (value === "MID") {
    num = 5;
  } else if (value === "HIGH") {
    num = 10;
  }

  addData(myChartTwo, "Spin", num);

  OrginalShafts.forEach(function (arrayItem) {
    if (arrayItem.spin === value) {
      arrayItem.count += 10;
    }
  });

  updateChart(" Spin question");
  checkAnswer();
}

function getNextSix(myKey, value) {
  console.log("value", value);
  console.log("before", shafts);
  shafts = shafts.filter((obj) => obj.trajectory === value);
  console.log("final", shafts);

  let num = 0;
  if (value === "MID") {
    num = 5;
  } else if (value === "HIGH") {
    num = 10;
  }

  addData(myChartTwo, "trajectory", num);

  OrginalShafts.forEach(function (arrayItem) {
    if (arrayItem.trajectory === value) {
      arrayItem.count += 10;
    }
  });

  updateChart(" quetsion Five");
  checkAnswer();
}

function getNextfive(myKey, value) {
  console.log("value", value);
  console.log("before", shafts);
  shafts = shafts.filter((obj) => obj.relese === value);
  console.log("final", shafts);

  let num = 0;
  if (value === "MID") {
    num = 5;
  } else if (value === "LATE") {
    num = 10;
  }

  addData(myChartTwo, "Release", num);
  OrginalShafts.forEach(function (arrayItem) {
    if (arrayItem.relese === value) {
      arrayItem.count += 10;
    }
  });

  updateChart(" LAST QUESTION");
  checkAnswer();
}

function BuildEighOption(myKey, value) {
  let weightOptions = [];
  let newhtml = "";
  OrginalShafts.forEach(function (arrayItem) {
    var x = arrayItem.weight;

    weightOptions.indexOf(x) === -1
      ? weightOptions.push(x)
      : console.log("This item already exists");
  });
  console.log(weightOptions);

  weightOptions.forEach(function (arrayItem) {
    let htmlOPtion = `
      <div class="form-check">
      <input class="form-check-input" qTwoinput" type="radio" name="weight" id="${arrayItem}" value="${arrayItem}" >
      <label class="form-check-label" for="flexRadioDefault2">
        ${arrayItem}
        </label>
            </div>
      `;
    newhtml += htmlOPtion;
  });
  $(".weightOPtions").append(newhtml);
}
function BuildSevenOption(myKey, value) {
  let distance_controlOptions = [];
  let newhtml = "";
  OrginalShafts.forEach(function (arrayItem) {
    var x = arrayItem.distance_control;

    distance_controlOptions.indexOf(x) === -1
      ? distance_controlOptions.push(x)
      : console.log("This item already exists");
  });
  console.log(distance_controlOptions);

  distance_controlOptions.forEach(function (arrayItem) {
    let htmlOPtion = `
      <div class="form-check">
      <input class="form-check-input" qTwoinput" type="radio" name="distance_control" id="${arrayItem}" value="${arrayItem}" >
      <label class="form-check-label" for="flexRadioDefault2">
        ${arrayItem}
        </label>
            </div>
      `;
    newhtml += htmlOPtion;
  });
  $(".distance_controlOPtions").append(newhtml);
}

function BuildSixOption(myKey, value) {
  let spinOptions = [];
  let newhtml = "";
  OrginalShafts.forEach(function (arrayItem) {
    var x = arrayItem.spin;

    spinOptions.indexOf(x) === -1
      ? spinOptions.push(x)
      : console.log("This item already exists");
  });
  console.log(spinOptions);

  spinOptions.forEach(function (arrayItem) {
    let htmlOPtion = `
      <div class="form-check">
      <input class="form-check-input" qTwoinput" type="radio" name="spin" id="${arrayItem}" value="${arrayItem}" >
      <label class="form-check-label" for="flexRadioDefault2">
        ${arrayItem}
        </label>
            </div>
      `;
    newhtml += htmlOPtion;
  });
  $(".SpinOPtions").append(newhtml);
}

function BuildFithOption(myKey, value) {
  let trajectoryOptions = [];
  let newhtml = "";
  OrginalShafts.forEach(function (arrayItem) {
    var x = arrayItem.trajectory;

    trajectoryOptions.indexOf(x) === -1
      ? trajectoryOptions.push(x)
      : console.log("This item already exists");
  });
  console.log(trajectoryOptions);

  trajectoryOptions.forEach(function (arrayItem) {
    let htmlOPtion = `
      <div class="form-check">
      <input class="form-check-input" qTwoinput" type="radio" name="trajectory" id="${arrayItem}" value="${arrayItem}" >
      <label class="form-check-label" for="flexRadioDefault2">
        ${arrayItem}
        </label>
            </div>
      `;
    newhtml += htmlOPtion;
  });
  $(".TrajectoryOPtions").append(newhtml);
}
function BuildLastOption(myKey, value) {
  let releseOptions = [];
  let newhtml = "";
  OrginalShafts.forEach(function (arrayItem) {
    var x = arrayItem.relese;

    releseOptions.indexOf(x) === -1
      ? releseOptions.push(x)
      : console.log("This item already exists");
  });
  console.log(releseOptions);

  releseOptions.forEach(function (arrayItem) {
    let htmlOPtion = `
      <div class="form-check">
      <input class="form-check-input" qTwoinput" type="radio" name="relese" id="${arrayItem}" value="${arrayItem}" >
      <label class="form-check-label" for="flexRadioDefault2">
        ${arrayItem}
        </label>
            </div>
      `;
    newhtml += htmlOPtion;
  });
  $(".releaseOPtions").append(newhtml);
}
function getNextFour(myKey, value) {
  shafts = shafts.filter((obj) => obj.swing_speed === value);
  console.log(shafts);

  OrginalShafts.forEach(function (arrayItem) {
    if (arrayItem.swing_speed === value) {
      arrayItem.count += 10;
    }
  });

  updateChart(" question Two");
}

function getNextOption(myKey, value) {
  shafts = shafts.filter((obj) => obj.tempo === value);
  console.log(shafts);
  let num = 0;
  if (value === "QUICK") {
    num = 10;
  } else if (value === "MODERATE") {
    num = 5;
  }
  addData(myChartTwo, "Tempo", num);

  OrginalShafts.forEach(function (arrayItem) {
    if (arrayItem.tempo === value) {
      arrayItem.count += 10;
    }
  });
  updateChart(" question Two");
}

function buildQThree() {
  let swing_speedOptions = [];
  let newhtml = "";
  OrginalShafts.forEach(function (arrayItem) {
    var x = arrayItem.swing_speed;

    swing_speedOptions.indexOf(x) === -1
      ? swing_speedOptions.push(x)
      : console.log("This item already exists");
  });
  console.log(swing_speedOptions);

  swing_speedOptions.forEach(function (arrayItem) {
    let htmlOPtion = `
    <div class="form-check">
    <input class="form-check-input" qTwoinput" type="radio" name="SwingSpeed" id="${arrayItem}" value="${arrayItem}" >
    <label class="form-check-label" for="flexRadioDefault2">
      ${arrayItem}
      </label>
          </div>
    `;
    newhtml += htmlOPtion;
  });
  $(".swingSpeedOPtions").append(newhtml);
}

function getOptions(steel) {
  if (steel) {
    shafts = shafts.filter((obj) => obj.material != "Graphite");
    OrginalShafts.forEach(function (arrayItem) {
      if (arrayItem.material === "STEEL") {
        arrayItem.count += 10;
      }
    });
    console.log(shafts);
  } else {
    shafts = shafts.filter((obj) => obj.material != "STEEL");

    OrginalShafts.forEach(function (arrayItem) {
      if (arrayItem.material === "Graphite") {
        arrayItem.count += 10;
      }
    });

    console.log(shafts);
  }
  updateChart("questin one");
}

function buildQtwo() {
  let tempoOptions = [];
  let newhtml = "";
  OrginalShafts.forEach(function (arrayItem) {
    var x = arrayItem.tempo;

    tempoOptions.indexOf(x) === -1
      ? tempoOptions.push(x)
      : console.log("This item already exists");
  });
  console.log(tempoOptions);

  tempoOptions.forEach(function (arrayItem) {
    let htmlOPtion = `
    <div class="form-check">
    <input class="form-check-input" qTwoinput" type="radio" name="tempo" id="${arrayItem}" value="${arrayItem}" >
    <label class="form-check-label" for="flexRadioDefault2">
      ${arrayItem}
      </label>
          </div>
    `;
    newhtml += htmlOPtion;
  });
  $(".tempoOPtions").append(newhtml);
}

//////

let myData = [];
let myCount = [];

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: myData,
    datasets: [
      {
        // label: "# of Votes",
        data: myCount,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 5,
      },
    ],
  },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
});

function updateChart(location) {
  console.log(location);
  let newData = [];
  let newCount = [];
  OrginalShafts.forEach(function (arrayItem) {
    removeData(myChart);
  });
  OrginalShafts.forEach(function (arrayItem) {
    var x = arrayItem.shaft_name;
    var y = arrayItem.count;

    addData(myChart, x, y);
    newData.push(x);
    newCount.push(y);
  });
}

updateChart();

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
    console.log("yolo");
    dataset.data.pop();
  });
  chart.update();
}

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

$(".clearDatabtn").click(function () {
  event.preventDefault();
  console.log("removing dat");
  removeData(myChart);
});

const ctxx = document.getElementById("myChartTwo").getContext("2d");
const myChartTwo = new Chart(ctxx, {
  type: "radar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Stats",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, .5)",
          "rgba(54, 162, 235, .5)",
          "rgba(255, 206, 86, .5)",
          "rgba(75, 192, 192, .5)",
          "rgba(153, 102, 255, .5)",
          "rgba(255, 159, 64, .5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 5,
      },
    ],
  },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
});
