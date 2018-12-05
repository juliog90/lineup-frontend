var matchId;
var teamId;
function init() {
  let apiUrl = "http://localhost/baseball_project/src/";
  //create request object
  let x = new XMLHttpRequest();

  var param = 2;
  matchId = param;

  //prepare request
  x.open('GET',apiUrl + 'matches/' + param);

  //request headers
  /*x.setRequestHeader('username',document.getElementById('username').value);
  x.setRequestHeader('password',document.getElementById('password').value);*/

  //send request
  x.send();
  //onreadystatechange event handler
  x.onreadystatechange = function(){
    //readyState = 4 : bak with info    
    //status = 200 : OK
    //status = 404 : Page not found (check API url)
    //status = 500 : Request denied by server (check API Access-ControlAllow)
    if(x.readyState == 4 & x.status == 200){
      console.log(x.responseText);
      var jsonResponse = JSON.parse(x.responseText);
      if(jsonResponse.status == 0){
        //grant access
        /*document.getElementById('error').style.display = 'none';*/
      }else{
        // document.getElementById('error').innerHTML = jsonResponse.errorMessage;
        // document.getElementById('error').style.display = 'block';

      }

      var idHome = jsonResponse.matches.homeTeam;
      var idGuest = jsonResponse.matches.guestTeam;
      changuePhoto(idGuest);

      var combo = document.getElementById('number');
      combo.addEventListener('onchange', function() { changuePhoto(this) }, false);

      loadTeam(idGuest);
      loadTeam(idHome);

      var combox = document.getElementById('number');
    }
  }
}


function val()
{
  var id = document.getElementById("number").value;
  changuePhoto(id);

}

function loadTeam(idTeam) {
  let apiUrl = "http://localhost/baseball_project/src/";
  //create request object
  let t = new XMLHttpRequest();

  var param = idTeam;

  //prepare request
  t.open('GET',apiUrl + 'team/' + param);

  //send request
  t.send();

  //onreadystatechange event handler
  t.onreadystatechange = function(){
    if(t.readyState == 4 & t.status == 200){
      var teamResponse = JSON.parse(t.responseText);
      console.log(teamResponse);
      if(teamResponse.status == 0){
      }else{

      }
      loadCombo(teamResponse);
    }
  }
}

function loadCombo(team1)
{
  var combo = document.getElementById("number");
  var option = document.createElement("option");
  option.value = team1.team.id;
  option.innerHTML = team1.team.name;

  combo.appendChild(option);
}

function changuePhoto(teamId)
{
  let apiUrl = "http://localhost/baseball_project/src/";
  //create request object
  let t = new XMLHttpRequest();

  var param = teamId;

  //prepare request
  t.open('GET',apiUrl + 'team/' + param);

  //request headers
  /*t.setRequestHeader('username',document.getElementById('username').value);
    t.setRequestHeader('password',document.getElementById('password').value);*/

  //send request
  t.send();

  //onreadystatechange event handler
  t.onreadystatechange = function(){
    //readyState = 4 : bak with info    
    //status = 200 : OK
    //status = 404 : Page not found (check API url)
    //status = 500 : Request denied by server (check API Access-ControlAllow)
    if(t.readyState == 4 & t.status == 200){
      var teamResponse = JSON.parse(t.responseText);
      console.log(teamResponse);
      if(teamResponse.status == 0){
        //grant access
        /*document.getElementById('error').style.display = 'none';*/
      }else{
        // document.getElementById('error').innerHTML = teamResponse.errorMessage;
        // document.getElementById('error').style.display = 'block';

      }

      loadFrame(teamResponse);
    }
  }
}

