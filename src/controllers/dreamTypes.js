import DREAM_TYPE from "../enums/dreamType"

const getDreamTypes = async (req, res, next) => {
    try {
        const types = Object.values(DREAM_TYPE)
        res.statusCode = 200
        res.send(types)
    } catch (error) {
        next(error)
    }
}

export default getDreamTypes;