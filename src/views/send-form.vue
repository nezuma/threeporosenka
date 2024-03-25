<script>
    export default {
        name: 'sendForm',
        methods: {
            async sendform() {
                const response = await fetch('/send-form', {
                  method: 'post',
                  body: JSON.stringify({
                    name: document.querySelector('form').querySelector('[name="fname"]').value,
                    surname: document.querySelector('form').querySelector('[name="lname"]').value,
                    phone: document.querySelector('form').querySelector('[name="phone"]').value,
                    email: document.querySelector('form').querySelector('[name="email"]').value,
                    date: document.querySelector('form').querySelector('[name="date"]').value,
                    time: document.querySelector('form').querySelector('[name="time"]').value,
                    guests: document.querySelector('form').querySelector('[name="guests"]').value,
                    menu: document.querySelector('form').querySelector('[name="menu"]').value,
                    requests: document.querySelector('form').querySelector('[name="requests"]').value
                  }),
                  headers: {'Accept': 'applicax tion/json','Content-Type': 'application/json'},
                }).then(res => res.json()).catch(err => err).then(response => {
                  if(response.status == 200) { window.location.href = '/succ-form'; } else { return alert(response.message); }
                }).catch(err => {
                  console.error(err)
                });
            }
        }
    }
</script>
<template>
    <div class="send-form">
        <form action="/send-form" method="post">
            <label for="fname">Имя:</label>
            <input type="text" id="fname" name="fname" placeholder="Введите имя">
            <label for="lname">Фамилия:</label>
            <input type="text" id="lname" name="lname" placeholder="Введите фамилию">
            <label for="phone">Номер телефона:</label>
            <input type="tel" id="phone" name="phone" placeholder="Введите номер телефона">
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Введите почту">
            <label for="date">Дата:</label>
            <input type="date" id="date" name="date">
            <label for="time">Время:</label>
            <input type="time" id="time" name="time">
            <label for="guests">Количество гостей:</label>
            <input type="number" id="guests" name="guests" placeholder="Введите количество гостей">
            <label for="menu">Предпочтения по меню:</label>
            <select type="list" id="menu" name="menu">
                <option value="0" disabled selected>Выберите меню</option>
                <option value="1">Крылышки барбекю</option>
                <option value="2">Меню из фнафа</option>
                <option value="3">Постное меню</option>
                <option value="4">Тайское меню</option>
            </select>
            <label for="requests">Особые пожелания:</label>
            <input type="text" id="requests" name="requests" placeholder="Необязательное поле">
            <input type="button" value="Отправить" @click="sendform"> 
        </form>
    </div>
</template>
<style>
    .send-form {
        padding: 25px;
        width: 300px;
        margin: 25px auto;
        background: indianred;
        border-radius: 25px;
    }
    .send-form label {
        color: #f1d0c0;
    }
    .send-form form {
        display: grid;
        justify-content: center;
        margin: 0 auto;
    }
    .send-form [type=button] {
        margin-top: 15px;
        border-radius: 15px;
        border: 0;
        height: 30px;
        width: 245px;
    }
    .send-form [type=text], [type=tel], [type=email], [type=date], [type=time] , [type=number], select {
        border-radius: 25px;
        border: 0;
        height: 35px;
        width: 250px;
        padding: 0 10px;
    }
    select:hover {
        border-radius: 25px;
    }
</style>