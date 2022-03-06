// practice 01 - setTimeOut
setTimeout( setOne = () => {
    console.log('i am Second function from inside');
}, 4100)

setTimeout(setTwo = () => {
    console.log('i am another function from inside');
},4500)
console.log('I am the third One');
console.log('I am the fourth One');
console.log('I am the Fifth and last One');

// practice 02 - use prompt

userInput = () => {
    let userInput = prompt('Enter A Number First')
    let result = parseInt(userInput) + 200
    if(userInput<0){
        swal("warning!","Negetive Numbers Not Allowed", "warning");
        return
    } 
    alert(result) 
        
if(isNaN(result)){
    swal("warning!","Only Numbers is Allowed", "warning");

    }
}

// practice 03 - confirm location

userConfirmation = () => {
    confirm('MERN Development wants to Know Your Location')

if(confirm){
    console.log(location.href);
}
else{
    swal("Location Permition Has Canceled!","Permit request cancel from user", "warning");
}

}

// paractice 04 -  what is cookies in 5 line explanation 

/* 
HTTP cookies, or internet cookies, are built specifically for Internet web browsers to track, personalize, and save information about each user’s session. A “session” just refers to the time you spend on a site.

Cookies are created to identify you when you visit a new website. The web server — which stores the website’s data — sends a short stream of identifying info to your web browser.

Browser cookies are identified and read by “name-value” pairs. These tell cookies where to be sent and what data to recall.

The server only sends the cookie when it wants the web browser to save it. If you’re wondering “where are cookies stored,” it’s simple: your web browser will store it locally to remember the “name-value pair” that identifies you.

If a user returns to that site in the future, the web browser returns that data to the web server in the form of a cookie. This is when your browser will send it back to the server to recall data from your previous sessions.

*/


//practice 05 - differecne between local and session storage in 3 sentecnse //

/*

01. local storage is temoprary data and session storage is permanent data who save users info in their website


02. when we trun of the pc or browser local storage turn off the tracking and permanent data track all the time 


03. not know about. need to google for more

*/


// end module 40_5 practice 