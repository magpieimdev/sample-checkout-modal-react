import React, {useState, useEffect} from 'react';

import './normalize.css';
import './App.css';

function App() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(100)
  const [magpie, setMagpie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const checkout = window.MagpieCheckout({
      key: process.env.REACT_APP_MAGPIE_PUBLIC_KEY,
      icon: 'https://client-objects.s3-us-west-2.amazonaws.com/storeicon.png',
      mainColor: '#4f99ee',
      allowCardTransaction: true,
      allowRememberMe: true,
      token: (result) => {
        console.log('result', result);
      }
    });
    setMagpie(checkout);
  }, [])

  useEffect(() => {
    setPrice(quantity * 100);
  }, [quantity]);

  const handleClick = () => {
    if (magpie) {
      setLoading(true);
      if (quantity > 0 && price > 0) {
        magpie.open({
          amount: price * 100, //convert amount to cents
          name: 'Pasha Photo',
          description: `Qty ${quantity}, 100 PHP each`
        });
      }
      setLoading(false);
    }
  }

  return (
    <div className="sr-root">
      <div className="sr-main">
        <header className="sr-header">
          <div className="sr-header__logo"></div>
        </header>
        <section className="container">
          <div>
            <h1>Single photo</h1>
            <h4>Purchase a Pasha original photo</h4>
            <div className="pasha-image">
              <img
                alt="Random asset from Picsum"
                src="https://picsum.photos/280/320?random=4"
                width="140"
                height="160"
              />
            </div>
          </div>
          <div className="quantity-setter">
            <button
              className="increment-btn"
              disabled={quantity === 1}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </button>
            <input
              type="number"
              id="quantity-input"
              min="1"
              max="10"
              value={quantity}
              readOnly
            />
            <button
              className="increment-btn"
              disabled={quantity === 10}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <p className="sr-legal-text">Number of copies (max 10)</p>

          <button
            role="link"
            onClick={handleClick}
            disabled={!magpie || loading}
          >
            {loading || !price
              ? `Loading...`
              : `Buy for ${price.toFixed(2)} PHP`}
          </button>
          <div className="sr-field-error">{error?.message}</div>
        </section>
      </div>
      <div className="banner">
        <span>
          {'This is a '}
          <a href="https://github.com/flairlabs/accept-payment-checkout-modal">Magpie Sample</a>
          {' accepting payments with Magpie Checkout. '}
          <a href="https://github.com/flairlabs/accept-payment-checkout-modal">View code on GitHub</a>
        </span>
      </div>
    </div>
  );
}

export default App;
