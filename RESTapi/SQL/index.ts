// let express = require('express')
import express from 'express'
import db from './models/index'
import {users} from './seeders/users'
import { projects } from './seeders/projects';
import { pas } from './seeders/pas';

const app = express();

app.use(express.json())

const createUsers = (): void =>{
    users.map(user=>{
        db.User.create(user)
    })
}

const createProjects = () : void =>{
    projects.map(pro=>{
        db.Project.create(pro)
    })
}

const createAssignments = () : void=>{
    pas.map(pa=>{
        db.ProjectAssignments.create(pa)
    })
}

// createUsers()
// createProjects()
// createAssignments();
app.get('/data',async (req,res)=>{
    try {
        let data = await db.User.findAll({
            include:{
                model:db.Project
            }
        })

        res.send(data)
    } catch (error : any) {
        console.log(error.message )
        res.send(error)
    }
})

app.get('/',(req,res)=>[
    res.send({msg:"Just Checking ....."})
])

db.sequelize.sync().then(()=>{
    app.listen(process.env.port,()=>{
        console.log(`server runnig on ${process.env.port}`)
    })
})