function loadFrame(teamSelected)
{
  // var imgFrame = document.getElementById('teamBigPhoto');
  // var divData = document.getElementById('data')
  // var category = document.createElement('label');
  // category.innerHTML = teamSelected.team.category.name;
  // imgFrame.src = teamSelected.team.image;
  // teamId = teamSelected.team.id;
  var contenedor = document.getElementById('content3');
  contenedor.innerHTML = null;
  var team = teamSelected.team;
  var fila1 = document.createElement('tr');
  var fila2 = document.createElement('tr');
  var fila3 = document.createElement('tr');
  fila1.id = "fil1";
  fila2.id = "fil2";
  var celda1 = document.createElement('td');
  var celda2 = document.createElement('td');
  var celda3 = document.createElement('td');
  var celda4 = document.createElement('td');
  var celda5 = document.createElement('td');
  var celda6 = document.createElement('td');
  var status = document.createElement('h5');
  var img = document.createElement('img');
  img.src = team.image;
  img.height = 64;

  celda1.innerHTML = "Status: Active";
  if(team.status != 1)
    status.innerHTML = "Status: Inactive";

  celda2.innerHTML = "Team: " + team.name;
  celda3.appendChild(img);
  // celda3.setAttribute("rowspan", "2");
  celda4.innerHTML = "Category: " + team.category.name;
  celda5.innerHTML = "Season: " + team.season.name;
  celda6.innerHTML = "Couch: " + team.coach.person.firstName + " " + team.coach.person.lastName;


  fila1.appendChild(celda1);
  fila1.appendChild(celda2);
  fila2.appendChild(celda3);
  fila1.appendChild(celda4);
  fila2.appendChild(celda5);
  fila2.appendChild(celda6);

  contenedor.appendChild(fila1);
  contenedor.appendChild(fila2);
  contenedor.appendChild(fila3);
}

function loadPage(){
  window.location.href="lineup.html?mat="+matchId+"?team="+teamId;
}

function playersTable()
{
  let apiUrl = "http://localhost/baseball_project/src/teamplayers/1";
  //create request object
  let x = new XMLHttpRequest();

  //prepare request
  x.open('GET',apiUrl);

  //request headers
  /*x.setRequestHeader('username',document.getElementById('username').value);
  x.setRequestHeader('password',document.getElementById('password').value);*/

  //send request
  x.send();
  //onreadystatechange event handler
  x.onreadystatechange = function(){
    //readyState = 4 : bak with info    
    //status = 200 : OK
    //status = 404 : Page not found (check API url)
    //status = 500 : Request denied by server (check API Access-ControlAllow)
    if(x.readyState == 4 & x.status == 200){
      var jsonResponse = JSON.parse(x.responseText);
      if(jsonResponse.status == 0){
        //grant access
        /*document.getElementById('error').style.display = 'none';*/
      }else{
        // document.getElementById('error').innerHTML = jsonResponse.errorMessage;
        // document.getElementById('error').style.display = 'block';

      }

      let players = document.getElementById('players');
      let playersTable = document.createElement('table');
      let titleRow = document.createElement('tr');
      titleRow.innerHTML = 'TeamVar';
      titleRow.id = 'playTitle';

      playersTable.appendChild(titleRow);
      let teamPlayers = jsonResponse.players;

      for(let i = 0;i < teamPlayers.length; i++)
      {
        let namePlayer = document.createElement('tr');
        namePlayer.innerHTML = teamPlayers[i].person.firstName + " " + teamPlayers[i].person.lastName;
        namePlayer.addEventListener('click', addPlayer);
        playersTable.appendChild(namePlayer);
      }

      players.appendChild(playersTable);
    }

  }
}

