module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: DataTypes.INTEGER,
        user_name: DataTypes.STRING
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
