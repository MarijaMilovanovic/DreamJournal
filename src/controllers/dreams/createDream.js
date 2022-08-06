import Dream from "../../models/Dream"

const createDream = async (req, res) => {
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
        if (error.name === "ValidationError") res.status(400)
        else res.status(500)

        res.send(error)
    }
}

export default createDream