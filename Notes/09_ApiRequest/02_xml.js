  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Configure the request
  xhr.open('GET', 'https://randomuser.me/api/', true);
  
  // Set up event handler for when the request is complete
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              try {
                  const data = JSON.parse(xhr.responseText);
                  const firstName = data.results[0].name.first
                  const lastName = data.results[0].name.last
                  const fullName = firstName + " " + lastName
                  const imgUrl = data.results[0].picture.large
                  const ageUrl = data.results[0].dob.age
                  document.querySelector(".age").textContent = `Age: ${ageUrl}`
  
                  document.querySelector(".img").setAttribute("src", imgUrl) 
                  const name = document.querySelector(".name")
                  name.innerHTML = fullName
                  
              } catch (error) {
                  console.error('Error parsing JSON:', error);
              }
          } else {
              console.error('Request failed with status:', xhr.status);
          }
      }
  };
  
  
  // Send the request
  xhr.send();
  