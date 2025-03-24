#!/bin/bash

# 🛠️ STEP 1: Start an interactive rebase from the root
echo "Starting interactive rebase..."
git rebase -i --root

# 🔁 STEP 2: Replace 'pick' with 'edit' for all commits, save and close the editor
echo "📌 IMPORTANT: Replace 'pick' with 'edit' for each commit, then save and exit the editor."

read -p "Press [Enter] once you've edited and saved the rebase file..."

# 📅 STEP 3: Backdate each commit
commits=(
  "2023-03-18T10:15:34"
  "2023-03-22T18:45:47"
  "2023-03-23T10:22:12"
  "2023-04-12T16:08:32"
  "2023-05-15T07:34:32"
)

i=0

for date in "${commits[@]}"; do
  echo "⏳ Amending commit $((i+1)) with date: $date"
  GIT_COMMITTER_DATE="$date" git commit --amend --no-edit --date "$date"
  git rebase --continue
  ((i++))
done

echo "✅ All commits have been backdated successfully!"
