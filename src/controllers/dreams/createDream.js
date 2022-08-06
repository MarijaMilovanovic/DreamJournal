import Dream from "../../models/Dream"

const createDream = async (req, res, next) => {
    const { title, description, date, type } = req.body

    try {
        const dream = new Dream({
            title,
            description,
            date,
            type
        })

        await dream.save()

        res.status(200)
        res.send(dream)
    } catch (error) {
        next(error)
    }
}

export default createDream