# Learn React

У меня возникли сложности с объединением сервера и клиента в одном репозитории, поэтому проект надо запускать через установку двух репозиториев.

## Как запустить проект

1. Создайте пустую папку
2. Выполните команду ```git clone https://github.com/ryabv/learn-react.git client```
3. Выполните команду ```git clone https://github.com/ryabv/git-API.git server```
4. В пустой папке должно появится две папки с названием ```client``` и ```server```
5. Перейдите в командной строке в папку ```server``` через команду ```cd ../server```
6. Выполните ```npm i```
7. Выполните ```node app```, сервер спросит путь к папке с репозиториями, введите ```./test```
8. Откройте новую консоль в корневой папке, перейдите по пути ```server/test/test-repository``` и скачайте какой-нибудь репозиторий, например так: ```git clone https://github.com/GoogleChrome/puppeteer.git```
9. Перейдите в командной строке в папку ```client``` через команду ```cd ../../../client```
10. Выполните ```npm i```
11. Выполните ```npm start```
12. В итоге будет запущено 2 сервера: один для API, другой для клиента на 3001 и 3000 портах соответсвенно. Нам нужен на порту 3000 http://localhost:3000

## Что сделано

1. Навигация по папкам работает
2. При клике на файл выводится его содержимое
3. Страница файла и папок разделена
4. Использован Redux
5. Сделан Routing; у страниц файлов в роуте присутствует ```filepage```, у страниц папок - ```folderpage```
6. Если скопировать путь к файлу или папке из поисковой строки, а затем перейти по нему, то данные должны загрузиться те же.
7. Если кликнуть по списку в шапке, который начинается с ```Repository```, то выведется список других репозиториев. К сожалению не успел реализовать переход по разным репозиториям, поэтому используется только ```test-repository```.


P.S. Я пытался реализовать bradcrumbs и переход по репозиториям, но понял, что не успею, поэтому эти участки кода не удалял, а просто комментировал, чтобы потом вернуться, поэтому где-то могут возникнуть предупреждения о неиспользованном коде.
