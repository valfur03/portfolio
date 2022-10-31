#!/bin/bash

# Colors
NC="\e[0m"
BOLD="\e[1m"
# ULINE="\e[4m"
RED="\e[31m"
GREEN="\e[32m"
YELLOW="\e[33m"
BLUE="\e[34m"
# MAGENTA="\e[35m"

# Variables
DOTFILES_REPO_URL=${DOTFILES_REPO_URL:-"git@github.com:valfur03/dotfiles.git"}
DOTFILES_REPO_NAME=${DOTFILES_REPO_NAME:-".dotfiles"}
DOTFILES_REPO_DIRECTORY=${DOTFILES_REPO_DIRECTORY:-"$HOME/$DOTFILES_REPO_NAME"}

#==============================================================================#
#======================== STOP EDITING THE SCRIPT HERE ========================#
#==============================================================================#

if ! cd "$(dirname "$0")"
then
	printf "%bfatal: could not change directory... Aborting.\n%b" "$RED" "$NC"
	exit 1
fi

# Check commands
for command in printf git mkdir date find
do
	if ! command -v $command > /dev/null 2>&1
	then
		printf "%bfatal: '$command' command not installed... Aborting.\n%b" "$RED" "$NC"
		exit 1
	fi
done

# Header
printf "%b==> DOTFILES POPULATOR <==\n%b" "$BLUE" "$NC"
printf "\n"

# Checking if the directory exists
if [ -d "$DOTFILES_REPO_DIRECTORY" ]
then
	printf "%bThe directory '%s' already exists.\n%b" "$YELLOW" "$DOTFILES_REPO_DIRECTORY" "$NC"
	answer=""
	while [ "$answer" != $'\n' ] && [ "$answer" != "y" ] && [ "$answer" != "Y" ] && [ "$answer" != "n" ] && [ "$answer" != "N" ]
	do
		printf "Should I delete it? [y/n] "
		read -r -N1 answer
		printf "\n"
		if [ "$answer" == $'\n' ] || [ "$answer" == "y" ] || [ "$answer" == "Y" ]
		then
			printf "Deleting the directory '%s'\n" "$DOTFILES_REPO_DIRECTORY"
			rm -rf "$DOTFILES_REPO_DIRECTORY"
		elif [ "$answer" == "n" ] || [ "$answer" == "N" ]
		then
			printf "Aborting...\n"
			exit
		else
			printf "Your answer is not recognized...\n"
		fi
	done
fi

# Cloning the repo
printf "Cloning the repository...\n"
if ! git clone "$DOTFILES_REPO_URL" "$DOTFILES_REPO_DIRECTORY" > /dev/null 2>&1
then
	printf "%bfatal: An error occured while cloning the repository\n%b" "$RED" "$NC"
	exit 1
fi

# Backing up old dotfiles
printf "Backing up old dotfiles...\n"
if ! mkdir -p .backup
then
	printf "%bfatal: could not create the backup directory...\n%b" "$YELLOW" "$NC"
	exit 1
fi
backup_dir="$(date -Iseconds)-$$"
find "$DOTFILES_REPO_DIRECTORY" -type f -not -path "$DOTFILES_REPO_DIRECTORY/.git/*" -printf "%P\0" | while IFS= read -r -d '' dotfile
do
	if [ -f "$HOME/$dotfile" ]
	then
		mkdir -p "$(dirname ".backup/$backup_dir/$dotfile")"
		mv "$HOME/$dotfile" ".backup/$backup_dir/$dotfile"
		printf "> Backed up '%s'\n" "$dotfile"
	fi
done
if [ -d ".backup/$backup_dir" ]
then
	printf "The %bbackup directory%b is '%s'\n" "$BOLD" "$NC" "$DOTFILES_REPO_DIRECTORY/.backup/$backup_dir"
fi

printf "Populating HOME directory...\n"
find "$DOTFILES_REPO_DIRECTORY" -type f -not -path "$DOTFILES_REPO_DIRECTORY/.git/*" -printf "%P\0" | while IFS= read -r -d '' dotfile
do
	mkdir -p "$(dirname "$HOME/$dotfile")"
	ln -sf "$DOTFILES_REPO_DIRECTORY/$dotfile" "$HOME/$dotfile"
done
printf "%bDone!%b\n" "$GREEN" "$NC"
