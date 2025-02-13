require('dotenv').config()
const express = require('express')
const app = express()
// const port = 4000

let githubData={
    "login": "GouravSoni9068",
    "id": 131962154,
    "node_id": "U_kgDOB92VKg",
    "avatar_url": "https://avatars.githubusercontent.com/u/131962154?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/GouravSoni9068",
    "html_url": "https://github.com/GouravSoni9068",
    "followers_url": "https://api.github.com/users/GouravSoni9068/followers",
    "following_url": "https://api.github.com/users/GouravSoni9068/following{/other_user}",
    "gists_url": "https://api.github.com/users/GouravSoni9068/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/GouravSoni9068/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/GouravSoni9068/subscriptions",
    "organizations_url": "https://api.github.com/users/GouravSoni9068/orgs",
    "repos_url": "https://api.github.com/users/GouravSoni9068/repos",
    "events_url": "https://api.github.com/users/GouravSoni9068/events{/privacy}",
    "received_events_url": "https://api.github.com/users/GouravSoni9068/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Gourav Soni",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 19,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2023-04-27T09:34:41Z",
    "updated_at": "2025-01-26T17:01:58Z"
  }

app.get('/github',(req,res)=>{
    res.json(githubData)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('gouravdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>login page </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>come at youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

