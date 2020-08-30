const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    // if (quantity * stockPrice > state.funds) {
    //   return alert('You dont have enough money to buy this stock');
    // }
    const record = state.stocks.find(el => el.stockId == stockId);
    if (record) {
      record.quantity += parseInt(quantity);
    } else {
      state.stocks.push({
        id: stockId,
        quantity: parseInt(quantity)
      })
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(el => el.stockId == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  'SET_PORTFOLIO'(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCK', order);
  }
}

const getters = {
  stockPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(el => el.id == stock.id);
      return {
        id: stock.id,
        name: record.name,
        price: record.price,
        quantity: stock.quantity

      }
    })
  },
  funds: state => {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
