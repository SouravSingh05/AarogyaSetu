<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Profile</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>
	<h1>Welcome to your profile</h1>
	<hr>
	<form name="ProfileForm" method="post" action="homepage"
		onSubmit="return profileValidation()">
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
				<td>Test Status</td>
				<td><input type="text" name="status"></td>
			</tr>
			<tr>
				<td>Infection Status</td>
				<td><input type="text" name="infect"></td>
			</tr>
			<tr>
				<td>Number Of Infected</td>
				<td><input type="text" name="cases"></td>
			</tr>
			
		</table>
		<button type="submit" name="save">SAVE</button><br>
		<button type="submit" name="taketest">TAKE TEST</button><br>
		<button type="submit" name="logout">LOGOUT</button><br>
	</form>
	<script type="text/javascript" src="validation.js"></script>
</body>
</html>