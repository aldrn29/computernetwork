var nickname = "";
var img = "";

function enter() {
  getNickName();
  // main.html로 img와 nickname 정보와 함께 넘어간다.
  // TODO 웹서버가 우선되어야함
  location.href = "../html/main.html?chlngr_name = "+ nickname;
}

function getNickName() {
  nickname = $("#input_box").val();
  alert(nickname);
}
