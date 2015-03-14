var review_ref = new Firebase('https://twrkr.firebaseio.com/comments')
review_ref.on('value', makeDivs);
var comments
function makeDivs(ds) {
  var cdata
  comments = ds.exportVal();
  var coms = $('#comments');
  coms.empty();
  for (var co in comments ) {
    cdata = comments[co];
    console.log(cdata.comment);
    coms.append('</br><div>Comment: </br>'+cdata.comment+'</div><div>Url: </br>'+cdata.pageurl+'</div>')
  }
}
