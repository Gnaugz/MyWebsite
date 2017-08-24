$message = Read-Host -Prompt 'Commit Message'
cd C:\Users\dave\desktop\mywebsite-master
git add -A
git commit -m '$message'
git push
cd C:\Users\dave\desktop\scripts