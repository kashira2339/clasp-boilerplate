function fetchGoogle(): string {
  return UrlFetchApp.fetch('https://google.com').getContentText()
}
