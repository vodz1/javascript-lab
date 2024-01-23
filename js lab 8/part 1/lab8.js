function updateTime() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, "0");
  var minutes = now.getMinutes().toString().padStart(2, "0");
  var seconds = now.getSeconds().toString().padStart(2, "0");
  var formattedTime = hours + ":" + minutes + ":" + seconds;
  formattedTime = now.toLocaleTimeString([], { weekday: "short" });
  document.getElementById("time").innerText = formattedTime;
}

function showAlarmForm() {
  document.getElementById("alarm-form").style.display = "block";
}

function setAlarm() {
  const alarmTime = document.getElementById("alarmTime").value;
  alert(`Alarm set for ${alarmTime}`);
  document.getElementById("alarm-form").style.display = "none";
}

updateTime();
setInterval(updateTime, 1000);
