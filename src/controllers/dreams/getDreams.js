import Dream from "../../models/Dream"

const getDreams = async (req, res) => {
    const {id, pagination, sort, search, filter} = req.query

    let query = {}

    if (id) query = { _id: id }
    else if (search) {
		const regex = new RegExp(search, 'i')
		if (filter) {
			query = {
				$and: [
					filter,
					{ deleted: false },
					{
						$or: [{ title: regex }, { description: regex }, { date: regex }, { type: regex }]
					}
				]
			}
		} else {
			query = {
				$and: [
					{ deleted: false },
					{
						$or: [{ title: regex }, { description: regex }, { date: regex }, { type: regex }]
					}
				]
			}
		}
	} else if (filter) {
		query = {
			$and: [filter, { deleted: false }]
		}
	}
    else query = { deleted: false }

	let sortObj = {}

	if (sort && sort.field && sort.order) {
		sortObj[sort.field] = sort.order
	} else {
		sortObj = { createdAt: -1 }
	}

	const paginationOptions = {
		sort: sortObj,
		page: pagination && pagination.page ? pagination.page : 1,
		limit: pagination && pagination.limit ? pagination.limit : 25
	}

    try {
        const response = await Dream.paginate(query, paginationOptions)

        res.status(200)
	    res.send(response)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

	
}

export default getDreams