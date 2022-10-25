// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body:JSON.stringify({
//         name: userName,
//         email: userEmail,
//       })
//   };
let body = document.querySelector('body');
function submitData(userName,userEmail){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body:JSON.stringify({
            name: userName,
            email: userEmail,
          })
           }
        )
    .then(function (response) {
    return response.json();
      })
    .then(function (object) {
    body.append(object.id)
      })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
    body.append(error.message);
      });
      
}
// submitData('ahmad','ahmadmhd357@gmail.com')