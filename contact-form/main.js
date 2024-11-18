let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

(function() {
  emailjs.init("eAXZUrBjmiWQBgOSd");
})();

let templateParams = {
  to_name : "Venkadesan P",
  from_name: name.value,
  from_email:email.value,
  message:message.value
}

function submitMessage() {
  templateParams.to_name = "Venkadesan P";
  templateParams.from_name = name.value;
  templateParams.from_email = email.value;
  templateParams.message = message.value;
  emailjs.send("service_fs48a7k","template_h2o5zu6",templateParams)
  .then(function(){
    showAlert("Message sent successfully!");
    name.value="";
    email.value="";
    message.value="";
  }),function() {
    showAlert("Failed to send message!");
  }
}


 function showAlert(message) {
   const alert = document.getElementById("alert");
   alert.innerHTML = message;
   alert.style.display = "flex";
   setTimeout(function(){
     alert.style.display = "none";
   },3000);
 }