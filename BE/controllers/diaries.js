const Diary = require("../models/Diary");

async function index(req, res) {
    try {
        const diary = await Diary.getAll();
        res.status(200).json(diary);
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const diary = await Diary.getOneById(id);
        res.json(diary);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        const result = await Diary.create(data);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({ "error": err.message })
    }
};

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const diary = await Diary.getOneById(id);
        const result = await diary.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
};

async function update (req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const result = await Diary.update(data, id);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index, show, create, destroy, update
}
