
async function getUsers() {

    let count = document.getElementById("userCount").value;

    if (count < 1 || count > 10) {
        alert("Please enter a number between 1 and 10");
        return;
    }

    let API = `https://randomuser.me/api/?results=${count}`;

    try {

        let response = await fetch(API);

        let data = await response.json();

        let users = data.results;

        let output = "";

        users.forEach((user) => {

            output += `
                <div class="col-md-4">

                    <div class="user-card">

                        <img src="${user.picture.large}" alt="User">

                        <h4>
                            ${user.name.first} ${user.name.last}
                        </h4>

                        <p>
                            <strong>Email:</strong> ${user.email}
                        </p>

                        <p>
                            <strong>Location:</strong>
                            ${user.location.city},
                            ${user.location.country}
                        </p>

                        <p>
                            <strong>Phone:</strong> ${user.phone}
                        </p>

                    </div>

                </div>
            `;

        });

        document.getElementById("userContainer").innerHTML = output;

    }

    catch (error) {

        console.log(error);

        document.getElementById("userContainer").innerHTML =
            `<p class="text-danger text-center">Failed to fetch users</p>`;

    }

}
