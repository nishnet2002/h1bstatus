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

Status for 'WACXXXXXXX' is 'Case Was Received'
Status for 'WACYYYYYYYY' is 'Case Was Received'
```


## Using node

```
> npm start WACXXXXXXX WACYYYYYYYY
```
