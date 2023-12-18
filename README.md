## Запуск проекта

```
npm install — Установка зависимостей
npm run start:dev или npm run start:dev:vite — Запуск сервера + Frontend—проекта в dev—режиме
```

———

## Скрипты

— `npm run start` — Запуск Frontend-проекта на Webpack-Dev-Server
— `npm run start:vite` — Запуск Frontend-проекта на Vite
— `npm run start:dev` — Запуск Frontend-проекта на Webpack-Dev-Server + Backend
— `npm run start:dev:vite` — Запуск Frontend-проекта на Vite + Backend
— `npm run start:dev:server` — Запуск Backend-сервера
— `npm run build:prod` — Сборка в Prod-режиме
— `npm run build:dev` — Сборка в Dev-режиме (не минимизирован)
— `npm run lint` — Проверка всех файлов линтером
— `npm run lint:fix` — Исправление всех файлов линтером
— `npm run lint:ts` — Проверка TS-файлов линтером
— `npm run lint:ts:fix` — Исправление TS-файлов линтером
— `npm run lint:scss` — Проверка SCSS-файлов Style-линтером
— `npm run lint:scss:fix` — Исправление scss файлов Style-линтером
— `npm run test:unit` — Запуск Unit-тестов с Jest
— `npm run storybook` — запуск Storybook
— `npm run storybook:build` — Сборка Storybook-билда

———

## Архитектура проекта

Проект написан в соответствии с методологией Feature Sliced Design

Ссылка на документацию — [feature sliced design](https://feature—sliced.design/docs/get—started/tutorial)

———

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Документация i18next — [https://react.i18next.com/](https://react.i18next.com/)

———

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest — `npm run test:unit`
2. Тесты на компоненты с React testing library —`npm run test:unit`
3. e2e тестирование с Cypress `npm run test:e2e`

———

## Линтинг

В проекте используется Eslint для проверки TypeScript-кода и StyleLint для проверки файлов со стилями.

##### Запуск линтеров

— `npm run lint:ts` — Проверка ts файлов линтером
— `npm run lint:ts:fix` — Исправление ts файлов линтером
— `npm run lint:scss` — Проверка scss файлов style линтером
— `npm run lint:scss:fix` — Исправление scss файлов style линтером

———

## Storybook

В проекте для каждого компонента описываются стори—кейсы.
Запросы на сервер мокаются с помощью storybook—addon—mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

— `npm run storybook`

———

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack — webpack.config.ts
2. Vite — vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

— /config/babel — Babel
— /config/build — Конфигурация Webpack
— /config/jest — Конфигурация тестовой среды
— /config/storybook — Конфигурация Storybook

В папке `scripts` находятся различные скрипты.

———

### Работа с данными

Взаимодействие с данными осуществляется с помощью Redux-Toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

———

## Сущности (entities)

— [Article](/src/entities/Article)
— [Comment](/src/entities/Comment)
— [Counter](/src/entities/Counter)
— [Country](/src/entities/Country)
— [Currency](/src/entities/Currency)
— [Notification](/src/entities/Notification)
— [Profile](/src/entities/Profile)
— [Rating](/src/entities/Rating)
— [User](/src/entities/User)

## Фичи (features)

— [addCommentForm](/src/features/addCommentForm)
— [articleEditForm](/src/features/articleEditForm)
— [articleRating](/src/features/articleRating)
— [articleRecommendationsList](/src/features/articleRecommendationsList)
— [AuthByUsername](/src/features/AuthByUsername)
— [avatarDropdown](/src/features/avatarDropdown)
— [editableProfileCard](/src/features/editableProfileCard)
— [LangSwitcher](/src/features/LangSwitcher)
— [notificationButton](/src/features/notificationButton)
— [profileRating](/src/features/profileRating)
— [ThemeSwitcher](/src/features/ThemeSwitcher)
— [UI](/src/features/UI)
