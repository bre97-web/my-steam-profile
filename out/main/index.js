"use strict";
const electron = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjUgNjUiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii41IiB5PSIuNSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iQSIgeDI9IjUwJSIgeDE9IjUwJSIgeTI9IjEwMCUiIHkxPSIwJSI+PHN0b3Agc3RvcC1jb2xvcj0iIzExMWQyZSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwNTE4MzkiIG9mZnNldD0iMjEuMiUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMGExYjQ4IiBvZmZzZXQ9IjQwLjclIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzEzMmU2MiIgb2Zmc2V0PSI1OC4xJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNDRiN2UiIG9mZnNldD0iNzMuOCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMTM2NDk3IiBvZmZzZXQ9Ijg3LjMlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzEzODdiOCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHN5bWJvbCBpZD0iQiI+PGc+PHBhdGggZD0iTTEuMzA1IDQxLjIwMkM1LjI1OSA1NC4zODYgMTcuNDg4IDY0IDMxLjk1OSA2NGMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJzLTE0LjMyNy0zMi0zMi0zMkMxNS4wMDEgMCAxLjEyNCAxMy4xOTMuMDI4IDI5Ljg3NGMyLjA3NCAzLjQ3NyAyLjg3OSA1LjYyOCAxLjI3NSAxMS4zMjh6IiBmaWxsPSJ1cmwoI0EpIi8+PHBhdGggZD0iTTMwLjMxIDIzLjk4NWwuMDAzLjE1OC03LjgzIDExLjM3NWMtMS4yNjgtLjA1OC0yLjU0LjE2NS0zLjc0OC42NjJhOC4xNCA4LjE0IDAgMCAwLTEuNDk4LjhMLjA0MiAyOS44OTNzLS4zOTggNi41NDYgMS4yNiAxMS40MjRsMTIuMTU2IDUuMDE2Yy42IDIuNzI4IDIuNDggNS4xMiA1LjI0MiA2LjI3YTguODggOC44OCAwIDAgMCAxMS42MDMtNC43ODIgOC44OSA4Ljg5IDAgMCAwIC42ODQtMy42NTZMNDIuMTggMzYuMTZsLjI3NS4wMDVjNi43MDUgMCAxMi4xNTUtNS40NjYgMTIuMTU1LTEyLjE4cy01LjQ0LTEyLjE2LTEyLjE1NS0xMi4xNzRjLTYuNzAyIDAtMTIuMTU1IDUuNDYtMTIuMTU1IDEyLjE3NHptLTEuODggMjMuMDVjLTEuNDU0IDMuNS01LjQ2NiA1LjE0Ny04Ljk1MyAzLjY5NGE2Ljg0IDYuODQgMCAwIDEtMy41MjQtMy4zNjJsMy45NTcgMS42NGE1LjA0IDUuMDQgMCAwIDAgNi41OTEtMi43MTkgNS4wNSA1LjA1IDAgMCAwLTIuNzE1LTYuNjAxbC00LjEtMS42OTVjMS41NzgtLjYgMy4zNzItLjYyIDUuMDUuMDc3IDEuNy43MDMgMyAyLjAyNyAzLjY5NiAzLjcycy42OTIgMy41Ni0uMDEgNS4yNDZNNDIuNDY2IDMyLjFhOC4xMiA4LjEyIDAgMCAxLTguMDk4LTguMTEzIDguMTIgOC4xMiAwIDAgMSA4LjA5OC04LjExMSA4LjEyIDguMTIgMCAwIDEgOC4xIDguMTExIDguMTIgOC4xMiAwIDAgMS04LjEgOC4xMTNtLTYuMDY4LTguMTI2YTYuMDkgNi4wOSAwIDAgMSA2LjA4LTYuMDk1YzMuMzU1IDAgNi4wODQgMi43MyA2LjA4NCA2LjA5NWE2LjA5IDYuMDkgMCAwIDEtNi4wODQgNi4wOTMgNi4wOSA2LjA5IDAgMCAxLTYuMDgxLTYuMDkzeiIvPjwvZz48L3N5bWJvbD48L3N2Zz4=";
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...process.platform === "linux" ? { icon } : {},
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false
    },
    icon
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../../docs/index.html"));
  }
}
electron.app.whenReady().then(() => {
  utils.electronApp.setAppUserModelId("com.electron");
  electron.app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });
  createWindow();
  electron.app.on("activate", function() {
    if (electron.BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
