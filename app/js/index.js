/**
 * Created by jweber on 01.10.13.
 */

var value,
    orig1,
    orig2,
    dv,
    hilight= true;
function initUI(panes){
  if (value == null) return;
  var target = document.getElementById("view");
  target.innerHTML = "";
  dv = CodeMirror.MergeView(target,{
    value: value,
    origLeft: panes == 3 ? orig1 : null,
    orig: orig2,
    lineNumbers: true,
    mode: "text/html",
    highlightDifferences: hilight
  });
}

function toggleDifferences(){
  dv.setShowDifferences(hilight = !hilight);
}

window.onload = function(){
  orig1 = "dadfaadfasdfadf";
  orig2 = "dafhakdfhakdfhkad";
  initUI(2);
};
