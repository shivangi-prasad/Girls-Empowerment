const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
	auth: {
		api_key: "975943d21913b7c1844c3c2512370f0a-e5da0167-bf624d3c", //||  'MAIL_GUN_API_KEY', // TODO: Replace with your mailgun API KEY
		domain: "sandbox5580f1b2649e48ebb77db720e30d6296.mailgun.org", //|| 'MAIL_GUN_DOMAIN' // TODO: Replace with your mailgun DOMAIN
	},
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
	const mailOptions = {
		from: email,
		to: "arshkr07@gmail.com", //the receiver email has to be authorized
		subject,
		text,
	};

	transporter.sendMail(mailOptions, function (err, data) {
		if (err) {
			cb(err, null);
		} else {
			cb(null, data);
		}
	});
};
module.exports = sendMail;
