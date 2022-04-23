const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img"),
//download = wrapper.querySelector("a"),
downloadBtn = wrapper.querySelector("#download");
 
let preValue;
let qrValue = '';
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});

downloadBtn.addEventListener("click", () =>{
   // Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
    let imagePath = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    console.log(imagePath);
    let fileName = 'qrcode';
    saveAs(imagePath, fileName);
});

