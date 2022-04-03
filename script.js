var gitData = [
    {
      line: 4
    },{
      line: 4,
      style: "commit",
      img:
        "https://spawnpk.net/forums/uploads/monthly_2017_07/K.png.a2c097685b01729c98069b9a0e4c20b6.png",
      spacing: 0,
      msg: "Internship3"
    },{
      line: 4,
      tag: "Feb 2020",
      style: "start",
      start: 3,
      spacing: 0,
      msg: "new internship branch"
    },{
      line: 3,
      style: "commit",
      img:
        "https://spawnpk.net/forums/uploads/monthly_2017_07/K.png.a2c097685b01729c98069b9a0e4c20b6.png",
      spacing: 1,
      msg: "Highschool"
    },{
      line: 3,
      tag: "Sep 2018",
      style: "start",
      start: 1,
      spacing: 1,
      msg: "new study branch"
    },{
      line: 3,
      style: "merge",
      merge: 1,
      spacing: 1,
      msg: "merge study"
    },{
      line: 4,
      style: "merge",
      merge: 3,
      spacing: 0,
      msg: "merge internship"
    },{
      line: 4,
      style: "commit",
      img:
        "https://spawnpk.net/forums/uploads/monthly_2017_07/K.png.a2c097685b01729c98069b9a0e4c20b6.png",
      spacing: 0,
      msg: "Intership2"
    },{
      line: 4,
      tag: "Feb 2018",
      style: "start",
      start: 3,
      spacing: 0,
      msg: "new internship branch"
    },{
      line: 4,
      style: "merge",
      merge: 3,
      spacing: 0,
      msg: "merge internship"
    },{
      line: 4,
      style: "commit",
      img:
        "https://spawnpk.net/forums/uploads/monthly_2017_07/K.png.a2c097685b01729c98069b9a0e4c20b6.png",
      spacing: 0,
      msg: "Internship1"
    },{
      line: 4,
      tag: "Sep 2016",
      style: "start",
      start: 3,
      spacing: 0,
      msg: "new internship branch"
    },
    {
      line: 3,
      style: "commit",
      img:
        "https://spawnpk.net/forums/uploads/monthly_2017_07/K.png.a2c097685b01729c98069b9a0e4c20b6.png",
      spacing: 1,
      msg: "Highschool"
    },
    {
      line: 3,
      tag: "Sep 2015",
      style: "start",
      start: 1,
      spacing: 1,
      msg: "new study branch"
    },
    {
      line: 2,
      style: "commit",
      img:
        "https://spawnpk.net/forums/uploads/monthly_2017_07/K.png.a2c097685b01729c98069b9a0e4c20b6.png",
      spacing: 2,
      msg: "cashier"
    },
    {
      line: 2,
      tag: "Jan 2015",
      style: "start",
      start: 1,
      spacing: 2,
      msg: "new work branch"
    },
    {
      line: 1,
      style: "commit",
      img:
        "https://spawnpk.net/forums/uploads/monthly_2017_07/K.png.a2c097685b01729c98069b9a0e4c20b6.png",
      spacing: 3,
      msg: "initial commit"
    }
  ];
  
  var git = $("#git");
  console.log("data:", gitData);
  var str = "";
  gitData.forEach(function (x, i) {
    str += "<div class='row'>";
  
    if (x.tag) {
      str += "<div class='tag color" + x.line + "'>" + x.tag + "</div>";
      str += "<div class='hline hl-h color" + x.line + "'></div>";
    } else {
      str += "<div class='spacer-1'></div>";
    }
  
    for (var i = 1; i <= x.line; i++) {
      if (i == x.line) {
        // Last
        if (x.style == "commit") {
          str +=
            "<div class='bullet b-img color" +
            x.line +
            "'><img src=" +
            x.img +
            "></div>";
        } else if (x.style == "start") {
          str += "<div class='bottomcornerline color" + x.line + "'></div>";
        } else if (x.style == "merge") {
          str += "<div class='topcornerline color" + x.line + "'></div>";
        } else {
          str +=
              "<div class='vline color" +
              i +
              "'></div>";
        }
      } else {
        if (x.style == "start") {
          if (i < x.start) {
            str +=
              "<div class='block'><div class='vline color" +
              i +
              "'></div><div class='hline hl-l hl-h color" +
              x.line +
              "'></div><div class='hline hl-r hl-h color" +
              x.line +
              "'></div></div>";
          } else if (i == x.start) {
            str +=
                "<div class='block'><div class='vline color" +
                i +
                "'></div><div class='hline hl-l hl-h color" +
                x.line +
                "'></div><div class='hline hl-r color" +
                x.line +
                "'></div><div class='bullet b-s color" +
                x.line +
                "'></div></div>";
          } else if (i > x.start) {
            str +=
              "<div class='block'><div class='vline color" +
              i +
              "'></div><div class='hline color" +
              x.line +
              "'></div><div class='hline color" +
              x.line +
              "'></div></div>";
          }
        } else if (x.style == "commit") {
          str += "<div class='vline color" + i + "'></div>";
          for (var j = 1; j < x.line; j++) {}
        } else if (x.style == 'merge') {
          if (i < x.merge) {
            str +=
              "<div class='vline color" +
              i +
              "'></div>";
          } else if (i == x.merge) {
            str +=
                "<div class='block'><div class='vline color" +
                i +
                "'></div><div class='hline hl-r color" +
                x.line +
                "'></div><div class='bullet b-s color" +
                x.line +
                "'></div></div>";
          } else if (i > x.merge) {
            str +=
              "<div class='block'><div class='vline color" +
              i +
              "'></div><div class='hline color" +
              x.line +
              "'></div><div class='hline color" +
              x.line +
              "'></div></div>";
          }
        } else {
          str +=
              "<div class='vline color" +
              i +
              "'></div>";
        }
      }
    }
  
    if (x.msg) {
      str +=
        "<div class='commit c-" +
        x.spacing +
        " color" +
        x.line +
        "'><div></div><div>" +
        x.msg +
        "</div></div>";
    }
  
    str += "</div>";
  });
  git.append(str);