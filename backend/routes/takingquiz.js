const express = require('express')
const User = require('../models/User')
const Question = require('../models/Ques')
const Scores = require('../models/Score')
const router = express.Router();
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const Score = require('../models/Score');



//  to get all questions GET /user/quiz

router.get('/quiz', async (req, res) => {
    user = await Question.create(
        [
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
        ]
    )
    console.log("ok");
    res.json({ message: "Success" })
})



// router.get('/score', async (req, res) => {
//     user = await Scores.create(
//         {
//             user: "621659004329f66f32e9a0e4",

//             score: 52,
//             total: 100,
//             quiz: 'math'

//         }
//     )
//     console.log("ok", user);
//     res.json({ message: "Success" })
// })

router.get('/quiz/:quizID', async (req, res) => {
    try {
        // userID = req.user.id
        const quizData = await Question.find({ quiz: req.params.quizID })
        res.send(quizData)
    } catch (error) {

    }
})


router.get('/getscore', fetchuser, async (req, res) => {
    try {
        var userID = await req.user.id
        const score = await Scores.find({ user: userID })
        res.send(score)
        console.log(score);
    } catch (error) {
        console.log(error)
        res.json({ message: "can not get data" })

    }
})
router.get('/contact', fetchuser, async (req, res) => {
    try {
        userID = req.user.id
        const score = await Score.find({ user: userID })
        res.send(score)
    } catch (error) {

    }
})

router.post('/score', fetchuser, async (req, res) => {
    try {
        var userID = await req.user.id
        // const [ marks, total, quiz ] = await req.body;
        // const data = {
        //     user: userID,
        //     score: req.body.marks,
        //     total: req.body.total,
        //     quiz: req.body.quiz

        // }
        // console.log(data)
        const score = await Scores.create({
            user: userID,
            score: req.body.marks,
            total: req.body.total,
            quiz: req.body.quiz

        })
        res.json({ message: 'success' }).status(200)

    } catch (error) {
        console.log(error)
        res.json({ message: "somthing went wrong" })

    }
})



module.exports = router