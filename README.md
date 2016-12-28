# h1bstatus
Scrapes USCIS website for H1b Status


## Using Docker

```
# Build Docker
docker build -t h1bstatus .

# Get H1b Status
docker run -it h1bstatus <YOUR_RECEIPT_NUMBERS> [<YOUR_RECEIPT_NUMBERS>]
```

eg:

```
> docker run -it h1bstatus WACXXXXXXX WACYYYYYYYY

npm info it worked if it ends with ok
npm info using npm@3.10.10
npm info using node@v7.3.0
npm info lifecycle h1b@1.0.0~prestart: h1b@1.0.0
npm info lifecycle h1b@1.0.0~start: h1b@1.0.0

> h1b@1.0.0 start /usr/src/app
> node index.js "WACXXXXXXX" "WACYYYYYYYY"

Status for 'WACXXXXXXX' is 'Case Was Received'
Status for 'WACYYYYYYYY' is 'Case Was Received'
npm info lifecycle h1b@1.0.0~poststart: h1b@1.0.0
npm info ok
```


## Using node

```
> npm start WACXXXXXXX WACYYYYYYYY
```
