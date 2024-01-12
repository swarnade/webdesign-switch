# 🎉 Welcome to Web Button Designs! 🎊

An Open Source Website Where Developer's Can Get Pre-Designed Button's CSS Sheet .Just Can Copy the Design and Implment It

[Project Repo](https://github.com/swarnade/webdesign-switch)
<br />
[Project Website](https://webdesign.swarnadeepsahapoddar.in/)

# Project Tech Stack

This project is built using the following technologies:

- **HTML**: HTML stands for HyperText Markup Language. It's a markup language that's used to design web pages. HTML is made up of a series of elements that tell the browser how to display the content.

- **CSS**: CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files

- **JS**: JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.

- **Bootstrap**: Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

## Buttton Adding Procedure

### 1.Create a CSS File

- Create a File In design_button Sub-Directory
- CSS File Should Be Your Github Username

### 2.Paste The Code In HTML Document in Row Div
```
<div class="col-12 col-md-3 main-row">
  <div class=" box-main">
      <a href="{CSS File Link}">  
          <button id="{github-username}">Button </button>
      </a>
      <br />
      <p1 class="designed-by">{Name Of The Designer}</p1>
      <div>
          <a href="{Github Account Link}">
              <img src="./assets/github.png" class="img-github">
          </a>
          <a href="{Linkdin Account Link}">
              <img src="./assets/linkedin.png" class="img-linkedin">
          </a>
      </div>
  </div>
</div>
```
- Use Your Github Username As The Button Id And Css File Name
- If You Have Contributed For Multiple Button Use userrname-1/userrname-2
- Redirect To The CSS File Of The Button
- Make Sure To Include Your Name/Github/Linkedin


## How to make a Pull Request?

### 1. Fork the Repository

- Click on the "Fork" button in the top right corner of the repository page.
- This will create a copy of the repository in your GitHub account.

### 2. Clone Your Fork

- Open a terminal on your local machine.
- Use the `git clone` command to clone your forked repository to your local machine.
  ```bash
  git clone https://github.com/your-username/repository.git
  cd repository
  ```

3. **Create a Branch**
   - Create a new branch:
     ```bash
     git checkout -b branch-name
     ```

### 4. Make Changes

- Open the Markdown file and make your changes.

### 5. Commit Changes

- Save changes and commit:
  ```bash
  git add .
  git commit -m "Describe changes"
  ```

### 6. **Push Changes**

- Push changes to your fork:
  ```bash
  git push origin branch-name
  ```

### 7. **Create a Pull Request**

- Visit your fork on GitHub.
- Switch to your branch.
- Click "New Pull Request."

### 8. **Compare Changes**

- Ensure the base repository and branch are correct.

### 9. **Create Pull Request**

- Add a title and description.
- Click "Create Pull Request."

### 10. **Review and Merge**

    - Wait for review and merge by repository maintainers.

### 11. **Sync Your Fork (Optional)**

    - Periodically sync your fork:
      ```bash
      git fetch upstream
      git checkout main
      git merge upstream/main
      git push origin main
      ```

<h2>Congratulations! You've made your first contribution! 🙌🏼</h2>
