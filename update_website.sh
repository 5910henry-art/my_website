#!/data/data/com.termux/files/usr/bin/bash
# Script to commit, push, and open GitHub Pages site

# Navigate to project folder (adjust if needed)
cd ~/projects/my_website || exit

# Add all changes
git add .

# Commit with timestamp message
git commit -m "Update website $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
git push -u origin master

# Open GitHub Pages in browser
termux-open-url https://5910henry-art.github.io/my_website/
