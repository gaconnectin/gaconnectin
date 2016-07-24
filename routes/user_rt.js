const userRouter = require('express').Router();
const { getUserAttributes,
        getAllUsers,
        getUserByUsername,
        getUserByID,
        createUser,
        checkInvitationToken,
        updateUser,
        deleteUser,
        addUserAttribute ,
        findUserAttributeId,
        deleteUserAttribute } = require('../models/user_model');

const tokenService = require('../service/tokens.js');

/* convenience method for sending */
const sendJSONresp = (req,res)=>res.json(res.rows)
const sendError = (err,req,res,next)=>res.status(401).json(err)


  /* This is whre the user logs in */
userRouter.post('/authenticate',
            getUserByUsername,
            tokenService.createToken,
            sendError)

userRouter.post('/', checkInvitationToken, createUser, (req, res)=> {
    if (res.error) {
//      res.send("Got error: ", res.error);
      res.status(400).send(res.error);
    } else {
      res.status(200).send('created user');
    }

  })

//userRouter.use( tokenService.validateToken )

userRouter.get('/', getAllUsers, sendJSONresp)

userRouter.route('/:uID/add-attr')
  .post(addUserAttribute, sendJSONresp)

userRouter.route('/:uID/delete-attr')
  .post(findUserAttributeId, deleteUserAttribute, sendJSONresp)

userRouter.route('/:uID')
  .get(getUserAttributes, getUserByID, (req, res) => {
    return res.json({user: res.user,
            attributes: res.attributes});
  })
  .put(updateUser, sendJSONresp)
  .delete(deleteUser, sendJSONresp)

module.exports = userRouter;
