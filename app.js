// Init Github
const GitHub = new Github();

// Search input
const searchUSer = document.getElementById("searchUser");

// Search input event listener
searchUSer.addEventListener("keyup", (e) => {
  // get input text

  const userText = e.target.value;

  if (userText !== "") {
    //   make http call
    GitHub.getUser(userText).then((data) => {
      if (data.profile.message == "Not Found") {
        //  show alert
      } else {
        // show profile
      }
    });
  } else {
    //   Clear profile
  }
});
