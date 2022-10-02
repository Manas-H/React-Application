const router = require("express").Router();
const { User, validate } = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password && req.body.reEnterPassword , salt);
		await new User({ ...req.body, password: hashPassword, reEnterPassword: hashPassword }).save();

        // const salt1 = await bcrypt.genSalt(Number(process.env.SALT));
		// const hashPassword1 = await bcrypt.hash(req.body.reEnterPassword, salt1);
		// await new User({ ...req.body, reEnterPassword: hashPassword1 }).save();

		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
        console.log(error);
		res.status(500).send({ message: "Something Went wrong..." });
	}
});

module.exports = router;
