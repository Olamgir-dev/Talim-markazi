const Rate = require("../models/rateModel");

const rateAdd = async (req, res) => {
    try {
        const addRate = await Rate.addRate(req);
        res.status(200).json(addRate);
    }
    catch (err) {
        res.status(500).json({msg: err.message})
    }
}

module.exports = {rateAdd}