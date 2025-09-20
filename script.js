document.addEventListener("DOMContentLoaded", () => {
    const firstName =  document.getElementById("fname")
    const firstnamePara =  document.getElementById("fpara")
    const lastName =  document.getElementById("lname")
    const lastNamePara =  document.getElementById("lpara")
    const userEmail =  document.getElementById("email")
    const userEmailPara =  document.getElementById("epara")
    const queryPara =  document.getElementById("radioPara")
    const message =  document.getElementById("msg")
    const messagePara =  document.getElementById("msgPara")
    const userConsent =  document.getElementById("consent")
    const consentPara =  document.getElementById("consentPara")
    const submitButton =  document.getElementById("submit-btn")
    const formSubmit =  document.getElementById("form-submit")

    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault()
        
        if(firstName.value.trim() === "") {
            firstName.classList.add("border-red-500")
            firstnamePara.classList.remove("hidden")
        }
        else {
            firstName.classList.remove("border-red-500")
            firstnamePara.classList.add("hidden")
        }
        if(lastName.value.trim() === "") {
            lastName.classList.add("border-red-500")
            lastNamePara.classList.remove("hidden")
        }
        else {
            lastName.classList.remove("border-red-500")
            lastNamePara.classList.add("hidden")
        }
        if(message.value.trim() === "") {
            message.classList.add("border-red-500")
            messagePara.classList.remove("hidden")
        }
        else {
            message.classList.remove("border-red-500")
            messagePara.classList.add("hidden")
        }

        //radio button

        const radiobtn = document.querySelectorAll('input[name = "querytype"]')
        let selected = false

        radiobtn.forEach(radio => {
            if(radio.checked) {
                selected = true
            }
        })
        if(!selected) {
            e.preventDefault()
            queryPara.classList.remove("hidden")
        }
        else {
            queryPara.classList.add("hidden")
        }

        //checkbox
        
        if(!userConsent.checked) {
            e.preventDefault()
            consentPara.classList.remove("hidden")
        }
        else {
            consentPara.classList.add("hidden")
        }
    })
})