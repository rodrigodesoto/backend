const express = require('express')
const { response } = require('./server')
const server = require('./server')


module.exports = function(sever){


    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}