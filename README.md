# viewx_proj

> A Vue.js project

Screens

Top Crypto Currency List
Show list of top 100 cryptocurrencies using the API  - https://api.coinranking.com/v1/public/coins/?limit=100
API docs: https://docs.coinranking.com/
The data is constantly changing so make sure the user sees the current data by updating the data at a reasonable interval.No need to use websockets for real time functionality.
Use vuex to store the data.
Use pagination to show only 10 entries at a time.Also the table should be able to show 25 , 50, 100 entries per page if required.
You can use any css framework that you want but the app should be responsive.

List item should contain:
Currency Icon
Currency Name (eg. Bitcoin)
Currency Symbol (eg.  BTC)
Currency Price (eg. $1050.24)
Currency Price Change (eg. 1.23%)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
