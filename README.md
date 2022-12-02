# NotesMD
NotesMD - Open Source and free Markdown editor. Available on web & desktop (unstable) for Windows and Linux. Writed on Go Wails and Vue.js.

## Features
* Markdown notes
* Folders
* Saving note as Markdown file
* Sharing a note by public link

Right now the public server is down, but you can use your own server to host the app. To do this, see the instructions for the [back-end service repository](https://github.com/RomanShirov/notesmd-service).

![](https://user-images.githubusercontent.com/47012273/203850928-7a92997a-df9d-436b-8713-b9a468c3b561.png)

##  Build desktop

Because the desktop version uses Firefox and WebKit, application may be unstable, not authorizing accounts, loading data etc.

Build Desktop version:

* Install Go (1.18 or newer)
* Install Wails: `go install github.com/wailsapp/wails/v2/cmd/wails@latest`
* Build the application: (for build Windows version: use ` windows/amd64` instead Linux)

```sh
git clone https://github.com/RomanShirov/notesmd-app
cd notesmd-app
wails build linux
cd build/bin &&
./notes_md
```

## Known issues
* Can't change note title
* Active «Share» button on already shared note