const getHealth = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to DigiWill Backend!",
    });
};

module.exports = { getHealth };