import Dream from "../../models/Dream"

const getDreams = async (req, res, next) => {
	const { id, search, startDate, endDate, type, name, sortField, sortDirection, page, limit } = req.query

	let query = {}
	if (id) query = { _id: id }
	else if (search || startDate || endDate || type || name)
	{
		query = {
			$and: [
				{deleted: false}
			]
		}

		if (search) {
			const regex = new RegExp(search, 'i')
			const searchObj = {$or: [{ title: regex }, { description: regex }, { type: regex }]}
			query.$and.push(searchObj)
		}

		if (startDate || endDate)
		{
			const dateObj = {}

			if (startDate && endDate)
			{
				dateObj.date = {
						$gte: new Date(startDate),
						$lt: new Date(endDate)
				}
			}
			else if (startDate) dateObj.date = {$gte: new Date(startDate)}
			else dateObj.date = {$lt: new Date(endDate)}

			query.$and.push(dateObj)
		}

		if (type) query.$and.push({type})

		if (name) query.$and.push({name})
	}
	else query = { deleted: false }

	let sortObj = {}

	if (sortField && sortDirection) {
		sortObj[sortField] = sortDirection
	} else {
		sortObj = { date: -1 }
	}

	const paginationOptions = {
		sort: sortObj,
		page: page ? page : 1,
		limit: limit ? limit : 25
	}

	try {
		const response = await Dream.paginate(query, paginationOptions)

		res.status(200)
		res.send(response)
	} catch (error) {
		next(error)
	}
}

export default getDreams