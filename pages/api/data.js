import {getQuizPacks} from "../../lib/getQuizPacks";

export default async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const quizPacks = await getQuizPacks()
    console.log(quizPacks);
    res.end(JSON.stringify(quizPacks));
}
