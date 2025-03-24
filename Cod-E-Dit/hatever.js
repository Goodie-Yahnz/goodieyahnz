function saveToFile() {
  const blob = new Blob([codeInput.value], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'code.html';
  link.click();
}
function fileclick() {
	document.getElementById("file-div").style.display = "inline";
}; 
function fileclick0() {
	document.getElementById("file-div").style.display = "none";
}; 
function helpclick() {
	window.open("Cod E Dit help and how to.htm");
};

function newclick() {
	window.open("./COD-E-DIT.html");
};
function cloclick() {
	window.close(document.locaton);
};
function opeclick() {
	window.open("./");
};
function savclick() {
  const blob = new Blob([document.body.innerHTML], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = './My app.html';
  link.click();
};

function saveclick() {
	document.getElementById("full").style.display = "block";
};
function savecrea() {
  const blob = new Blob([document.getElementById("htm").value], { type: document.getElementById("format").value });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = document.getElementById("newfile").innerHTML;
  link.click();

};
function closecrea() {
	document.getElementById("full").style.display = "none";
};
function runclick() {
document.getElementById("htm3").innerText = document.getElementById("htm").value;
};
  
  function retclick() {
document.getElementById("htm").value = document.getElementById("htm3").innerText;
document.getElementById("ret-div").style.color  = "grey";
};
document.getElementById("htm3").innerHTML = document.getElementById("htm").value;
