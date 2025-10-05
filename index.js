const rateNumber = document.querySelectorAll('.rate-num div');
const submitBtn = document.querySelector('.submit-btn');
const greetCard = document.querySelector('.greet-card');
const card = document.querySelector('.card');
const rateCard = document.querySelector('.rate-card p span');
const backBtn = document.querySelector('.backbtn');


// to diplay number in greet card
rateNumber.forEach(num => {
    num.addEventListener('click', () => {

        // Update the rating in the greet card
        //span innerHTML = .rate-num div innerHTML
        rateCard.innerHTML = num.innerHTML;
        console.log(num.textContent);

        // Remove 'selected' from all numbers
        rateNumber.forEach(n => n.classList.remove('selected'));

        // Add 'selected' to the clicked number
        num.classList.add('selected'); // add selected class in html and also css 
    });
});


//submit button click
submitBtn.addEventListener('click', () => {
    if (rateCard.innerHTML === "") {
        alert("Please select a rating before submitting!");
        // Without return, code runs even if no number is selected 
        // but with return it stops the card to automatically show greet card
        return;
    }

    //it tells that make the card display none if i click submit and make the hidden card
    //visible by making hidden false
    card.style.display = "none";

    //it makes hidden into visible by making it false 
    greetCard.hidden = false;

});

//to move back to home page from greet card
backBtn.addEventListener('click', () => {
    // Show rating card again
    greetCard.hidden = true;
    card.style.display = "flex";

    // Reset selection
    rateNumber.forEach(n => n.classList.remove('selected'));

    // clear displayed rating
    rateCard.innerHTML = '';

})

