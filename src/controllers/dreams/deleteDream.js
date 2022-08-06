import Dream from '../../models/Dream'

const deleteDream = async (req, res) => {
  try {
    const { id } = req.body

    const dream = await Dream.delete({ _id: id, deleted: false })

    if (!dream.modifiedCount) throw new Error("Couldn't delete dream with that id.")

    res.status(200)
    res.send('Successfully deleted.')
  } catch (error) {
    next(error)
  }
}

export default deleteDream
