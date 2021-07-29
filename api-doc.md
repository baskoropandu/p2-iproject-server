# Indo Miners

Models:

_User_

```
- email : string, required, unique
- name : string, required, unique
- password : string, required
```

_Miner_

```
- UserId : integer, required
- CoinId : integer, required
- wallet : string, required
- unpaidBalance : float, required
```

_Coin_

```
- name : string, required
- volume : float, required
- price : float, required
```

_MinerLog_

```
- minerId : integer, required
- hashrate : float, required
```

features:
- data for coin and miner are updated every hour
- miner log added every hour
- weekly report on your miner

list of available endpoints:

- `POST /register`
- `POST /login`
- `GET /coins`
- `GET /coins/:id`

routes below need authentication

- `GET /miners`
- `POST /miners`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "username": "string",
  "password": "string",
  "phoneNumber": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "usrname": "string"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
	"access_token": "jwt string",
	"username": "string"
}
```

_Response (401 - Unauthenticated)_

```json
{ "error": "wrong email/password" }
```

### GET /coins

description:
get all coin data from database, coin price updated every hour


Response:

- status: 200
- body:

```json
[
  {
    "id": 1,
    "name": "ETH",
    "volume": 1096.83410212,
    "price": 33000000
  },
  {
    "id": 2,
    "name": "ETC",
    "volume": 2628.35943226,
    "price": 700000
  },
  ...,
  ...,
]
```
### GET /coins/:id

description:
get a coin data by it's id from database, coin price updated every hour


Response:

- status: 200
- body:

```json
[
  {
    "id": 1,
    "name": "ETH",
    "volume": 1096.83410212,
    "price": 33000000
  }
]
```

### POST /miners

description:
add a miner

Request:

- headers: access_token (string)
- body:

```json
{
  "wallet": "string",
  "CoinId": "integer"
}
```

Response:

- status: 201
- body:

```json
{
  "id": 1,
  "userId": 1,
  "CoinId": 1,
  "wallet": "0x34393cd6af465a071d86ba3fc612a9946ce045fd",
  "unpaidBalance": "220262284910831",
  "updatedAt": "2021-06-02T14:05:21.415Z",
  "createdAt": "2021-06-02T14:05:21.415Z"
}
```
### GET /miners

description:
show all miners from user, updated every hour

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
    {
        "id": 1,
        "UserId": 1,
        "CoinId": 1,
        "wallet": "0x34393cd6af465a071d86ba3fc612a9946ce045fd",
        "unpaidBalance": 220262284910831,
        "createdAt": "2021-07-28T14:44:02.469Z",
        "updatedAt": "2021-07-28T14:44:02.469Z",
        "MinerLogs": [
			{"MinerLogHour1"},
			{"MinerLogHour2"},
			...,
		],
        "Coin": {
            "id": 1,
            "name": "ETH",
            "volume": 1032.87613042,
            "price": 33082000,
            "createdAt": "2021-07-28T09:25:42.144Z",
            "updatedAt": "2021-07-29T04:00:01.123Z"
        }
    },
    {
        "id": 2,
        "UserId": 1,
        "CoinId": 2,
        "wallet": "0xf59e62a363dfba43dd94b69f31013ebf573759db",
        "unpaidBalance": 513933413432257000,
        "createdAt": "2021-07-28T16:12:17.245Z",
        "updatedAt": "2021-07-28T16:12:17.245Z",
        "MinerLogs": [{"MinerLogHour1"},{"MinerLogHour2"},...],
        "Coin": {
            "id": 2,
            "name": "ETC",
            "volume": 2297.93415228,
            "price": 701100,
            "createdAt": "2021-07-28T09:25:42.217Z",
            "updatedAt": "2021-07-29T04:00:01.140Z"
        }
    }
]
```
