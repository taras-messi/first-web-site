const userForm =
    document.querySelector('form');
let count = 0;
const mainTitle =
document.querySelector('h1'); 
const nameInput = document.querySelector('.name-input');
userForm.addEventListener('submit', function(event)
                          {
                              event.preventDefault();
                              const currentName =
                                  nameInput.value;

                              if (currentName !=="") {
                                  count++;
                                  mainTitle.textContent =
                                      "Hi, " + currentName + "! Click№" + count;
                                  mainTitle.style.color = "blue";
                              }else{
                                  mainTitle.textContent =
                                      "Enter your name!";
                                  mainTitle.style.color =
                                      "red";
                              });
