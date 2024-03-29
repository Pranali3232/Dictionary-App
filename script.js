// let url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
// let searchInput = document.getElementById("searchInput")
// let content = document.getElementById("content")
// let search = document.getElementById("search")
// console.log("heyy baby")

// search.addEventListener("click", ()=>{
//     let searchInput = document.getElementById("searchInput").value
//     fetch(`${url} ${searchInput}`)
//     .then(response => response.json())
//     .then((data)=>{
//         console.log(data);
//         content.innerHTML`
//         `
//     })

// })
// fetch("https://api.dictionaryapi.dev/api/v2/entries/en/<word>")
// fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key")
//     .then(function(res){
//         console.log(res.json())
//     })
//     .then((data) => console.log(data));

//https://api.dictionaryapi.dev/media/pronun

// sound.setAttribute("src", https:${data[0].phonetics[0].audio})
// console.log(sound)

// let play = document.getElementById("play")
// play.addEventListener("click",function(){
//   if(data[0].phonetics.length!=0){
//     for(let i=0;i<data[0].phonetics.length;i++){
//       if(data[0].phonetics[i].Sound!=""){
//         sound = new sound(data[0].phonetics[i].sound)
//         console.log(sound)
//         break

//       }
//     }
//   }
//   sound.play()
// })

// off.addEventListener('click',function(){
//     off.classList.off('active');
//     if(off.classList.contains('active')){
//       console.log('toggle on')
//     }else{
//       console.log('toggle off')
//     }
//   })

// Remove styles for dark mode
document.body.style.backgroundColor = "";

let audio;
const sound = document.getElementById("sound");
sound.addEventListener("click", function () {
  if (data[0].phonetics.length != 0) {
    for (let i = 0; i < data[0].phonetics.length; i++) {
      if (data[0].phonetics[i].audio) {
        // Check if audio URL is available
        audio = new Audio(data[0].phonetics[i].audio);
        console.log(audio);
        audio.play();
        break;
      }
    }
  }
});

off.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    off.classList.remove("fa-toggle-off");
    off.classList.add("fa-toggle-on");

    document.querySelectorAll("h2").forEach(function (h2) {
      h2.style.color = "#fff";
    });
  } else {
    off.classList.remove("fa-toggle-off");
    off.classList.add("fa-toggle-on");
  }
};


// Select the font selection dropdown 
const fontSelection = document.getElementById("font-selection");

// Add event listener for change event
fontSelection.addEventListener("change", function() {
    // Get the selected font family value
    const selectedFontFamily = fontSelection.value;

    // Apply the selected font family to the body element
    if (fontSelection.selectedIndex === 1) { // Check if the second option is selected
        document.body.style.fontFamily = selectedFontFamily;
    }
});



//*******************async await */

async function setdata(findvalue) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${findvalue}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
  (findvalue){
    const url = ``
    const respomse = await fetch(url)
    const data = await respomse.json();
  }
asyn function setda

async function setdata(function){
  const url = ``
}

async function setdata(findvalue) {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${findvalue}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Further processing of data can be done here
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}





async function setdata(findvalue) {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${findvalue}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
// <!-- <audio id="sound"></audio> -->
//       <!-- <div class="word">
//         <div class="word-p">
//           <h1>keyboard</h1>
//           <p id="p">/"ki:bo:d</p>
//         </div>
//         <div class="play">
//           <i id="play" class="fa fa-play" aria-hidden="true"></i>
//         </div>
//       </div>
//       <div class="noun">
//         <h3>noun</h3> 
//         <p id="line">ar</p>
//       </div>
//       <div class="meaning">
//         <h2>Meaning</h2>
//         <p>a set of kry to oprtate a type scripy computer etc</p>
//         <p>a compount of many instruments including the piano, organ and happiness cinsistand usally black and white  key that dcause difference tines and meanings.</p>
//         <p>a di</p>
//       </div>
//       <div class="verb"></div> -->



// / document.h2.style.color = '#fff'
    //   document.querySelectorAll('h2').forEach(function(h2) {
    //     h2.style.color = '#fff';
    // });





    // if (document.body.classList.contains("dark-mode")) {
    //   // off.classList.remove("fa-toggle-off");
    //   // off.classList.add("fa-toggle-on");
    //   document.body.style.backgroundColor = "black";
    //   // document.body.style.backgroundColor = '#222';
    //   document.body.style.color = "#fff";
    //   // document.h2.style.color = '#fff'
    //   //  document.querySelectorAll('h2').forEach(function(h2) {
    //   //  h2.style.color = '#fff';
    //   // });
    // } else {
    //   document.querySelectorAll("h2").forEach(function (h2) {
    //     h2.style.color = ""; // Reverts to default color
    //   });



    searchInput.addEventListener('keyup', (e) =>{
      if(e.keyCode === 13){
        console.log(e.target.value)
      }
    })




    async function(findvalue){


    let 

    }



     // <li>${data[0].meanings[0].definitions[0].definition}<li>
        // <li>${data[0].meanings[0].definitions[1].definition}<li>
        // <li>${data[0].meanings[0].definitions[2].definition}<li>







      //   let audio;
      // const sound = document.getElementById("sound");
      // sound.addEventListener("click", function () {
      //   if (data[0].phonetics.length != 0) {
      //     for (let i = 0; i < data[0].phonetics.length; i++) {
      //       if (data[0].phonetics[i].audio != "") {
      //         if (audio) {
      //           audio.pause();
      //           audio.currentTime = 0;
      //         }
      //         audio = new Audio(data[0].phonetics[i].audio);
      //         console.log(audio);
      //         audio.play();
      //         break;
      //       }
      //     }
      //   }
      //   // audio.play();
      // });
    //