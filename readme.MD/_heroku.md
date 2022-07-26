npx create-react-app@latest your-project-name --use-npm
 cd your-app-name
 code -r .
 Add this to package.json
,
  "engines": {
    "node": "14.18.2",
    "npm": "8.3.0"
  }
  
(Get the values using node -v && npm -v in the Terminal)
npm run build
sudo snap install --classic heroku
heroku --version
heroku/7.59.2 linux-x64 node-v12.21.0
heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/74a5584b-198c-42ef-ada1-72cc6ceae07a?requestor=SFMyNTY.g2gDbQAAAA0xOTQuMzIuMTIwLjU2bgYAuJp1wn0BYgABUYA.TXKMg0NX7CNMHlOEfaH01BCXEQMAIN8Zs1nudJB9r5I
Logging in... done
Logged in as <your email address>
heroku create your-app-name
^^^ Your app name must be unique
Creating ⬢ your-app-name... done
https://your-app-name.herokuapp.com/ | https://git.heroku.com/your-app-name.git
git init
git remote add heroku https://git.heroku.com/your-app-name.git
git remote -v
heroku  https://git.heroku.com/your-app-name.git (fetch)
heroku  https://git.heroku.com/your-app-name.git (push)
git add . && git commit -m "Create barebones React app for Heroku"
git push heroku master
Visit https://your-app-name.herokuapp.com/ (edited) 

James Newton  10:29
https://dciforks.github.io/nav-menu/ (edited) 

James Newton  11:29
https://github.com/DCIForks/E07/wiki/Good-git-commit-messages:-using-VS-Code-as-your-git-editor

James Newton  11:47
https://github.com/gitname/react-gh-pages
gitname/react-gh-pages
Deploying a React App (created using create-react-app) to GitHub Pages
Website
https://gitname.github.io/react-gh-pages/
Stars
2797