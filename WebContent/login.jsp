<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login Page</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>
	<h1>Welcome to login page</h1>
	<form name="LoginForm" method="post" action="homepage"
		onSubmit="return loginValidation()">
		<table>
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
				<td><input type="submit" name="login1" value="Login"></td>
			</tr>
		</table>
	</form>
	<script type="text/javascript" src="validation.js"></script>
</body>
</html>