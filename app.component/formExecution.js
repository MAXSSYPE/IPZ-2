document.addEventListener('DOMContentLoaded', () => {
    const ajaxSend = (formData) => {
        fetch('http://localhost:8080/login', { // файл-обработчик
            credentials: "include", 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // отправляемые данные 
                
            },
            mode: 'no-cors',
            body: JSON.stringify(formData)
            })
            .then((response) => console.log(response.json())
            )
            .then((data) => {
                if (data.text == "OK") {
                    //change pageview
                }
            }
            )
            .catch(error => console.error(error))
        };
    
    const forms = document.getElementById('auth');
    forms.addEventListener('submit', function (e) {
        e.preventDefault();
    
        let formData = new FormData(this);
        formData = Object.fromEntries(formData);
    
        ajaxSend(formData);
        this.reset();
    });

    const ajaxSignUp = (formData) => {
        fetch('http://localhost:8080/register', { // файл-обработчик
            credentials: "include", 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // отправляемые данные 
                
            },
            mode: 'no-cors',
            body: JSON.stringify(formData)
            })
            .then((response) => console.log(response.json())
            )
            .then((data) => {
                if (data.text == "OK") {
                    //change pageview
                }
            })
            .catch(error => console.error(error))
    }


    const formsReg = document.getElementById('reg');

    formsReg.addEventListener('submit', function(e){
        e.preventDefault();

        let formData = new FormData(this);
        formData = Object.fromEntries(formData)

        ajaxSignUp(formData)
        this.reset();

    })
    
});
