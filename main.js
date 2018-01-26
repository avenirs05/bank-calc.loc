window.onload = function () {

	document.getElementById('btn-calc-guarantee').onclick = function(event) {		
		event.preventDefault();
		
		var amount = document.getElementById('summag').value;
		var term = document.getElementById('srokg').value;
		var finalSum = document.getElementById('final-sum');
		var daysInYear = 365;
		var periods = [

		];

		// Сумма меньше 50 000 руб.
		if (amount <= 50000) {	
				if (term >= 0   && term <= 30)   { finalSum.innerHTML = '2 000'; }
				if (term >= 31  && term <= 61)   { finalSum.innerHTML = '2 000'; }
				if (term >= 62  && term <= 91)   { finalSum.innerHTML = '2 000'; }
				if (term >= 92  && term <= 122)  { finalSum.innerHTML = '2 000'; }
				if (term >= 123 && term <= 152)  { finalSum.innerHTML = '2 000'; }
				if (term >= 153 && term <= 183)  { finalSum.innerHTML = '2 000'; }
				if (term >= 184 && term <= 213)  { finalSum.innerHTML = '2 000'; }
				if (term >= 214 && term <= 244)  { finalSum.innerHTML = '2 000'; }
				if (term >= 245 && term <= 274)  { finalSum.innerHTML = '2 000'; }
				if (term >= 275 && term <= 305)  { finalSum.innerHTML = '2 000'; }
				if (term >= 306 && term <= 335)  { finalSum.innerHTML = '2 000'; }
				if (term >= 336 && term <= 365)  { finalSum.innerHTML = '2 000'; }
				if (term >= 366 && term <= 395)  { finalSum.innerHTML = '2 000'; }
				if (term >= 396 && term <= 548)  { finalSum.innerHTML = '2 500'; }
				if (term >= 549 && term <= 730)  { finalSum.innerHTML = '2 500'; }
				if (term >= 731 && term <= 913)  { finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); }
				if (term >= 914 && term <= 1096) { finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); }			
		}

		if (amount >= 50001 && amount <= 100000) {	
				if (term >= 0   && term <= 30)   { finalSum.innerHTML = '2 000'; }
				if (term >= 31  && term <= 61)   { finalSum.innerHTML = '2 000'; }
				if (term >= 62  && term <= 91)   { finalSum.innerHTML = '2 000'; }
				if (term >= 92  && term <= 122)  { finalSum.innerHTML = '2 000'; }
				if (term >= 123 && term <= 152)  { finalSum.innerHTML = '2 000'; }
				if (term >= 153 && term <= 183)  { finalSum.innerHTML = '2 000'; }
				if (term >= 184 && term <= 213)  { finalSum.innerHTML = '3 000'; }
				if (term >= 214 && term <= 244)  { finalSum.innerHTML = '3 000'; }
				if (term >= 245 && term <= 274)  { finalSum.innerHTML = '3 000'; }
				if (term >= 275 && term <= 305)  { finalSum.innerHTML = '3 000'; }
				if (term >= 306 && term <= 335)  { finalSum.innerHTML = '3 000'; }
				if (term >= 336 && term <= 365)  { finalSum.innerHTML = '3 000'; }
				if (term >= 366 && term <= 395)  { finalSum.innerHTML = '3 500'; }
				if (term >= 396 && term <= 548)  { finalSum.innerHTML = '3 500'; }
				if (term >= 549 && term <= 730)  { finalSum.innerHTML = '3 500'; }
				if (term >= 731 && term <= 913)  { finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); }
				if (term >= 914 && term <= 1096) { finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); }			
		}
	};

}