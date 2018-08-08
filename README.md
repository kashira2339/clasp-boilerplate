# clasp boilerplate

[clasp](https://github.com/google/clasp)（is Google Apps Script local development library） boilerplate by kashira2339.

- clasp
- typescript
- prettier

## Set up

```sh
git clone https://github.com/kashira2339/clasp-boilerplate.git
cd clasp-boilerplate
npm i

# Authorize your Google account.
npx clasp login
```

...and open `.clasp.json`, you might replace `<your script id>` to your real script id.

```json
{"scriptId":"<your script id>"}
```

## How to use another file function?

First, define function to another file.

```ts
// src/utils.ts
function fetchGoogle(): string {
  return UrlFetchApp.fetch('https://google.com').getContentText()
}
```

Next, write type define code and put into `types/*.d.ts`

```ts
// types/utils.d.ts
declare function fetchGoogle(): string
```

And call function from main code file!

```ts
// src/Code.ts
function main() {
  Logger.log(fetchGoogle())
}
```