export const handleSumTotal = (cart) => {
    const reducer = (accumulator, current) => accumulator + current.price;
    return cart.reduce(reducer, 0);
  };