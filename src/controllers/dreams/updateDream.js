import Dream from "../../models/Dream"

const updateDream = async (req, res, next) => {
    const { id, title, description, date, type } = req.body

    try {
        const response = await Dream.updateOne(
            { _id: id },
            {
                $set: {
                    title,
                    description,
                    date,
                    type
                }
            }
        )

        res.status(200)

        if (response.modifiedCount) {
            const updatedDream = await Dream.findById(id)
            res.send(updatedDream)
        }
        else {
            res.send(response)
        }
    } catch (error) {
        next(error)
    }
}

export default updateDream