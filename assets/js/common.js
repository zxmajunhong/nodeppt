setTimeout(function() {
  var full = document.createElement("div");
  full.style.cssText = 'position:absolute;top:0;left:0;width:40px;height:40px;';
  full.onclick = function() {
    launchFullScreen(document.body);
  };
  document.body.appendChild(full);
}, 2000);

// 进入全屏
function launchFullScreen(element) {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.msRequestFullScreen) {
    element.msRequestFullScreen();
  } else {
    return true;
  }
}

// 退出全屏
function cancelFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
    return true;
  }
}
