const remoteURL = "http://localhost:8000"

export default {
    getAllParkAreas() {
        return fetch(`${remoteURL}/parkareas`).then(result => result.json())
    }
}