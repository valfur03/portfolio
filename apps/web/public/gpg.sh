#!/bin/sh

# Inform GPG which TTY to use for the password prompt
GPG_TTY="$(tty)"
export GPG_TTY

# valfur03 GPG config
valfur03_name_real='Valentin Furmanek'
valfur03_name_email='valentin.furmanek@gmail.com'
gpg --full-generate-key --batch <<EOF
Key-Type: RSA
Key-Length: 4096
Expire-Date: 0
Name-Real: $valfur03_name_real
Name-Email: $valfur03_name_email
EOF
valfur03_key_id="$(gpg --list-secret-keys --with-colons --keyid-format=long | grep -B3 'Valentin Furmanek <valentin.furmanek@gmail.com>' | head -1 | awk -F: '{print $5}')"

# vfurmane GPG config
vfurmane_name_real='Valentin Furmanek'
vfurmane_name_email='vfurmane@student.42.fr'
vfurmane_name_comment='vfurmane GPG key at 42'
gpg --full-generate-key --batch <<EOF
Key-Type: RSA
Key-Length: 4096
Expire-Date: 0
Name-Real: $vfurmane_name_real
Name-Email: $vfurmane_name_email
Name-Comment: $vfurmane_name_comment
EOF
vfurmane_key_id="$(gpg --list-secret-keys --with-colons --keyid-format=long | grep -B3 'Valentin Furmanek (vfurmane GPG key at 42) <vfurmane@student.42.fr>' | head -1 | awk -F: '{print $5}')"

# Export keym
echo "valfur03 key"
gpg --armor --export "$valfur03_key_id"
echo "vfurmane key"
gpg --armor --export "$vfurmane_key_id"
