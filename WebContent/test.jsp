<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Test</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>
	<h1>Take your test</h1>
	<hr>
	<form name="TestForm" method="post" action="homepage"
		onSubmit="return testValidation()"> 
		<label>Are you experiencing any of the following symptoms?</label><br>
		<input type="checkbox" id="symptom1">
		<label> Cough</label>
		<input type="checkbox" id="symptom2">
		<label> Fever</label>
		<input type="checkbox" id="symptom3">
		<label>Difficulty in breathing</label>
		<input type="checkbox" id="symptom4">
		<label>None of the following</label><br>
		<hr>
		<label>Have you ever had any of the following?</label><br>
		<input type="checkbox" id="history1">
		<label> Diabetes</label>
		<input type="checkbox" id="history2">
		<label> Hypertension</label>
		<input type="checkbox" id="history3">
		<label>Lung Disease</label>
		<input type="checkbox" id="history4">
		<label>Heart Disease</label>
		<input type="checkbox" id="history5">
		<label>None of the following</label><br>
		<hr>
		<label>Have you travelled internationally in last 28-45 days?</label><br>
		<input type="checkbox" id="travel1">
		<label> Yes</label>
		<input type="checkbox" id="travel2">
		<label> No</label><br>
		<hr>
		<label>Have you come in contact with a Covid patient?</label><br>
		<input type="checkbox" id="contact1">
		<label> Yes</label>
		<input type="checkbox" id="contact2">
		<label> No</label><br>
		<button type="submit" name="result">DONE</button>
	</form>
	<script type="text/javascript" src="validation.js"></script>
</body>
</html>