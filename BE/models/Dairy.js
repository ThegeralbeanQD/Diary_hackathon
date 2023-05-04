const db = require('../database/connect');

class Diary {
    constructor({postId, title, content, category,
    postTime, postDate, mood, userId}){
        this.postId = postId
        this.title = title
        this.content = content
        this.category = category
        this.postTime = postTime
        this.postDate = postDate
        this.mood = mood
        this.userId = userId
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diaries");
        return response.rows.map(d => new Diary(p));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM diaries WHERE postId = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate entry.")
        }
        return new Post(response.rows[0]);
    }

    static async create(data) {
        const { title, content, category, mood } = data;
        let response = await db.query("INSERT INTO diaries (title, content, category, mood) VALUES ($1, $2, $3, $4) RETURNING *;",
            [title, content, category, mood]);
        const newId = response.rows[0].postId;
        const newPost = await Diary.getOneById(newId);
        return newPost;
    }

    static async destroy(data) {
        console.log(data);
        const response = await db.query('DELETE FROM diaries WHERE snack_id = $1 RETURNING *;', [data.id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to delete entry.")
        }
        return new Snack(response.rows[0]);
    }
}