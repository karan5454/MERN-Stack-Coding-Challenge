const express = require('express');
const { initializeDatabase, getTransactions, getStatistics, getBarChart, getPieChart, getCombinedData } = require('../controllers/transactionController');
const router = express.Router();

// Define routes with proper callback functions
router.get('/initialize', initializeDatabase);
router.get('/transactions', getTransactions);
router.get('/statistics', getStatistics);
router.get('/barchart', getBarChart);
router.get('/piechart', getPieChart);
router.get('/combined', getCombinedData);

module.exports = router;
