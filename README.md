# paystack2

### Introduction
The new Nodejs API wrapper for Paystack

You might be thinking why a new Nodejs library if we already have one, well as it is the current library is deprecated and is no longer maintained also Paystack's api now has version 2.

So this will serve as a replacement and I will make sure this is actively maintained

**Note**: This library uses version 2 api docs

> This libray is currently under development and has not been publish to npm yet follow the code in transaction.ts in the resource folder to structure write other resource

### Documentation
For the paystack api reference, see [v1](https://developers.paystack.co/reference) and [v2](https://developers.paystack.co/v2.0/reference)

### Installation (npm package coming soon)
`$ git clone https://github.com/sheghun/paystack2.git`

`$ npm install || yarn add`

### Usage

#### Basic
import the entry file and create a instance of Paystack with your api key as parameter.

```ts

// import entry file
import Paystack from "../index"

const { KEY } = process.env;

const paystack = new Paystack(KEY);

```
#### TRANSACTIONS API
#### Initialize a transaction - supports native promises & ES6 async/await
Method - initialize
```
Parameters - options {object}

options = {
  email
  amount
  reference
}

response = {
  status: string,
  message: string,
  data: {
    authorization_url: string,
    access_code: string,
    reference: string
  }
}

```

##### Async/await
```ts

try {

  const response = await paystack.transaction.initialize({ options });
  
} catch(err) {
  // handle error
}

```

#### Verify a transaction

Method - verify
```
parameters = transaction reference

response = {
  status: boolean
  message: string
  data: {
    amount: number,
    currency: string,
    transaction_date: string,
    status: string,
    reference: string,
    gateway_response: string,
    channel: string,
    plan: string,
    requested_amount: string
  }
```

```ts
try {

  const response = await paystack.transaction.verify(trans_ref);
  
} catch(err) {
  // handle error
}

```
#### List transactions
Method - list
```
response = {
  status: string,
  message: string,
  data: [
    {
      id: number,
      domain: string,
      status: string,
      reference: string,
      amount: number,
      message: null,
      gateway_response: string,
      paid_at: null,
      created_at: string,
      channel: string,
      currency: string,
      customer: {
        first_name: string,
        last_name: string,
        email: string,
        phone: string,
        metadata: null,
        customer_code: string
      },
      authorization: {},
      plan: {},
      requested_amount: number
      
    }
  ]
}

```

```ts

try {

  const response = await paystack.transaction.list();
  
} catch(err) {
  // handle error
}

```
