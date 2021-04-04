# Accept a payment with Magpie Checkout

This integration shows you how to accept payments with Magpie Checkout.

Building a payment form UI from scratch is difficult -- input field
validation, error message handing, and localization are just a few things
to think about when designing a simple checkout flow.

We built Checkout to do that
work for you so now you can focus on building the best storefront
experience for your customers.

Once your customer is ready to pay, use checkout.js to open the Magpie hosted Checkout dialog. 🥳

## How to run locally

**Installing and cloning manually**

```
git clone https://github.com/flairlabs/accept-payment-checkout-modal
```

Rename and move the [`.env.example`](.env.example) file into a file named
`.env` in the root folder. For example:

```
cp .env.example .env
```

Example `.env` file:

```sh
REACT_APP_MAGPIE_PUBLIC_KEY=<replace-with-your-publishable-key>
```

You will need a Magpie merchant account in order to run the demo. Once you set up
your account, go to the Magpie [developer
dashboard](https://dashboard.magpie.im/dashboard/developer/keys) to find your API
keys.

**Running locally**

### `cd accept-payment-checkout-modal`

Make sure you are in the project directory.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser, otherwise visit [http://localhost:4242](http://localhost:4242).

### Open Developer Tools

The result of checkout will be logged in your browser's `Developer Tools` under `Console` tab.
