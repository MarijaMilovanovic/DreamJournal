import DREAM_TYPE from "../enums/dreamType"

const getDreamTypes = async (req, res) => {
    try {
        const types = Object.values(DREAM_TYPE)

        res.statusCode = 200
        res.send(types)
    } catch (error) {
        res.statusCode = 500
        res.send('Something went wrong.')
    }
}

export default getDreamTypes;