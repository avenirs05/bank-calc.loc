window.onload = function () {

	document.getElementById('btn-calc-guarantee').onclick = function(event) {		
		event.preventDefault();
		
		var amount = document.getElementById('summag').value;
		var term = document.getElementById('srokg').value;
		var finalSum = document.getElementById('final-sum');
		var daysInYear = 365;
		
		var periods = [
			{ begin: 0, end: 30 },
			{ begin: 31, end: 61 },
			{ begin: 62, end: 91 },
			{ begin: 92, end: 122 },
			{ begin: 123, end: 152 },
			{ begin: 153, end: 183 },
			{ begin: 184, end: 213 },
			{ begin: 214, end: 244 },
			{ begin: 245, end: 274 },
			{ begin: 275, end: 305 },
			{ begin: 306, end: 335 },
			{ begin: 336, end: 365 },
			{ begin: 366, end: 395 },
			{ begin: 396, end: 548 },
			{ begin: 549, end: 730 },
			{ begin: 731, end: 913 },
			{ begin: 914, end: 1096 }
		];

		var sums = [
			{ end: 50000 },
			{ begin: 50001,   end: 100000   },
			{ begin: 100001,  end: 150000   },
			{ begin: 150001,  end: 400000   },
			{ begin: 400001,  end: 500000   },
			{ begin: 500001,  end: 1000000  },
			{ begin: 1000001, end: 3000000  },
			{ begin: 3000001, end: 6000000  },
			{ begin: 6000001, end: 10000000 },
			{ begin: 10000001 }
		];


		// До 50 000 руб.
		if (amount <= sums[0].end) {	
				if (term >= periods[0].begin  && term <= periods[0].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[1].begin  && term <= periods[1].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[2].begin  && term <= periods[2].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[3].begin  && term <= periods[3].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[4].begin  && term <= periods[4].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[5].begin  && term <= periods[5].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[6].begin  && term <= periods[6].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[7].begin  && term <= periods[7].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[8].begin  && term <= periods[8].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[9].begin  && term <= periods[9].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[10].begin && term <= periods[10].end) { finalSum.innerHTML = '2 000'; }
				if (term >= periods[11].begin && term <= periods[11].end) { finalSum.innerHTML = '2 000'; }
				if (term >= periods[12].begin && term <= periods[12].end) { finalSum.innerHTML = '2 000'; }
				if (term >= periods[13].begin && term <= periods[13].end) { finalSum.innerHTML = '2 500'; }
				if (term >= periods[14].begin && term <= periods[14].end) { finalSum.innerHTML = '2 500'; }				
				
				if (term >= periods[15].begin && term <= periods[15].end) { 
					  finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); 
				}				
				if (term >= periods[16].begin && term <= periods[16].end) { 
					  finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); 
				}			
		}


		// От 50 001 до 100 000 руб.
		if (amount >= sums[1].begin && amount <= sums[1].end) { 
				if (term >= periods[0].begin  && term <= periods[0].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[1].begin  && term <= periods[1].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[2].begin  && term <= periods[2].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[3].begin  && term <= periods[3].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[4].begin  && term <= periods[4].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[5].begin  && term <= periods[5].end)  { finalSum.innerHTML = '2 000'; }
				if (term >= periods[6].begin  && term <= periods[6].end)  { finalSum.innerHTML = '3 000'; }
				if (term >= periods[7].begin  && term <= periods[7].end)  { finalSum.innerHTML = '3 000'; }
				if (term >= periods[8].begin  && term <= periods[8].end)  { finalSum.innerHTML = '3 000'; }
				if (term >= periods[9].begin  && term <= periods[9].end)  { finalSum.innerHTML = '3 000'; }
				if (term >= periods[10].begin && term <= periods[10].end) { finalSum.innerHTML = '3 000'; }
				if (term >= periods[11].begin && term <= periods[11].end) { finalSum.innerHTML = '3 000'; }
				if (term >= periods[12].begin && term <= periods[12].end) { finalSum.innerHTML = '3 500'; }
				if (term >= periods[13].begin && term <= periods[13].end) { finalSum.innerHTML = '3 500'; }
				if (term >= periods[14].begin && term <= periods[14].end) { finalSum.innerHTML = '3 500'; }				
				
				if (term >= periods[15].begin && term <= periods[15].end) { 
					  finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); 
				}				
				if (term >= periods[16].begin && term <= periods[16].end) { 
					  finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); 
				}		
		}
		

		// От 100 001 до 150 000 руб.
		if (amount >= sums[2].begin && amount <= sums[2].end) { 
				if (term >= periods[0].begin  && term <= periods[0].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(30, amount, term, daysInYear);  
				}
				if (term >= periods[1].begin  && term <= periods[1].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(15, amount, term, daysInYear);  
				}
				if (term >= periods[2].begin  && term <= periods[2].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(9.5, amount, term, daysInYear);  
				}
				if (term >= periods[3].begin  && term <= periods[3].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(8.1, amount, term, daysInYear);  
				}
				if (term >= periods[4].begin  && term <= periods[4].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(8.1, amount, term, daysInYear);  
				}
				if (term >= periods[5].begin  && term <= periods[5].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(7.2, amount, term, daysInYear);  
				}
				if (term >= periods[6].begin  && term <= periods[6].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(6.8, amount, term, daysInYear);  
				}
				if (term >= periods[7].begin  && term <= periods[7].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(6.25, amount, term, daysInYear);  
				}
				if (term >= periods[8].begin  && term <= periods[8].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(5.85, amount, term, daysInYear);  
				}
				if (term >= periods[9].begin  && term <= periods[9].end)  { 
						finalSum.innerHTML =  showFinalSumGuarantee(5.4, amount, term, daysInYear);  
				}
				if (term >= periods[10].begin && term <= periods[10].end) { 
						finalSum.innerHTML =  showFinalSumGuarantee(5.25, amount, term, daysInYear);  
				}
				if (term >= periods[11].begin && term <= periods[11].end) { 
						finalSum.innerHTML =  showFinalSumGuarantee(5.15, amount, term, daysInYear);  
				}
				if (term >= periods[12].begin && term <= periods[12].end) { 
						finalSum.innerHTML =  showFinalSumGuarantee(5.15, amount, term, daysInYear);  
				}
				if (term >= periods[13].begin && term <= periods[13].end) { 
						finalSum.innerHTML =  showFinalSumGuarantee(5.10, amount, term, daysInYear);  
				}
				if (term >= periods[14].begin && term <= periods[14].end) { 
						finalSum.innerHTML =  showFinalSumGuarantee(5, amount, term, daysInYear);  
				}		
				if (term >= periods[15].begin && term <= periods[15].end) { 
					  finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); 
				}				
				if (term >= periods[16].begin && term <= periods[16].end) { 
					  finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); 
				}		
		}
		

		// От 150 001 до 400 000 руб.
		if (amount >= sums[3].begin && amount <= sums[3].end) { 
			if (term >= periods[0].begin  && term <= periods[0].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(15, amount, term, daysInYear);  
			}
			if (term >= periods[1].begin  && term <= periods[1].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(9.5, amount, term, daysInYear);  
			}
			if (term >= periods[2].begin  && term <= periods[2].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(8.5, amount, term, daysInYear);  
			}
			if (term >= periods[3].begin  && term <= periods[3].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(7.9, amount, term, daysInYear);  
			}
			if (term >= periods[4].begin  && term <= periods[4].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(7.2, amount, term, daysInYear);  
			}
			if (term >= periods[5].begin  && term <= periods[5].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(6.6, amount, term, daysInYear);  
			}
			if (term >= periods[6].begin  && term <= periods[6].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(6.6, amount, term, daysInYear);  
			}
			if (term >= periods[7].begin  && term <= periods[7].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(6.1, amount, term, daysInYear);  
			}
			if (term >= periods[8].begin  && term <= periods[8].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(5.75, amount, term, daysInYear);  
			}
			if (term >= periods[9].begin  && term <= periods[9].end)  { 
					finalSum.innerHTML =  showFinalSumGuarantee(5.4, amount, term, daysInYear);  
			}
			if (term >= periods[10].begin && term <= periods[10].end) { 
					finalSum.innerHTML =  showFinalSumGuarantee(5.25, amount, term, daysInYear);  
			}
			if (term >= periods[11].begin && term <= periods[11].end) { 
					finalSum.innerHTML =  showFinalSumGuarantee(5.15, amount, term, daysInYear);  
			}
			if (term >= periods[12].begin && term <= periods[12].end) { 
					finalSum.innerHTML =  showFinalSumGuarantee(5.15, amount, term, daysInYear);  
			}
			if (term >= periods[13].begin && term <= periods[13].end) { 
					finalSum.innerHTML =  showFinalSumGuarantee(5.1, amount, term, daysInYear);  
			}
			if (term >= periods[14].begin && term <= periods[14].end) { 
					finalSum.innerHTML =  showFinalSumGuarantee(5, amount, term, daysInYear);  
			}		
			if (term >= periods[15].begin && term <= periods[15].end) { 
				  finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); 
			}				
			if (term >= periods[16].begin && term <= periods[16].end) { 
				  finalSum.innerHTML =  showFinalSumGuarantee(4.95, amount, term, daysInYear); 
			}	
		}
	  

		// От 400 001 до 500 000 руб.
	  if (amount >= sums[4].begin && amount <= sums[4].end) { 
	  	if (term >= periods[0].begin  && term <= periods[0].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(8, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[1].begin  && term <= periods[1].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(8, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[2].begin  && term <= periods[2].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(6.8, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[3].begin  && term <= periods[3].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(6.3, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[4].begin  && term <= periods[4].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(5.7, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[5].begin  && term <= periods[5].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(5.15, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[6].begin  && term <= periods[6].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(5.15, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[7].begin  && term <= periods[7].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.75, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[8].begin  && term <= periods[8].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.65, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[9].begin  && term <= periods[9].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.55, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[10].begin && term <= periods[10].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.5, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[11].begin && term <= periods[11].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.45, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[12].begin && term <= periods[12].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.45, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[13].begin && term <= periods[13].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.4, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[14].begin && term <= periods[14].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.35, amount, term, daysInYear);  
	  	}		
	  	if (term >= periods[15].begin && term <= periods[15].end) { 
	  		  finalSum.innerHTML =  showFinalSumGuarantee(4.35, amount, term, daysInYear); 
	  	}				
	  	if (term >= periods[16].begin && term <= periods[16].end) { 
	  		  finalSum.innerHTML =  showFinalSumGuarantee(4.35, amount, term, daysInYear); 
	  	}	
	  }
	  

	  // От 500 001 до 1 000 000 руб.
	  if (amount >= sums[5].begin && amount <= sums[5].end) { 
	  	if (term >= periods[0].begin  && term <= periods[0].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(7, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[1].begin  && term <= periods[1].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(6.4, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[2].begin  && term <= periods[2].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(5, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[3].begin  && term <= periods[3].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.75, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[4].begin  && term <= periods[4].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.4, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[5].begin  && term <= periods[5].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.3, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[6].begin  && term <= periods[6].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.3, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[7].begin  && term <= periods[7].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.2, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[8].begin  && term <= periods[8].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.1, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[9].begin  && term <= periods[9].end)  { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.1, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[10].begin && term <= periods[10].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.05, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[11].begin && term <= periods[11].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.05, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[12].begin && term <= periods[12].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.05, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[13].begin && term <= periods[13].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4.05, amount, term, daysInYear);  
	  	}
	  	if (term >= periods[14].begin && term <= periods[14].end) { 
	  			finalSum.innerHTML =  showFinalSumGuarantee(4, amount, term, daysInYear);  
	  	}		
	  	if (term >= periods[15].begin && term <= periods[15].end) { 
	  		  finalSum.innerHTML =  showFinalSumGuarantee(4, amount, term, daysInYear); 
	  	}				
	  	if (term >= periods[16].begin && term <= periods[16].end) { 
	  		  finalSum.innerHTML =  showFinalSumGuarantee(4, amount, term, daysInYear); 
	  	}	
	  }
	  

	  // От 1 000 001 до 3 000 000 руб.
	  if (amount >= sums[6].begin && amount <= sums[6].end) { 

	  }
	  

	  // От 3 000 001 до 6 000 000 руб.
	  if (amount >= sums[7].begin && amount <= sums[7].end) { 

	  }
	  

	  // От 6 000 001 до 10 000 000 руб.
	  if (amount >= sums[8].begin && amount <= sums[8].end) { 

	  }
	  

	  // Больше 10 000 000 руб.
	  if (amount >= sums[9].begin) { }
	










	};

}