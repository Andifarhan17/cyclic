       // api url
		const api_url = "https://api.thingspeak.com/channels/2071059/feeds.json?api_key=7ETGETQAUI0MY5G7&results=1";
		// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >
		
		setInterval(() => {
		  fetch(api_url)
			.then((hasil) => hasil.json())
			.then((res) => {
			  var field = JSON.stringify(res.feeds[0]);
			  var obj = JSON.parse(field);
			  document.getElementById("Suhu").innerHTML = obj.field1;
			});
		}, );
