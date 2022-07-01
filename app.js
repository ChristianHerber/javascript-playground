window.onload = () => {
    console.log('This is your first program executing!');
}

const our_name = document.querySelector(".b")
our_name.addEventListener('click', setName)
function setName(){
    const n = prompt("Write your name")
    our_name.innerHTML = `Your name is ${n}`
}