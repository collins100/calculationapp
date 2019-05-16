/* eslint-env jquery, browser */

let bstArray = [];

function enterValues(e) {
  const { value } = document.getElementById('valuesEntry');
  if (value !== '') {
    document.getElementById('valuesEntry').value = '';
    document.getElementById('valuesLabel').innerHTML += `${value.toString()}-`;
    bstArray.push(parseInt(value, 10));
  }
  console.log(bstArray);
}

function enterRootNode(e) {
  console.log('clicked-rootnode');
}
function returnedSum(value) {
  document.getElementById('longestPathSum').innerHTML = value;
}


function generateSum() {
  document.getElementById('valuesLabel').innerHTML = '';

  console.log('bstArray', bstArray);
  console.log('json-bstArray', JSON.stringify({ payload: bstArray }));
  // fetch('http://localhost:8080/calculation', {
  //   method: 'POST',
  //   body:
  // })
  $.post('http://localhost:8080/calculation', { payload: bstArray }, (value) => {
    returnedSum(value);
  });
  bstArray = [];
}


$(document).ready(() => {
  // Place JavaScript code here...

});
