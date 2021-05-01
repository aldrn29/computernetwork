var nickname = "";
var img = "";

function enter(){
  getNickName();
  // main.html로 img와 nickname 정보와 함꼐넘어간다.
}

function getNickName() {
  nickname = $("#input_box").val();
  alert(nickname);
}