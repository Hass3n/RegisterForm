var userEmail = document.getElementById('email');
var userPassword = document.getElementById('password');
var login = document.getElementById('login');
var textwarrning = document.querySelector('p');


var user;


if(localStorage.getItem('list') != null)
    {

        user=JSON.parse(localStorage.getItem('list'))
    }


login.addEventListener('click',function(){


    console.log(user);
 

   if(userEmail.value && userPassword.value)
    {
        if(user.length>0)
            {
                for(var i=0;i<user.length;i++)
                    {
            
            

               
            
                        if(userEmail.value===user[i].email && userPassword.value===user[i].password)
                            {

                                var data={name:user[i].name}
                                let queryString = new URLSearchParams(data).toString();
                                window.location=`welcompage.html?${queryString}`;


            
                                break;
                            }
            
                            else if(userEmail.value !== user[i].email)
                                {
            
                                    textwarrning.classList.add('text-danger');
                                 
                                    textwarrning.classList.replace('d-none', 'd-block');
            
                                    textwarrning.innerHTML='E-mail not founded'
            
                              
                                }
            
            
                                else
                                {
                                    textwarrning.classList.add('text-danger');
            
                                    textwarrning.classList.replace('d-none', 'd-block');
            
                                    textwarrning.innerHTML='incorrect----password';
            
                               
            
                                }
                         
                    }






            }
    
    
    
            else
            {
    
                textwarrning.classList.add('text-danger');
                                 
                textwarrning.classList.replace('d-none', 'd-block');
    
                textwarrning.innerHTML='User----Notfounded';
    
            }
    
    }


    else
    {

        textwarrning.classList.add('text-danger');
            
        textwarrning.classList.replace('d-none', 'd-block');
 
        textwarrning.innerHTML='please write E-mail  or password';

    }
 



});




