#!/data/data/com.termux/files/usr/bin/bash
# Termux script to commit, push, and print GitHub Pages URL

# Navigate to project folder
cd ~/projects/my_website || exit

# Check if index.html exists
if [ ! -f index.html ]; then
  echo "⚠️  index.html not found! GitHub Pages needs it."
  exit 1
fi

# Add all changes
git add .

# Commit with timestamp
git commit -m "Update website $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub (main branch)
git push -u origin main

# Print GitHub Pages URL
echo "✅ Done! Your GitHub Pages site is at:"
echo "https://5910henry-art.github.io/my_website/"
