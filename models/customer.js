module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: { type: DataTypes.STRING, allowNull: false },
        devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
    });
    return Burger;
};