const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
    getFriends, // Add this line
} = require('../../controllers/userController');

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends')
    .get(getFriends) // Add this line
    .post(addFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .delete(removeFriend);

module.exports = router;
