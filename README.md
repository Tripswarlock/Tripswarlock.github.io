# tripswarlock.github.io

Статический каталог настольных офисных приложений для Windows и Linux:
журнал заявок, работа с PDF и электронной подписью, запись окна
и сетевые карточные игры.

**Сайт:** https://tripswarlock.github.io/

## Что на странице


- «Журнал заявок» JournalNext — отдельный большой блок;
- пять карточек приложений: документы, утилиты, игры;
- таблица всех приложений и репозиториев;
- сетка Material 3 и палитра в духе Android 2.3.6 (Gingerbread): тёмные панели, зелёные акценты, светлая и тёмная темы.

## Приложения в каталоге

| Приложение | Репозиторий | Что делает |
|---|---|---|
| JournalNext | `journalnext` | Журнал заявок: клиент, оператор, сервер MySQL |
| Штамп ЭП | `stamp-ep-sa` / `stamp-ep` | Штамп, проверка и подпись PDF через CryptoPro |
| Штамп ЭП — веб | `pdf-sign-stamp` | Штамп и проверка подписи PDF в браузере |
| Sign Everything | `sign-everything` | Массовое подписание файлов через cryptcp |
| Запись окна | `window-recorder` | Запись выбранного окна в MP4 со звуком |
| Card Games | `card-games` | Сетевые дурак и техасский холдем |

## Структура

```
index.html                 — разметка страницы
assets/styles.css          — оформление, тёмная и светлая темы
assets/app.js              — тема, диалог QR, год
assets/donate-qr.png       — QR-код для приёма донатов
assets/journalnext.png     — скриншот JournalNext
assets/stamp-ep.png        — скриншот «Штамп ЭП»
assets/pdf-sign-stamp.jpg  — скриншот веб-штампа
assets/window-recorder.png — скриншот записи окна
assets/card-poker.png      — скриншот холдема
assets/card-durak.png      — скриншот дурака
```