function loadListLineUp()
{
  let apiUrl = "http://localhost/baseball_project/src/lineup/";
  //create request object
  let x = new XMLHttpRequest();

  //prepare request
  x.open('GET',apiUrl);

  //request headers
  /*x.setRequestHeader('username',document.getElementById('username').value);
  x.setRequestHeader('password',document.getElementById('password').value);*/

  //send request
  x.send();
  //onreadystatechange event handler
  x.onreadystatechange = function(){
    //readyState = 4 : bak with info    
    //status = 200 : OK
    //status = 404 : Page not found (check API url)
    //status = 500 : Request denied by server (check API Access-ControlAllow)
    if(x.readyState == 4 & x.status == 200){
      var jsonResponse = JSON.parse(x.responseText);
      if(jsonResponse.status == 0){
        //grant access
        /*document.getElementById('error').style.display = 'none';*/
      }else{
        // document.getElementById('error').innerHTML = jsonResponse.errorMessage;
        // document.getElementById('error').style.display = 'block';

      }

      let list = document.getElementById('list');
      let lineUpTable = document.createElement('table');

      let lineups = jsonResponse.players;

      for(let i = 0;i < teamPlayers.length; i++)
      {
        let position = document.createElement('tr');
        let name = document.createElement('td');
        // name.innerHTML =
        let namePos = document.createElement('td');
        let comboPos = document.createElement('select');
        fillPosition(comboPos);
        name.appendChild(comboPos);
        let upArrow = document.createElement('td');
        let upImg = document.createElement('img');
        upImg.src = "img/arriba.png"
        upArrow.appendChild(upImg);
        let downArrow = document.createElement('td');
        let downImg = document.createElement('img');
        downImg.src = "img/abajo.png"
        downArrow.appendChild(downImg);
        let quitPlayer = document.createElement('td');
        quitPlayer.addEventListner('click', delListPlayer);
        let delImg = document.createElement('img');
        delImg.src = "img/abajo.png";

        position.appendChild(name);
        position.appendChild(namePos);
        position.appendChild(upArrow);
        position.appendChild(downArrow);
        position.appendChild(quitPlayer);
      }

      players.appendChild(playersTable);
    }
  }
}

function initLineup()
{
  let apiUrl = "http://localhost/baseball_project/src/lineup/";
  //create request object
  let x = new XMLHttpRequest();

  //prepare request
  x.open('GET',apiUrl);

  //request headers
  /*x.setRequestHeader('username',document.getElementById('username').value);
  x.setRequestHeader('password',document.getElementById('password').value);*/

  //send request
  x.send();
  //onreadystatechange event handler
  x.onreadystatechange = function(){
    //readyState = 4 : bak with info    
    //status = 200 : OK
    //status = 404 : Page not found (check API url)
    //status = 500 : Request denied by server (check API Access-ControlAllow)
    if(x.readyState == 4 & x.status == 200){
      var jsonResponse = JSON.parse(x.responseText);
      if(jsonResponse.status == 0){
        //grant access
        /*document.getElementById('error').style.display = 'none';*/
      }else{
        // document.getElementById('error').innerHTML = jsonResponse.errorMessage;
        // document.getElementById('error').style.display = 'block';

      }

      let exists = jsonResponse.result;

  playersTable();

      if(exists == 0)
      {
        loadListLineUp();
      }
      else
      {
        newLineUp();
      }
}

function addPlayer()
{
  console.log('add');
}

function delListPlayer()
{

}

function fillPosition(combo)
{
  let positions = ['1B', '2B', '3B', 'C', 'CF', 'LF', 'P', 'RF', 'SS' ];
  let posNames = ['First Base', 'Second Base', 'Third Base', 'Catcher', 'Center Field', 'Left Field', 'Pitcher', 'Right Field', 'Short Stop' ];

  for(let i = 0;i < positions.length; i++)
  {
    let posOption = createElement('option');
    posOption.value = posNames[i];
    posOption.id = positions[i];
  }
}

function newLineUp()
{

      let list = document.getElementById('list');
      let emptyTable = document.createElement('table');

      for(let i = 0;i < teamPlayers.length; i++)
      {
        let position = document.createElement('tr');
        createEmptySpace(position);
      }

      players.appendChild(playersTable);
    }
  }
}

function createEmptySpace(emptyPos, emptyId)
{
  emptyPos.innerHTML = null;
  let empty = document.createElement('td');

  empty.innerHTML = "EmptySpace";
  empty.class = "Empty";
  emptyPos.id = emptyId;
  emptyPos.appendChild(empty);
}
