let ran = NaN;
let inp = NaN;
let result = document.querySelector(".result")
let sub = document.querySelector(".submit")

let main = () => {
    ran = Math.floor(Math.random()*100)
    inp = Number(document.querySelector(".inp").value)
if (inp === ran){

    sub.style.visibility ="hidden"
    result.innerHTML = `<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Finally After a Try till eternity You Reached you Destination</p>
  <a href ="./index.html" >Restart<a>
</div>`
    
} else if(inp > ran) {
    result.innerHTML =`<div class="alert alert-danger d-flex align-items-center" role="alert">
  <div>
    No. is Larger Than The Generated No.
  </div>
</div>`

sub.style.visibility = "hidden"
}
else{
    result.innerHTML = `<div class="alert alert-warning d-flex align-items-center" role="alert">
  <div>
    No. is Smaller than the generated no.
  </div>
</div>
    `
}


}

sub.addEventListener("click",() => {
    main()
})