// CDFG API Server Manager

var npmlog = require("npmlog")

npmlog.heading = "CDFGS API"

npmlog.info("INIT", "Initalizing API Server on port 8990")

npmlog.info("INIT", "Creating functions to deal with Scoreboard Users")

npmlog.enableProgress()
var addApiFunctions = npmlog.newItem("Add API Functions", 4, 1)

var addApiEndpoints = npmlog.newItem("add API Endpoints to 8990")