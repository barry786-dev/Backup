####### ADD CUSTOM alias COMMANDS BELOW THIS LINE #######

# Shortcut to open this file in an editor window
alias addalias='code ~/.bashrc'

#***********************************************#
# The items in this .bashrc file are loaded once
# when you log on. To use your new aliases
# immediately, you need to run `source ~/.bashrc`
# in the Terminal to reload this file. Here's an
# alias that is easier to remember:
alias usenew='source ~/.bashrc'

#***************************************************#
# Automatically add all changed files and open an
# editor for the commit message. Note the use of
#the semi-colon (;) to enter two commands on one
# line.
alias gmit='git add .;git commit'

# cd to the top-level directory of the current git
# project (where the .git folder is stored)
alias gd='cd $(git rev-parse --show-toplevel)'

#****************************************************#
# Use the gits function to echo the location of all
# .git directories in the working directory or any
# of its parent directories. If more than one .git
# directory is found, you will need to correct this
# error.
gits () {
    found=0     # count the number of times a .git directory is found
    folder=.git # folder to look for
    path=$(pwd) # start from the current working directory

    while [[ "$path" != "" ]]; do
        if [ -e "$path/$folder" ]
        then
            # There is a .git folder in the directory defined by $path
            let found+=1
            echo $folder folder found at $path
        fi
        path=${path%/*} # remove the last directory name from $path
    done

    if [ $found -eq 0 ]
    then
        echo No $folder folder found
    elif [ $found -gt 1 ]
    then
        echo $found $folder folders found. Please correct this.
    fi
}

#*********************************************#
# Create a new directory then cd into it. Note th
#e use of -- to indicate the end of the flags, so
# that you can create a directory whose name starts
# with a hyphen, and the directory name will not be
# treated as a flag.
mkcd () {
  mkdir -p -- "$1" && cd -P -- "$1"
}

couch() {
parentdir="$(dirname "$1")"
mkdir -p $parentdir
touch "$1" && code "S1"
}
#*********************************************************#
# Command to create or navigate to a folder with
# today's date in YYMMDD format, and to open or create
# there a file with a given name + ".js", plus an
# executable index file that will open the named file.
#
# Example:
#
#    today exercise
#
# Creates:
#
#    ~/Documents/DCI/211216/exercise.js
# and
#    ~/Documents/DCI/index/exercise_211216
#
# If you simply type `today`, you will be asked for a
# task name. If you press Enter without giving a task
# name, `tree` will be called to show the hierarchy of
# files and folders in today's folder. If you use
# `--list` as the task name, the hierarchy of files and
# folders in the parent directory will be shown:
#
#     today # Enter
# .
# ├── files.js
# ├── created.js
# └── today.js
#
#     today # --list
#
# ├── 211216
# │   ├── files.js
# │   ├── created.js
# │   └── today.js
# └── index
#     ├── created_211215
#     ├── files_211216
#     └── today_211216
today() {
  # <<< HARD-CODED path to your repos folder
  path="Desktop/backfiles/notes"
  # HARD-CODED >>>
  # Prepare an index folder (if it does not already exist)
  index="$HOME/$path/index/"
  mkcd "$index"
  # Ask for a task name if none was given. If the
  # task remains empty, then
  task=$1
  if [ -z "$task" ]; then
    echo "Task name (leave blank to list today's files):"
    read task
  fi
  # Get today's date in YYMMDD format
  day=$(date +'%y%m%d')
  # Ensure that the folder exists
  dir="$HOME/$path/$day"
  mkcd "$dir"
  if test -n "${task-x}"; then
    if [[ $task == "--list" ]]; then
      # Show list of files by date in the parent folder
      tree -L 2 ../
    else
      # Create an empty js file...
      code -r .
      file="$dir/$task.md"
      text="/**
 * $task.md
 */
"
      echo "$text" > "$file"
      #couch "$file"
      # Add an executable file in index/ that will open it
      # assuming $index and $group are also defined
      link="$index/${task}_${day}"
      text=text=$(echo '#!/bin/bash
code -n '$dir)
      echo "$text" > "$link"
      chmod 755 "$link"
    fi
  else
    # list the files in today's folder
    tree
  fi
}


#**************************************************************#
# Alias to switch to a different folder in the current
# window
cdcode () {
  cd "$1"
  code -r .
}

# Alias to create a new web project, complete with
# folders for css/, img/ and js/; empty style.css and
# script.js files, and a boilerplate index.html file
nwp (){
  mkcd "$1"
  mkdir css img js
  touch css/styles.css js/script.js index.html
  code -r .
  code css/styles.css
  code js/script.js
  cat << EOF >> ./index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>


    <script src="js/script.js"></script>
</body>
</html>
EOF
  code index.html
}

# Alias to create a new web project in a specific folder
# inside a subfolder with today's date in YYMMDD format
# Example: on 1 February 2003, the command...
#
#   devtask flex
#
# ... will create a folder at the following location
# with the following content:
# ~/DCITasks/030201/flex.
#                       ├── css
#                       │   └── styles.css
#                       ├── img
#                       ├── index.html
#                       └── js
#                           └── script.js

devtask () {
    dir=~
    dir=$dir"DCITasks/" # customize this directory path
    day=$(date +'%y%m%d')
    mkcd "$dir$day"
    np "$1"
}

# Shortcut to open a new window showing the directory
# containing user settings
alias uconfig='code ~/.config/Code/User/'




