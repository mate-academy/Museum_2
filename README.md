# Museum 2 landing page
Implement landing page according to [Figma design](https://www.figma.com/file/i8XiqSgs44QEVPHuMbkNO2/museum-prototype?node-id=323%3A1957) - Use BEM and SCSS
<<<<<<< HEAD
=======

Check font styles. Use [Playfair Display](https://fonts.google.com/specimen/Playfair+Display?query=Playfair+Display), [Raleway](https://fonts.google.com/specimen/Raleway?query=Raleway)

>>>>>>> deaae50 (Update README.md)
- Large screens 2560px
- Full HD 1920px
- The design 1600px
- Notebook 1280px
- Tablet 1024
- Mobile (> 320px)

1. Implement the header with menu.
1. Implement `Актуальтні виставки` block.
1. Implement `Найближчі події` block.
1. Implement `Сплануйте візит до музею` block.
1. Implement `Новини` block with the three cards.
1. Implement `Підпишіться на дайджест` block.
1. Implement footer.

## HR important moments
- Скорость анимаций на всем лендинге одинаковая (например увеличение при наведении или выезд блоков при скроле)
- Placeholder в формах подсказывают что именно ввести, а если стоит валидация формы, то понятно в каком формате вводить номер телефона
- Убедитесь, что с мобильных выглядит все аккуратно и без горизонтальной прокрутки
- Добавьте favicon
- Добавьте мягкий скролл при клике на меню до соответствующих блоков страницы
- Кнопки "купити квиток" и "зареєструватися" должны вести на блок "Сплануйте візит до музею"
- Кнопки в футер меню также должны быть кликабельны и вести на блоки в лендинге.
- Чтобы рекрутеру было понятно что именно это за лендинг, лучше назвать вкладку NAMU
- На мобильной версии в блок "Новини" нужно добавить слайдер
- Все иконки соц сетей в футере должны быть кликабельны с hover-стилями и открывать в новой вкладке социальные сети музею NAMU
- Для того чтобы оживить лендинг можно анимировать "Дівчину з Поділля" (например, чтобы при открытии страницы она плавно выезжала сбоку)
- Тоже самое касается картинок в блоках "Актуальні виставки", "Найближчі події", "Новини" (например, они могут как-то двигаться при ховере или при прокрутке страницы вниз)

## Github flow
1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`).
4. Run `npm start`.
5. Open one more terminal window for the next steps.
6. `git checkout -b develop` - to create new branch and switch on it.
7. Write you code in `src` folder.
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to `gh-pages`.
10. `git add . && git commit -m 'write a short description of the changes you made'` to save your changes.
11. `git push origin develop` - to send you code for PR.
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://HunchakAndrii.github.io/Museum_2/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.
