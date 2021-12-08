# Museum 2 landing page
Implement landing page according to [Figma design](https://www.figma.com/file/HL3XGt5ZatvJoYBhOaWY5x/museum-prototype?node-id=323%3A1957) - Use BEM and SCSS

Check font styles. Use [Playfair Display](https://fonts.google.com/specimen/Playfair+Display?query=Playfair+Display), [Raleway](https://fonts.google.com/specimen/Raleway?query=Raleway)

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

## Checklist for preparing a portfolio project for HR review

1. To make it clear to the recruiter what exactly this landing page is, it is better to give the whole web page the title “NAMU”
2. A landing page is implemented strictly according to the design in Figma
4. Links in the header and footer menus should lead to the corresponding blocks of the landing page
5. The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
6. Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
7. Make sure everything looks neat on mobile and without horizontal scrolling
8. Add favicon
9. Add a smooth scroll for the whole page
10. When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
11. The form shouldn’t submit empty
12. The buttons "buy a ticket" and "register" should lead to the block "Plan a visit to the museum"
13. Pictures in the blocks "Exhibitions", "Events", "News" should be animated and somehow move on hover or when scrolling down the page
14. Buttons in the footer of the menu should also be clickable and lead to blocks on the landing page.
16. All the social icons in the footer should be clickable and open the museum's social networks in a new tab
17. OPTIONAL: After everything is done, you can add a slider to the "News" block (for mobile version)


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
  [DEMO LINK](https://HrynykNataliia.github.io/Museum_2/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.
