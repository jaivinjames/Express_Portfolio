/**
 * Name : Jaivin James
 * Student ID: 301177233
 * Date: 23 October 2021
 * File Name: Express-Portfolio with Authentication
 */

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();