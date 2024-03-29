let searchInput = document.getElementById("searchInput");
let search = document.getElementById("search");
let off = document.getElementById("off");
let fontSelection = document.getElementById("font-selection");
let playElement = document.querySelector(".play");

searchInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    let findvalue = searchInput.value;
    if (findvalue.trim() === "") {
      alert("Please enter a word.");
    } else {
      setdata(findvalue);
    }
  }
});

fontSelection.addEventListener("change", function () {
  const select = document.getElementById("font-selection").value;
  console.log(select);

  if (select == "Arial") {
    document.body.style.fontFamily = select;
  } else if (select == "Verdana") {
    document.body.style.fontFamily = select;
  } else if (select == "Cursive") {
    document.body.style.fontFamily = select;
  } else if (select == "Tahoma") {
    document.body.style.fontFamily = select;
  } else if (select == "Trebuchet MS") {
    document.body.style.fontFamily = select;
  } else if (select == "Times New Roman") {
    document.body.style.fontFamily = select;
  } else if (select == "Georgia") {
    document.body.style.fontFamily = select;
  } else if (select == "Garamond") {
    document.body.style.fontFamily = select;
  } else if (select == "Courier New") {
    document.body.style.fontFamily = select;
  }
});

off.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "black";
  }
};

function setdata(findvalue) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${findvalue}`;
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);

      document.querySelector(".content").innerHTML = "";
      playElement.style.display = "block";

      let div = document.createElement("div");
      div.classList.add("detail");
      div.innerHTML = `
      
      <h2>${data[0].word}</h2>
      <div class="p"> 
                      <p id="p">${data[0].phonetic}</p>
      <div>
      <div class="noun">
        <h3>${data[0].meanings[0].partOfSpeech}</h3>
        <p id="line"></p>
      </div>
      <h4> meaning </h4>
      <div class="meaning"></div>
 

      <p id="Synonyms"> Synonyms <span> ${data[0].meanings[0].synonyms} </span> </p>

      
      <div class="noun">
        <h3>${data[0].meanings[1].partOfSpeech}</h3>
        <p id="line"></p>
      </div>
      <h4> meaning </h4>
      <div id="verb-meaning"></div>
      
      
      <div class="src">
        <p>Source<p> <a href=${data[0].sourceUrls[0]} target="_blank">'https://en.wiktionary.org/wiki/keyboard'</a>
      </div>

// `;

      let audio = new Audio();
      const sound = document.getElementById("sound");
      sound.addEventListener("click", function () {
        if (data[0].phonetics.length != 0) {
          for (let i = 0; i < data[0].phonetics.length; i++) {
            if (data[0].phonetics[i].audio != "") {
              // audio = new Audio("");
              audio = new Audio(data[0].phonetics[i].audio);
              console.log(audio);
              audio.play();
              break;
            } else {
              audio = new Audio("");
            }
          }
        }
        // audio.play();
        
      });

      document.querySelector(".content").appendChild(div);
      console.log(data);

      let meaning = document.getElementsByClassName("meaning")[0];
      let ul = document.createElement("ul");
      for (i = 0; i < data[0].meanings[0].definitions.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = data[0].meanings[0].definitions[i].definition;
        ul.appendChild(li);
        
      }
      meaning.appendChild(ul);
    

    let verbMeaning = document.getElementById("verb-meaning");
    let p = document.createElement("p")
    for(i=0; i< data[0].meanings[1].definitions.length; i++){
      let li = document.createElement("li");
      li.innerHTML = data[0].meanings[1].definitions[i].definition;
      p.appendChild(li);

    }
    verbMeaning.appendChild(p)

    })
    .catch((error) => {
      console.log(error);
    });
}

search.addEventListener("click", function () {
  let findvalue = searchInput.value;
  if (findvalue == "") {
    alert("please enter the word");
  } else {
    setdata(findvalue);
  }
});



 
