# rus_atlas
>Russification for Apache Atlas web UI
>
>

## Что это такое

> Это полностью автономный скрипт, переводящий интерфейс Apache Atlas на русский язык. 
> В интерфейче также добавляется кнопка перевода на русский. 
> Когда интерфейс уже переведен, кнопка становиться переводом обратно на английский.
> 
> ![image](https://user-images.githubusercontent.com/62176228/124103349-dd0d7500-da69-11eb-9d43-bfd586a14513.png) ![image](https://user-images.githubusercontent.com/62176228/124103447-f4e4f900-da69-11eb-82c8-a8123bdfba91.png)
>
>

## Как подключить


### Через Tampermonkey
> Файл `user_rus.js` можно скопировать в любой плагин запуска юзерскриптов, например в моем случае это `Tampermonkey`
> Сохраняем его там
> 
> ![image](https://user-images.githubusercontent.com/62176228/124102762-5193e400-da69-11eb-925d-677fe41d0a88.png)

> Включаем плагин
> 
> ![image](https://user-images.githubusercontent.com/62176228/124102890-6e301c00-da69-11eb-985f-635690bb1c36.png)

> Атлас теперь на русском!
> 
> ![image](https://user-images.githubusercontent.com/62176228/124102985-84d67300-da69-11eb-8aa1-8930a99d8c50.png)

### Через файлы
> Закидиваем `orig_rus.js` в директорию `/public/js/` 

> Добавляем в конце HTML файла, который лежит в `/public/`, строчку: ```html <script src="js/orig_rus.js"></script>```


## Примеры
Визуальные примеры
> ![image](https://user-images.githubusercontent.com/62176228/124117049-544a0580-da78-11eb-9acb-e0c4206fd629.png) ![image](https://user-images.githubusercontent.com/62176228/124117082-5d3ad700-da78-11eb-9ae7-a004ab00a6d7.png)
> ![image](https://user-images.githubusercontent.com/62176228/124117123-6af05c80-da78-11eb-81ea-27f397348997.png) ![image](https://user-images.githubusercontent.com/62176228/124117143-6f1c7a00-da78-11eb-92ae-3da01f176dd2.png)
> ![image](https://user-images.githubusercontent.com/62176228/124117177-780d4b80-da78-11eb-8342-f82dd51a342c.png) ![image](https://user-images.githubusercontent.com/62176228/124117194-7d6a9600-da78-11eb-9eaf-ff5bb4bcfccb.png)





