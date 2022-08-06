import logger from "./logger"

const errorHandler = async (err, req, res, next) => {
    logger.error(err)
    res.status(500)
    res.json({ error: err.message })
}

export default errorHandler