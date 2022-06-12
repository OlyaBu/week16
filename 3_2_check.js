let checkboxage = document.querySelectorAll('input[name="age"]:checked');
            let values = [];
            checkboxage.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            alert(values);

            let checkboxcountry = document.querySelectorAll('input[name="origincountry"]:checked');
            let values = [];
            checkboxcountry.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            alert(values);

            

            