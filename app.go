package main

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"os"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved,
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) SaveNoteListState(data json.RawMessage) {
	binaryData := data
	_ = os.WriteFile("notes.json", binaryData, 0644)
}

func (a *App) GetNotes() string {
	jsonFile, _ := os.Open("notes.json")
	defer jsonFile.Close()
	bytePayload, _ := ioutil.ReadAll(jsonFile)
	payload := string(bytePayload)
	return payload
}
