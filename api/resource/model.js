const db = require("../../data/dbConfig");

const getAll = () => {
    return db("resources");
}

const getById = (id) => {
    return db("resources").where("resource_id", id).first();
}

const addResource = async (resource) => {
    const id = await db("resources").insert(resource);
    return getById(id);
}

module.exports = {
    getAll,
    addResource
}
