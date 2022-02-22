#!/usr/bin/env sh

# abort on errors
set -e

# build
ionic build --prod

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'accountabuddy.costl.io' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wargunnerguy/accounta-buddy-app-vue.git master:gh-pages

cd -
