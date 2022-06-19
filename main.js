//Animation TASK
//1-4
// var elementHeight = 0;
// var animationIntervalId;
function startAnimation() {
  if (animationIntervalId == null) {
    elementHeight = 0;
    animationIntervalId = setInterval(() => {
      box_div.style.height = elementHeight++ + "px";
    }, 10);
  }
}
function stopAnimation() {
  clearInterval(animationIntervalId);
  animationIntervalId = null;
}
// function cancelAnimationForEnter(e) {
//   if (e.key == "Enter") {
//     stopAnimation();
//     box_div.style.height = "0px";
//     return;
//   }
//   console.log("hi");
// }
//5
function changeRandomColor() {
  var hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  var hexColor = "#";
  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * hexArray.length);
    hexColor += hexArray[randomIndex];
  }
  color_div.style.backgroundColor = hexColor;
}
//6
// var expansion = 0;
// var expandIntervalId;
function createExpandingElement() {
  submit_btn.disabled = "true";
  var elemntWidth = width_input.value;
  var elemntHeight = height_input.value;
  expandIntervalId = setInterval(() => {
    if (expansion < elemntHeight) {
      expand_div.style.height = expansion + "px";
    }
    if (expansion < elemntWidth) {
      expand_div.style.width = expansion + "px";
    }
    expansion++;
    if (expansion >= elemntHeight && expansion >= elemntWidth) {
      clearInterval(expandIntervalId);
    }
  }, 10);
}
function cancelAnimationForSpace(e) {
  if (e.key == " ") {
    clearInterval(expandIntervalId);
    expand_div.style.width = "0px";
    expand_div.style.height = "0px";
  }
}
//7
// var text;
// var colorArray = [];
// var textIntevalId;
function saveText() {
  if (text_input.value != "") {
    text = text_input.value;
    submittext_btn.disabled = "true";
    return;
  }
  alert("enter text");
}
function saveColor() {
  if (color_input.value != "") {
    if (colorArray.length < 5) {
      colorArray.push(color_input.value);
      alert("color been inputed");
      if (colorArray.length == 5) {
        submitcolor_btn.disabled = "true";
      }
      return;
    }
  }
  alert("enter color");
}
function createColoredText() {
  if (text != "" && colorArray.length == 5) {
    print_text.innerText = text;
    textIntevalId = setInterval(() => {
      var randomIndex = Math.floor(Math.random() * colorArray.length);
      print_text.style.color = colorArray[randomIndex];
    }, 500);
    return;
  }
  alert("please fill colors and text");
}
function StopTextAnimation() {
  if (textIntevalId != null) {
    clearInterval(textIntevalId);
    textIntevalId = null;
  }
}
function StopTextAnimationByKey(e) {
  if (e.key == "Shift") {
    StopTextAnimation();
  }
}
