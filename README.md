# Getting Started

## Prerequisites

* [Download and install Node.js](https://nodejs.org/en/download/)

## Quick Start

1. Install dependencies:
   ```console
   $ npm install
   ```
2. Download .env file to root project folder:
   ```console
   $ curl --fail -d "DOTENV_VAULT=vlt_b8040cf0c2aa20e4dce725fde3166d32d20c50c20f5f3107edf1ace2b1a5d856&DOTENV_ME=it_6840ab44b2901dbdd302fddc78fb5aac9195d5592ef1121e8ab95214a64f7183" -X POST https://vault.dotenv.org/pull.txt > .env
   ```
   
2. Start the server:
   ```console
   $ npm run start:dev

   Listening on port: 3031
   ```

# API

## Get a trip

### Request

`GET /trips/:id`

    curl http://localhost:3031/v1/trips/pZEi7EbiT8 -i

### Response

      HTTP/1.1 200 OK

      {"id":"pZEi7EbiT8","status":"in_progress","start_location":{"latitude":33.214,"longitude":-96.614,"address":{"line1":"449 Flora St.","city":"Dallas","state":"TX","postal_code":"75201"}},"end_location":{"latitude":32.89,"longitude":-97.04,"address":{"line1":"DFW International Airport - Terminal E","city":"Irving","state":"TX","postal_code":"75261"}},"payment_method":"Amex01","driver":{"name":"Steph","image_url":"","about":"Steph Festiculma is a graduate of Parsons New School in New York and \n      fluent in Portugeuse, Spanish, and English. Steph has been driving with Alto \n      since 2018.","phone":"+15555555555"},"passengers":[],"vehicle":{"name":"Alto 09","year":"2019","make":"Volkswagen","model":"Atlas","color":"Pure White"},"vibe":{"id":"p2odjFf480","name":"Vaporwave Beats"}}

## Update a trip

### Request

`PATCH /trips/:id`

    curl -X PATCH -H 'Content-Type: application/json' -d '{"vibe": {"id": "p2odjFf480", "name": "Classic Rock" }}' http://localhost:3031/v1/trips/pZEi7EbiT8 -i

### Response

      HTTP/1.1 200 OK

      {"id":"pZEi7EbiT8","status":"in_progress","start_location":{"latitude":33.214,"longitude":-96.614,"address":{"line1":"449 Flora St.","city":"Dallas","state":"TX","postal_code":"75201"}},"end_location":{"latitude":32.89,"longitude":-97.04,"address":{"line1":"DFW International Airport - Terminal E","city":"Irving","state":"TX","postal_code":"75261"}},"payment_method":"Amex01","driver":{"name":"Steph","image_url":"","about":"Steph Festiculma is a graduate of Parsons New School in New York and \n      fluent in Portugeuse, Spanish, and English. Steph has been driving with Alto \n      since 2018.","phone":"+15555555555"},"passengers":[],"vehicle":{"name":"Alto 09","year":"2019","make":"Volkswagen","model":"Atlas","color":"Pure White"},"vibe":{"id":"p2odjFf480","name":"Classic Rock"}}

## Get estimated trip duration

### Request

`GET /estimates/duration`

### Params
`?start_latitude=33.214&start_longitude=-96.614&end_latitude=32.89&end_longitude=-97.04`

    curl http://localhost:3031/v1/estimates/duration?start_latitude=33.214&start_longitude=-96.614&end_latitude=32.89&end_longitude=-97.04 -i

### Response

      HTTP/1.1 200 OK
      
      {"duration":{"text":"39 mins","value":2352}}

## Get estimated fare

### Request

`GET /estimates/fare`

### Params
`?start_latitude=33.214&start_longitude=-96.614&end_latitude=32.89&end_longitude=-97.04`

    curl http://localhost:3031/v1/estimates/fare?start_latitude=33.214&start_longitude=-96.614&end_latitude=32.89&end_longitude=-97.04 -i

### Response

      HTTP/1.1 200 OK
      
      {"fare":{"low":5574,"high":6574}}

## Get available vehicle vibes

### Request

`GET /vibes`

      curl http://localhost:3031/v1/vibes -i 

### Response

      HTTP/1.1 200 OK

      [{"id":"p2odjFf480","name":"Vaporwave Beats"},{"id":"zPl4bFtt1K","name":"Classic Rock"}]
