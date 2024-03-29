# keychain2bitwarden
keychain2bitwarden is a js utility to convert a macOS Safari Keychain export csv to Bitwarden's json format.

> [!IMPORTANT]  
> This repo is archived as of September 2023, and will not be updated or actively maintained any further. Use at your own discretion.


## Usage
1. Export your Keychain passwords via Safari on MacOS:    
Preferences → Passwords → … → Export passwords.  
Save the csv file in a convenient place.

2. Run `keychain2bitwarden convert` on that export file:
```shell
npx keychain2bitwarden convert Passwords.csv > keychain.json
```
Note that keychain2bitwarden outputs to stdout, so you'll need to redirect it's output to your file.

3. Import `keychain.json` in your Bitwarden vault through the web UI at https://vault.bitwarden.com/#/tools/import 

4. Delete both `Passwords.csv` as `keychain.csv` — as these files contain all your passwords in plain text, so don't leave these laying around!
