<!doctype html>
<html>
  <head>
    <title>Калькулятор банковская гарантия</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">	
    
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <!-- Bootstrap Эти стили удалить только из этого файла, они есть уже! 
		На вашем сайте их оставить обязательно!
    -->
    <link href="https://banksp.ru/wp-content/themes/prf/css/bootstrap.min.css" rel="stylesheet">
 		<link href="https://banksp.ru/wp-content/themes/prf/css/bootstrap-select.min.css" rel="stylesheet">		
    <link href="https://banksp.ru/wp-content/themes/prf/style.css" rel="stylesheet">
    <link href="https://banksp.ru/wp-content/themes/prf/responsive.css" rel="stylesheet">

    <!-- Переопределенные мною стили -->
    <link href="style-calc.css" rel="stylesheet">
  </head>

  <body> 
		
	<section class="calk calkbg text-center" id="rasschet">
	   <div class="container">
	      <div class="row">
	         <div class="col-md-12">
	            <h2>Рассчитайте стоимость банковской гарантии</h2>
	            <form>
	               <ul class="calk-list">
	                  <li>
	                     <div id="summag-wrap" class="form-group">
	                        <label for="summag">Сумма гарантии</label>
	                        <input id="summag" type="text" class="form-control" min="1" max="99000000000"  placeholder="1 000 000" id="summag">
	                        <span>руб.</span>
	                     </div>
	                     <br class="visible-xs-block visible-sm-block">
	                     <div class="form-group">
	                        <label for="srokg">Срок гарантии <i>(максимум 1096)</i></label>
	                        <input id="srokg" type="text" class="form-control" min="1" max="1096" placeholder="365" id="srokg">
	                        <span>дней</span>
	                     </div>
	                     <br class="visible-xs-block visible-sm-block">
	                     <div id="btn-calc-wrapper" class="form-group">	                     		
	                        <button id="btn-calc-guarantee" class="btn btn-default btn-default-calk">Рассчитать</button>
	                     </div>
	                  </li>
	                  <li class="li-hr">
	                     <hr>
	                  </li>
	               </ul>
								 <div id="will-cost-wrap">
									 	<span class="text">Стоимость банковской гарантии составит: </span><br class="visible-xs-block">
									 	<strong><span id="final-sum" class="summ">0 руб. </span></strong>
								 </div>
	               <ul class="calk-list-rezult">
	                  <li id="bg-send-appl">
	                    <a href="#contact_form_pop_2" class="zayavka-btn fancybox">Отправить заявку</a>
	                  </li>
	               </ul>
	            </form>
	         </div>
	      </div>
	   </div>
	</section>

	<script src="bg-main.js"></script>
	<script src="bg-func.js"></script>
	
	</body>
	
	</html>

