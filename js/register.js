var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userPassword = document.getElementById('password');
var siginup = document.getElementById('sigup');
var textwarrning = document.querySelector('p');



siginup.addEventListener('click', function () {


    addUser();

});



/***********Add Method to local storage************* */

var user;
if (localStorage.getItem('list') != null) {

    user = JSON.parse(localStorage.getItem('list'));


}

else {

    user = [];

}

var isfound = false;
function addUser() {


    console.log('array', user);
    if (valiadtion(userName) && valiadtion(userEmail) && valiadtion(userPassword)) {
        var userObject = {
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value,
        };

        if (user.length > 0) {

            console.log('Now');


            for (var i = 0; i < user.length; i++) {

                if (user[i].email === userObject.email) {


                    isfound = true;



                }


            }



            if (isfound === true) {

                textwarrning.classList.replace('d-none', 'd-block');

                textwarrning.classList.add('text-danger');
                textwarrning.classList.remove('text-success');

                textwarrning.innerHTML = 'the Email is found ';

                isfound = false;

            }

            else {
                user.push(userObject);

                localStorage.setItem('list', JSON.stringify(user));

                textwarrning.classList.replace('d-none', 'd-block');

                textwarrning.classList.remove('text-danger');
                textwarrning.classList.add('text-success');

                textwarrning.innerHTML = 'sucess ';

                isfound = false;
                window.location='login.html';
                


            }

        }

        else {




            user.push(userObject);

            localStorage.setItem('list', JSON.stringify(user));
            textwarrning.classList.remove('text-danger');
            textwarrning.classList.add('text-success');
            textwarrning.classList.replace('d-none', 'd-block');


            textwarrning.innerHTML = 'sucess ';

            isfound = false;

            window.location='login.html';

    
        }






    }


    else {

        textwarrning.innerHTML = 'you must fill all input '

    }




    clearForm();
}


/*************Mehod clear form*********** */

function clearForm() {
    userName.value = null;
    userEmail.value = null;
    userPassword.value = null;
}


/*********** Event listner for input************ */

userName.addEventListener('input', function () {

    valiadtion(userName);

});

userEmail.addEventListener('input', function () {

    valiadtion(userEmail);
});

password.addEventListener('input', function () {

    valiadtion(userPassword)


});

/*************validation method ********************/

function valiadtion(element) {
    var regobject = {
        name: /^[a-z A-z]{3,10}$/,
        email: /^[\w]+\@(gmail)\.(com)$/,
        password: /^[a-zA-Z0-9\@\#]{3,}$/

    };

    if (regobject[element.id].test(element.value)) {
        textwarrning.classList.remove('text-danger');
        textwarrning.classList.add('text-success');

        textwarrning.classList.replace('d-block', 'd-none');


        return true;
    }

    else {

        if (element.id === 'name') {
            textwarrning.innerHTML = 'Name must be at least charcter'

        }

        else if (element.id === 'email') {


            textwarrning.innerHTML = 'email must be formate as example@gmail.com'

        }

        else if (element.id === 'password') {

            textwarrning.innerHTML = 'password must be at least three  charcter or number'

        }
        textwarrning.classList.add('text-danger');
        textwarrning.classList.remove('text-success');
        textwarrning.classList.replace('d-none', 'd-block');


        return false;
    }


}



/*****************Login form*************************************************** */