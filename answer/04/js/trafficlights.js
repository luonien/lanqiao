// TODO：完善此函数 显示红色颜色的灯
function red() {
  let redlight = document.querySelector("#redlight");
  let defaultlight = document.querySelector("#defaultlight");
  redlight.style.display = "inline-block";
  defaultlight.style.display = "none";
}

// TODO：完善此函数  显示绿色颜色的灯
function green() {
  let redlight = document.querySelector("#redlight");
  let greenlight = document.querySelector("#greenlight");
  redlight.style.display = "none";
  greenlight.style.display = "inline-block";
}

// TODO：完善此函数
function trafficlights() {
  setTimeout(() => {
    red();
  }, 3000);
  setTimeout(() => {
    green();
  }, 6000);
}
trafficlights();
