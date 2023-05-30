<br/>
<p align="center">
  <a href="https://github.com/MDBossss/hotcoin">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Hotcoin</h3>

  <p align="center">
    A simple cryptocurrency price and news app made with React, SASS and Firebase.
    <br/>
    <br/>
    <a href="https://github.com/MDBossss/hotcoin">View Demo</a>
    .
    <a href="https://github.com/MDBossss/hotcoin/issues">Report Bug</a>
    .
    <a href="https://github.com/MDBossss/hotcoin/issues">Request Feature</a>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/MDBossss/hotcoin?color=dark-green) ![Issues](https://img.shields.io/github/issues/MDBossss/hotcoin) ![License](https://img.shields.io/github/license/MDBossss/hotcoin) 

## About The Project

![Screen Shot](images/showcase.png)

Hotcoin is a small React project about cryptocurrency data, fetching crypto related news from [newscatherapi.com](https://newscatcherapi.com/news-api) and listing top 100 cryptocurrencies and their prices from [api.coingecko.com/api/v3](https://api.coingecko.com/api/v3/coins/). 

The app uses Firebase for user login and register authentication, and uses its JSON database for storing user data such as bookmarked posts. 

## Technologies
* React
* Firebase

## Setting up environmental variables

To run the project, you will need to set up environmental variables. Follow the instructions below:

Create a .env file inside the project directory and define the following variables:

```
REACT_APP_NEWS_API=your_newscatcherapi_key
```

## Installation
To get started with Hotcoin, follow these steps:

1. Clone the repository
2. Install the dependencies `npm install`.
3. Configure the environmental variables as described in the previous section.
4. Start the React app by running `npm start`.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/MDBossss/hotcoin/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/MDBossss/hotcoin/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/MDBossss/hotcoin/blob/main/LICENSE.md) for more information.
