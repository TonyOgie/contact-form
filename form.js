document.getElementById('contact-form').addEventListener(
    'submit', function(e) {
        e.preventDefault(); //Prevent form submission
        
        let isValid = true;
         
        //Validate first name
        const firstname = document.getElementById("first");
        const firstNameError = document.getElementById("firsterror");
        if (firstname.value.trim() === '') {
            firstNameError.style.display = 'block';
            isValid = false;
        } else {
            firstNameError.style.display = 'none';
        } 

        // Validate Last Name
        const lastname = document.getElementById("last");
        const lastNameError = document.getElementById("lasterror");
        if (lastname.value.trim() === '') {
            lastNameError.style.display = 'block';
            isValid = false;
        } else {
            lastNameError.style.display = 'none'
        }

        //Validate Email
        const email = document.getElementById("mail");
        const emailError = document.getElementById("emailerror");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        //Validate queries
        const Query = document.getElementsByName("queryType");
        const QueryError = document.getElementById("query-error");
        let isRadioChecked = false;

        //Check if any Radio Button is checked
        for (let i = 0; i < Query.length; i++) {
            if (Query[i].checked) {
                isRadioChecked = true;
                break;
            }
        }
        if (!isRadioChecked) {
            QueryError.style.display = 'block';
            isValid = false;
        } else {
            QueryError.style.display = 'none';
        }

        //Validate Message
        const messageArea = document.getElementById("message-area");
        const messageError = document.getElementById( "messageError" );
        if (messageArea.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        //Validate Consent Checkbox
        const checkBox = document.getElementById("#consent-box");
        const consentErrorMessage = document.getElementById("consent-error");

        if (!checkBox.checked) {
            consentErrorMessage.style.display =  'block';
            isValid = false;
        } else {
            consentErrorMessage.style.display = 'none';
        }

        if (isValid) {
            console.log('success')
        e.target.submit()}
        
    }
);
