document.addEventListener('DOMContentLoaded', () => {
    const ajaxSend = (formData) => {
        fetch(`http://localhost:8080/login?${formData}`, { // файл-обработчик
            credentials: "include", 
            method: 'GET',
            mode: 'no-cors',
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

        let query = Object.keys(formData)
                                .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(formData[k]))
                                .join('&');
    
        ajaxSend(query);
        this.reset();
    });

    const ajaxSignUp = (formData) => {
        fetch(`http://localhost:8080/register?${formData}`, { // файл-обработчик
            credentials: "include", 
            method: 'GET',
            mode: 'no-cors',
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

        let query = Object.keys(formData)
                        .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(formData[k]))
                        .join('&');

        ajaxSignUp(query)
        this.reset();

    })
    
});
