// 2806. Account Balance After Rounded Purchase

const accountBalanceAfterPurchase = function (purchaseAmount) {
    const roundedAmount = Math.round(purchaseAmount / 10) * 10;
    return 100 - roundedAmount;
};

accountBalanceAfterPurchase(11);
