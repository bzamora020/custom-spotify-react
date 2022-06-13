import express from "express"
import cors from "cors"
// import lyricFinder from "lyrics-finder"
import SpotifyWebApi from "spotify-web-api-node"
import dotenv from "dotenv"
const PORT = 8080

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post("/login", async (req, res) => {
    const { code } = req.body

    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    })

    try {
        const {
            body: {access_token, refresh_token, expires_in },
        } = await spotifyApi.authorizationCodeGrant(code)
        console.log(res)
        res.json({ access_token, refresh_token, expires_in })
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
});



app.listen(PORT, err => {
    if (err) console.log(err)
    console.log("Listening on port", PORT)
})
