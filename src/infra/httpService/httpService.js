const httpService = () => async ({
    url
}) => {
    try {

        const response = await fetch(url)
            .then(response => response.json())

        return response
    } catch (error) {
        return []
    }
}

export default httpService
