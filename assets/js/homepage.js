var getUserRepos = function(user) {
    // Format the GitHub API URL
    var apiURL = "https://api.github.com/users/" + user + "/repos";
    // make a request o the url
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};
getUserRepos("jrj-sys");

console.log("outside");