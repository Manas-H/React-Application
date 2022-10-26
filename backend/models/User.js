const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	tel: { type: Number, required: true },
	password: { type: String, required: true },
	reEnterPassword: { type: String, required: true },
});

userSchema.methods.generateAuthToken = () => {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "3d"
		},
		(err, token) => {
			if(err) return res.json({
				messages:err
			})
			return res.json({
				message: "Sucesss",
				token: "Bearer" + token
			})
	})
	return token;
};
// userSchema.statics.findByToken=function(token,cb){
//     var user=this;

//     jwt.verify(token, env.JWTPRIVATEKEY, (decode) => {
//         user.findOne({"_id": decode, "token":token},(err,user) =>{
//             if(err) return cb(err);
//             cb(null,user);
//         })
//     })
// };

// userSchema.methods.deleteToken= (token,cb) => {
//     var user=this;
//     user.update({$unset : {token:1}},(err,user) =>{
//         if(err) return cb(err);
//         cb(null,user);
//     })
// }

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Full Name"),
		email: Joi.string().email().required().label("Email"),
		tel: Joi.number().required().label("Mobile Number"),
		password: passwordComplexity().required().label("Password"),
		// reEnterPassword: passwordComplexity().required().label("ReEnter Password"),
		reEnterPassword: Joi.any().valid(Joi.ref('password')).required().label('Password').messages({ 'any.only': '{{#label}} does not match'})

	});
	return schema.validate(data);
};

module.exports = { User, validate };