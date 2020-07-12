<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Signup Page</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>
	<h1>Welcome To Signup page</h1>
	<form name="SignUpForm" method="post" action="homepage"
		onSubmit="return signupValidation()">
		<table>
			<tr>
				<td>Name</td>
				<td><input type="text" name="name"></td>
			</tr>
			<tr>
				<td>Phone Number</td>
				<td><input type="text" name="phno"></td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" name="pass"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" name="signup1" value="SIGNUP"></td>
			</tr>
		</table>
	</form>
	<script type="text/javascript" src="validation.js"></script>
</body>
</html>