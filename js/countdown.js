
	function two(a) {
	    return (9 < a ? "" : "0") + a
	}
	function formatTime(a) {
	    a = Math.floor(a / 1E3);
	    var b = Math.floor(a / 60),
	        c = Math.floor(b / 60),
	        d = c / 24 | 0,
	        c = c % 24;
	    a %= 60;
	    b %= 60;
	    return d + " " + days(d) + " " + two(c) + " " + hours(c) + " " + two(b) + " " + minutes(b) + " " + two(a) + " " + seconds(a)
	};

	// функция для склонения слов ( (1)"день", (2)"дня", (5)"дней")

	function plural(str1,str2,str5){
	  return function ( n ) {return ((((n%10)==1)&&((n%100)!=11))?(str1):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(str2):(str5)))}
	  }

	var days =  plural('день', 'дня', 'дней'),
	    hours = plural('час', 'часа', 'часов'),
	    minutes = plural('минута', 'минуты', 'минут'),
	    seconds = plural('секунда', 'секунды', 'секунд');

	function Time() {
	    var data = Date.parse('02/01/2014') // дата начала 1 шестидневки  строго "месяц/день/год"
	    data = new Date(data);
	    data.setMinutes((-180 - data.getTimezoneOffset()), 0, 0); //для коррекции   запустить в зоне акции alert((new Date).getTimezoneOffset()) и поменять число
	    for (; (new Date).getTime() > data; )  {
	    data.setDate(data.getDate()+2)//через сутки +1 , через 6 дней +6
	    }
	    var a = data.getTime() -  (new Date).getTime();
	    document.getElementById("time").innerHTML = formatTime(a);
	    window.setTimeout(Time, 1E3)
	};
	Time()
