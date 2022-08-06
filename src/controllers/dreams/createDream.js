import Dream from "../../models/Dream"

const createDream = async (req, res) => {
    const {title, description, date, type} = req.body

    try {
        const dream = new Dream({
            title,
            description,
            date,
            type
        })

        await dream.save()

        res.send(dream)
    } catch (error) {
        
    }
}

export default createDream