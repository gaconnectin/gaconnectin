const userRouter = require('express').Router();
const { getAllUsers, 
        getUser, 
        createUser, 
        checkInvitationToken, 
        updateUser, 
        deleteUser, 
        addUserAttribute , 
        findUserAttributeId,
        deleteUserAttribute } = require('../models/user_model');

/* convenience method for sending */
const sendJSONresp = (req,res)=>res.json(res.rows)

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
  .put(updateUser, sendJSONresp)
  .delete(deleteUser, sendJSONresp)

userRouter.route('/:uID/add-attr')
  .post(addUserAttribute, sendJSONresp)

userRouter.route('/:uID/delete-attr')
  .post(findUserAttributeId, deleteUserAttribute, sendJSONresp)


module.exports = userRouter;
