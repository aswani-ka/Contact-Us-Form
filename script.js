document.addEventListener("DOMContentLoaded", () => {
    const firstName =  document.getElementById("fname")
    const firstnamePara =  document.getElementById("fpara")
    const lastName =  document.getElementById("lname")
    const lastNamePara =  document.getElementById("lpara")
    const userEmail =  document.getElementById("email")
    const userEmailPara =  document.getElementById("epara")
    const queryPara =  document.getElementById("querytypePara")
    const message =  document.getElementById("msg")
    const messagePara =  document.getElementById("msgPara")
    const userConsent =  document.getElementById("consent")
    const consentPara =  document.getElementById("consentPara")
    const successMsg =  document.getElementById("successMessage")
    const submitButton =  document.getElementById("submit-btn")
    const formSubmit =  document.getElementById("form-submit")

    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault()

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const fields = [
            { input: firstName, error: firstnamePara, validate: (v) => v.trim() !== "" },
            { input: lastName, error: lastNamePara, validate: (v) => v.trim() !== "" },
            { input: message, error: messagePara, validate: (v) => v.trim() !== "" },
            { input: userEmail, error: userEmailPara, validate: (v) => emailPattern.test(v.trim())},
            {
                // Radio group
                input: document.querySelectorAll('input[name = "querytype"]'),
                error: queryPara,
                validate: () =>
                Array.from(document.querySelectorAll('input[name = "querytype"]')).some(
                (r) => r.checked
                ),
            },
            {
                // Checkbox
                input: userConsent,
                error: consentPara,
                validate: () => userConsent.checked,
            },
        ]

        let allValid = true

        fields.forEach(({ input, error, validate }) => {
            let value = input instanceof NodeList ? null : input.value
            if (!validate(value)) {
                allValid = false
                if (!(input instanceof NodeList)) {
                    input.classList.add("border-red-500")
                }
                error.classList.remove("hidden")
            } 
            else {
                if (!(input instanceof NodeList)) {
                    input.classList.remove("border-red-500")
                }
                error.classList.add("hidden")
            }
        })


        //radio group

        /* const radiobtn = document.querySelectorAll('input[name = "querytype"]')
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
        } */

        //checkbox
        
        /* if(!userConsent.checked) {
            e.preventDefault()
            consentPara.classList.remove("hidden")
        }
        else {
            consentPara.classList.add("hidden")
        } */

        // Attach live validation for text, email, and textarea fields

        fields.forEach(({ input, error, validate }) => {
        if (!(input instanceof NodeList)) {
            input.addEventListener("input", () => {
                if (validate(input.value)) {
                        input.classList.remove("border-red-500");
                        error.classList.add("hidden");
                    }
                });
            }
        });

        // Radio group: listen for change

        const radioGroup = document.querySelectorAll('input[name = "querytype"]')
        radioGroup.forEach((radio) => {
            radio.addEventListener("change", () => {
                if(
                    Array.from(radioGroup).some((r) => r.checked)
                ){
                    queryPara.classList.add("hidden")
                }
            })
        })

        // Checkbox: listen for change

        userConsent.addEventListener("change", () => {
            if(userConsent.checked) {
                consentPara.classList.add("hidden")
            }
        })

        if (!allValid) return

        // If everything is valid, show success message
     
        successMsg.classList.remove("hidden")
        // Reset form
        formSubmit.reset()

        // Hide after 3 seconds
        setTimeout(() => {
            successMsg.classList.add("hidden")
        }, 3000)
    })
})