class Format {

  static getCamelCase(textID) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<div data-${textID}="id"></div>`;
    // return console.log(Object.keys(newDiv.firstChild.dataset)[0]);
    return Object.keys(newDiv.firstChild.dataset)[0];
  }
}