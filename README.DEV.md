# Deploy to Github Pages

On `main` branch:

1. `npm run build`
2. `git add .`
3. `git commit -m "deploy"`
4. `git push`
5. `git subtree push --prefix dist origin gh-pages`