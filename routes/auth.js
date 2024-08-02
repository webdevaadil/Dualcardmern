const express = require("express");
const router = express.Router();

const{ register, login,getdata, getuserdata,sendchallange, getchallenge, getrecieved, acceptChallenge, challengeStatus, declineChallenge, getwinner, setwinner, countwinlose,updateimage}= require('../controllers/auth')
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/getdata").post(getdata)

router.route("/getuserdata").post(getuserdata)

router.route("/sendchal").post(sendchallange)
router.route("/challengedata").post(getchallenge)
router.route("/recievedchallenge").post(getrecieved)
router.route("/acceptChallenge").put(acceptChallenge)
router.route("/challengestatus").post(challengeStatus)
router.route("/declinechallenge").put(declineChallenge)
router.route("/winnerchallenge").post(getwinner)
router.route("/winnerstatus").put(setwinner)
router.route("/countwinlose").post(countwinlose)
router.route("/updateimage").put(updateimage)
// router.route("/forgetpassword").post(forgetpassword);

// router.route("/resetpassword/:resetToken").post(resetpassword);

module.exports=router



