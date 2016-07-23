const userRouter = require('express').Router();
const { getUserAttributes,
        getAllUsers,
        getUser,
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

//userRouter.use( tokenService.validateToken )

  /* This is whre the user logs in */
userRouter.post('/authenticate',
            getUser,
            tokenService.createToken,
            sendError)


userRouter.route('/')
  .get(getAllUsers, sendJSONresp)
  .post(checkInvitationToken, createUser, (req, res)=> {
    if (res.error) {
//      res.send("Got error: ", res.error);
      res.status(400).send(res.error);
    } else {
      res.status(200).send('created user');
    }

  })

userRouter.route('/:uID')
  .get(getUserAttributes, getUser, (req, res) => {
    return res.json({user: res.user,
            attributes: res.attributes});
  })
  .put(updateUser, sendJSONresp)
  .delete(deleteUser, sendJSONresp)

userRouter.route('/:uID/add-attr')
  .post(addUserAttribute, sendJSONresp)

userRouter.route('/:uID/delete-attr')
  .post(findUserAttributeId, deleteUserAttribute, sendJSONresp)


module.exports = userRouter;
