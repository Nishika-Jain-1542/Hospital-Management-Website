
function showAvailability(button) {
    button.nextElementSibling.classList.toggle("hidden");
}

function openLogin() {
    document.getElementById("loginModal").classList.remove("hidden");
}

function closeLogin() {
    document.getElementById("loginModal").classList.add("hidden");
}

function openPatient() {
    closeLogin();
    document.getElementById("patientModal").classList.remove("hidden");
}

function closePatient() {
    document.getElementById("patientModal").classList.add("hidden");
}

function openEmployee() {
    alert("Employee login will be implemented in future scope.");
}


const doctors = {

aarya:{
name:"Dr. Aarya Nayak",
spec:"BAMS – Ayurvedic Physician",
edu:"BAMS, MD Ayurveda",
exp:"13 Years",
cabin:"Cabin 101",
time:"Mon-Sat 10AM - 2PM",
phone:"+91 98971 XXXXX",
email:"aarya@sanjeevnihospital.com",
about:"Specialist in Ayurvedic treatments, digestive disorders and lifestyle diseases."
},

aastha:{
name:"Dr. Aastha Nayak",
spec:"MBBS – General Physician",
edu:"MBBS, MD Internal Medicine",
exp:"10 Years",
cabin:"Cabin 102",
time:"Mon-Fri 11AM - 4PM",
phone:"+91 98971 XXXXX",
email:"aastha@sanjeevnihospital.com",
about:"Expert in diagnosing common illnesses and preventive healthcare."
},

saloni:{
name:"Dr. Saloni Yadav",
spec:"MBBS – General Physician",
edu:"MBBS",
exp:"16 Years",
cabin:"Cabin 103",
time:"Mon-Sat 9AM - 1PM",
phone:"+91 98971 XXXXX",
email:"saloni@sanjeevnihospital.com",
about:"Experienced physician focusing on patient wellness."
},

sanchita:{
name:"Dr. Sanchita Jain",
spec:"Neurosurgeon",
edu:"MBBS, MS, MCh Neurosurgery",
exp:"10 Years",
cabin:"Cabin 201",
time:"Tue-Sat 2PM - 6PM",
phone:"+91 98971 XXXXX",
email:"sanchita@sanjeevnihospital.com",
about:"Expert in brain and spine surgeries."
},

aashi:{
name:"Dr. Aashi Singhai",
spec:"Cardiologist",
edu:"MBBS, MD, DM Cardiology",
exp:"14 Years",
cabin:"Cabin 202",
time:"Mon-Fri 1PM - 5PM",
phone:"+91 98971 XXXXX",
email:"aashi@sanjeevnihospital.com",
about:"Specialist in heart diseases and cardiac care."
},

ronak:{
name:"Dr. Ronak Jain",
spec:"Dentist",
edu:"BDS, MDS",
exp:"7 Years",
cabin:"Dental Wing",
time:"Mon-Sat 10AM - 3PM",
phone:"+91 98971 XXXXX",
email:"ronak@sanjeevnihospital.com",
about:"Expert in cosmetic dentistry and oral health."
},

soumya:{
name:"Dr. Soumya Shah",
spec:"Cardiothoracic Surgeon",
edu:"MBBS, MS, MCh",
exp:"8 Years",
cabin:"Cabin 301",
time:"Wed-Sat 12PM - 4PM",
phone:"+91 98971 XXXXX",
email:"soumya@sanjeevnihospital.com",
about:"Performs advanced heart and lung surgeries."
},

salini:{
name:"Dr. Salini Yadav",
spec:"Anesthesiologist",
edu:"MBBS, MD Anesthesiology",
exp:"5 Years",
cabin:"Operation Theatre Block",
time:"Mon-Sat",
phone:"+91 98971 XXXXX",
email:"salini@sanjeevnihospital.com",
about:"Handles anesthesia during major and minor surgeries."
}

}


function openDoctor(id){

let d = doctors[id]

document.getElementById("docName").innerText = d.name
document.getElementById("docSpec").innerText = d.spec
document.getElementById("docEdu").innerText = d.edu
document.getElementById("docExp").innerText = d.exp
document.getElementById("docCabin").innerText = d.cabin
document.getElementById("docTime").innerText = d.time
document.getElementById("docPhone").innerText = d.phone
document.getElementById("docEmail").innerText = d.email
document.getElementById("docAbout").innerText = d.about

document.getElementById("doctorPopup").style.display="flex"
}

function closeDoctor(){
document.getElementById("doctorPopup").style.display="none"
}