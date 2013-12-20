// var value, orig1, orig2, dv, hilight = true;
/*
  Rdiffer beta 1.0
  author:ringtail
  mail:zhongwei.lzw@alibaba-inc.com
 */

/*
  codemirror mode
 */

var mixedMode = {
  name: "htmlmixed",
  scriptTypes: [{
    matches: /\/x-handlebars-template|\/x-mustache/i,
    mode: null
  }, {
    matches: /(text|application)\/(x-)?vb(a|script)/i,
    mode: "vbscript"
  }]
};

var data = require('../js/data/index');


var Rdiffer = {
  index:0,
  total:0,
  instance:null,
  init:function(orig1,orig2,target){

    if(this.instance){
        //do nothing;
    }else{
        this.listenerInit();
    }

    this.orig1 = orig1;
    this.orig2 = orig2;
    this.target=target;


    return Rdiffer.reset(orig1,orig2,target);
  },
  reset:function(orig1,orig2,target){
    //get container;
    var viewContainer = document.getElementById(target);

    //RESET
    viewContainer.innerHTML="";

    editor =CodeMirror.MergeView(viewContainer, {
        value:orig1,
        origLeft:null,
        orig:orig2,
        lineNumbers: true,
        mode:mixedMode,
        highlightDifferences: true
    });
    this.index = 0;
    this.total = $('.CodeMirror-merge-copy').length;
    this.instance = editor;

    return editor;
  },
  mergeAll:function(){

  },
  scrollTo:function(i){
    window.scrollTo(0,$('.CodeMirror-merge-copy').eq(i).css("top"));
  },
  scrollToNext:function(){
    index++;
    index = index%total;
    window.scrollTo(0,$('.CodeMirror-merge-copy').eq(index).css("top"));
  },
  scrollToBefore:function(){
    if(index===0)
      index=total;

    index--;
    index=index%total;
    window.scrollTo(0,$('.CodeMirror-merge-copy').eq(index).css("top"));
  },
  listenerInit:function(){

  }
}




//temp solution;
var preface ={
    init:function(){
        this.listenerInit();
    },
    listenerInit:function(){
        $('#origin-submit').click(function(){
            data.getContent($(".origin-source").val(),function(chunk,err){
                if(err!="success"){
                    console.log(err);
                }else{
                    $('.page.one').removeClass('on');
                    $('.page.two').addClass('on');
                    console.log(chunk);
                    Rdiffer.init("",chunk,"view");

                }

            })
        })
    }
}

preface.init();

// function initUI(panes) {
//   if (value == null) return;
//   var target = document.getElementById("view");
//   target.innerHTML = "";
  // dv = CodeMirror.MergeView(target, {
  //   value: orig2,
  //   origLeft: panes == 3 ? orig1 : null,
  //   orig: orig2,
  //   lineNumbers: true,
  //   mode:mixedMode,
  //   highlightDifferences: hilight
  // });
// }

// function toggleDifferences() {
//   dv.setShowDifferences(hilight = !hilight);
// }

// window.onload = function() {
//   value = document.documentElement.innerHTML;
//   orig1 = "html"
//   orig2 = "html2"
//   initUI(2);
// };
