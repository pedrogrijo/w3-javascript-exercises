/* Write a JavaScript program to display the current day and time in the following format. Go to the editor
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22 */

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
<body>
<script>
    var currentdate = new Date()
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    document.write("Today is: " + weekdays[currentdate.getDay()] + "<br>")
    document.write("Current time is: " + currentdate.getHours() + " : " + currentdate.getMinutes() + " : " + currentdate.getSeconds())
</script> 
</body>
</html>
