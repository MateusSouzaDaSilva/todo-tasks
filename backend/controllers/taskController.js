import pgp from 'pg-promise'


const connection = pgp()('postgres://postgres:123456@localhost:5432/app')

export async function listTasks(req, res) {
    const tasks = await connection.query("select * from mateus.tasks")
    console.log(tasks)
    res.status(200).json(tasks)
}

