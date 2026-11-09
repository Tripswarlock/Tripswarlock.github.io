# tripswarlock.github.io

Статический каталог настольных офисных приложений для Windows и Linux:
журнал заявок, работа с PDF и электронной подписью, запись окна, VPN-рассылка
и сетевые карточные игры.

**Сайт:** https://tripswarlock.github.io/

## Что на странице

- QR-код для донатов (Ozon Банк) — в первом экране, с увеличением по клику;
- «Журнал заявок» JournalNext — большой обзор с отдельным блоком;
- каталог из семи приложений по категориям: документы, утилиты, игры;
- таблица всех приложений и репозиториев;
- светлая и тёмная темы, адаптив, анимация бегущей строки.

## Приложения в каталоге

| Приложение | Репозиторий | Что делает |
|---|---|---|
| JournalNext | `journalnext` | Журнал заявок: клиент, оператор, сервер MySQL |
| Штамп ЭП | `stamp-ep-sa` / `stamp-ep` | Штамп, проверка и подпись PDF через CryptoPro |
| Штамп ЭП — веб | `pdf-sign-stamp` | Штамп и проверка подписи PDF в браузере |
| Sign Everything | `sign-everything` | Массовое подписание файлов через cryptcp |
| Запись окна | `window-recorder` | Запись выбранного окна в MP4 со звуком |
| VPN-рассылка | `vpn-mailer` | Отправка ключей vpn:// по SMTP |
| Card Games | `card-games` | Сетевые дурак и техасский холдем |

## Структура

```
index.html                 — разметка страницы
assets/styles.css          — оформление, светлая и тёмная темы
assets/app.js              — тема, диалог QR, год
assets/donate-qr.png       — QR-код для приёма донатов
assets/journalnext.png     — скриншот JournalNext
assets/stamp-ep.png        — скриншот «Штамп ЭП»
assets/pdf-sign-stamp.jpg  — скриншот веб-штампа
assets/window-recorder.png — скриншот записи окна
assets/vpn-mailer.png      — скриншот VPN-рассылки (ключи скрыты)
assets/card-poker.png      — скриншот холдема
assets/card-durak.png      — скриншот дурака
```

## Как обновить QR-код

1. Положите новый QR в `assets/donate-qr.png` (квадратный PNG, лучше от 600×600).
2. При необходимости поправьте подпись банка в `index.html` — блок `aside.donate`.

## Локальный просмотр

```powershell
python -m http.server 8080
# http://localhost:8080
```

## Публикация

GitHub Pages, ветка `main`, корень репозитория. Файл `.nojekyll` отключает обработку Jekyll,
поэтому все ассеты отдаются как есть.
