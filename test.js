// fetch: apiye http istek atmamızı sağlar
// get: veri ialamaya yarar
// post: sunucuya veri göndermeye yarar
// put: sunucudaki bir veriyi güncellemeye yarar
// delete: bir veriyi silmeye yarar

// get örneği yalnızca isteğimiz söylüyorz
// gelen cevabın iki ihtimali var
function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    // ya olumlu olur ve veri gelir
    .then((response) => response.json())
    .then((data) => renderUsers(data))
    // olumsuz olur ve hata mesajı gelir
    .catch((error) => console.log(error));
}

// fonksiyonu çağırıp isteği gerçekleştirme
getUsers();

function renderUsers(users) {
  users.forEach((user) => document.write(user.name + '<br>'));
}
