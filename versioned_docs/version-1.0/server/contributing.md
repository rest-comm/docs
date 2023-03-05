---
sidebar_position: 4
---

# How to Contribute

## Git Workflow

It is important to follow the recommended git workflow to ensure consistency and cleanliness.

### Steps

1. In the main branch, run `git pull` to get the latest changes.
2. Create a new branch by running `git checkout -b [task-type]/[task_description]`. Work on your task/feature in this branch.
3. After you are done with all your changes, `git add .` and `git commit -m "commit message"` to commit your changes locally.
4. Next, run `git pull origin main --rebase` to fetch new changes in the main branch (if any). Fix merge conflicts if any.
5. Push your branch to GitHub by running `git push` or `git push --set-upstream origin [branch-name]` (if this branch does not exist on GitHub)
6. Go to this GitHub repo and make a pull request from your branch to `main` branch. Name the PR with a `Meaningful Title`.
7. Ensure that all automated checks passes. Fix any errors that occurs.
8. Request 1 person to review your pull request, and you are done!
9. If you are reviewer, perform `squash and merge` after approving the pull request.

### Naming Conventions

<details>
    <summary>Naming [task-type] for new branches</summary>
    <ul>
        <li>feat: A new feature</li>
        <li>fix: A bug fix</li>
        <li>docs: Documentation only changes</li>
        <li>style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)</li>
        <li>refactor: A code change that neither fixes a bug nor adds a feature</li>
        <li>perf: A code change that improves performance</li>
        <li>test: Adding missing or correcting existing tests</li>
        <li>chore: Changes to the build process or auxiliary tools and libraries such as documnetation generation</li>
        <li>revert: A revert to a previous commit</li>
    </ul>
</details>
