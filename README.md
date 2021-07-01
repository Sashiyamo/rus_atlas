# rus_atlas
Russification for Apache Atlas web UI


## Что это такое

Это полностью автономный скрипт, переводящий интерфейс Apache Atlas на русский язык. В интерфейче также добавляется кнопка перевода на русский. Когда интерфейс уже переведен, кнопка становиться переводом обратно на английский.
![image](https://user-images.githubusercontent.com/62176228/124103349-dd0d7500-da69-11eb-9d43-bfd586a14513.png) ![image](https://user-images.githubusercontent.com/62176228/124103447-f4e4f900-da69-11eb-82c8-a8123bdfba91.png)


## Как подключить

### Через Tampermonkey
Файл user_rus.js можно скопировать в любой плагин запуска юзерскриптов, например в моем случае это Tampermonkey
Сохраняе его там
![image](https://user-images.githubusercontent.com/62176228/124102762-5193e400-da69-11eb-925d-677fe41d0a88.png)

Включаем плагин
![image](https://user-images.githubusercontent.com/62176228/124102890-6e301c00-da69-11eb-985f-635690bb1c36.png)

Атлас теперь на русском!
![image](https://user-images.githubusercontent.com/62176228/124102985-84d67300-da69-11eb-8aa1-8930a99d8c50.png)

### Через файлы
Закидиваем orig_rus.js в директорию /public/js/ 

Добавляем в конце HTML файла, который лежит в /public/, строчку: <script src="js/orig_rus.js"></script>
