class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card car-body mb-3">
        <div class= "row">
            <div class= "col-md-3">
                <img class ="img-fluid mb-2" src="${user.avatar_url}">
                <a href = "${user.html_url}" target="_blank" clas= "btn btn-primary btn-block">View Profile</a>
            </div>
            <div class= "col-md-9">
                <span class ="badge badge-primary"> Public Repos: ${user.public_repos}</span>
                <span class ="badge badge-secondary"> Public Gists: ${user.public_gists}</span>
                <span class ="badge badge-success"> Followers: ${user.followers}</span>
                <span class ="badge badge-info"> Following: ${user.following}</span>
               <br><br>
               <li class = "list-group">
               <li class = "list-group-item"> Company: ${user.company}</li>
               <li class = "list-group-item">Website/Blog: ${user.blog}</li>
               <li class = "list-group-item"> Location: ${user.location}</li>
               <li class = "list-group-item"> Member Since: ${user.created_at}</li>
               </ul>
            </div>
        </div>
      </div>
      <h3 class= "page-heading mb-3"> LAtest Repos</h3>
      <div is= "repos"></div>
      `;
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // create div

    const div = document.createElement("div");
    //   Add classes
    div.className = className;
    // add Text
    div.appendChild(document.createTextNode(message));
    //   get parent
    const container = document.querySelector(".searchContainer");
    //   Get search box
    const search = document.querySelector(".search");
    //   Insert alert
    container.insertBefore(div, search);

    // timeout after 3 second
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // Clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
