import express from "express";

const router = express.Router();

const users = [
  {
    id:1,
    username:"vymanh123",
    password:"123vymanh"
  },
  {
    id:2,
    username:"vymanh456",
    password:"456vymanh"
  },
  {
    id:3,
    username:"vymanh789",
    password:"789vymanh"
  }
]

router.post('/login',(req,res) => {
  const {username,password} = req.body;
  const isUser = users.some(user = (user.username && user.password === password));
  if (isUser) {
    res.status(200).send('login successful');
  } else {
    res.status(401).send('login failed');
  }
})

router.post('/register',(req,res)=> {
  const isExistUser = users.some(user => user.username === req.body.username);
  if(isExistUser) {
    res.status(401).send('username is exist');
  } else {
    const newUser = {
      id : users[users.length - 1].id + 1,
      ...req.body
    }
    users.push(newUser);
    res.json({
      message:"login success",
      allUser:users,
      newUser
    })
  }
})
export default router;
