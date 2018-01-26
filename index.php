<!doctype html>
<html>
  <head>
    <title>Калькулятор банковская гарантия</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">	
    
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <!-- Bootstrap -->
    <link href="https://banksp.ru/wp-content/themes/prf/css/bootstrap.min.css" rel="stylesheet">
 		<link href="https://banksp.ru/wp-content/themes/prf/css/bootstrap-select.min.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="https://banksp.ru/wp-content/themes/prf/css/owl.carousel.css">
    <link href="https://banksp.ru/wp-content/themes/prf/style.css" rel="stylesheet">
    <link href="https://banksp.ru/wp-content/themes/prf/responsive.css" rel="stylesheet">
    <link href="style-calc.css" rel="stylesheet">


  </head>

  <body> 

	<div style="display:none" class="fancybox-hidden">
	   <div id="contact_form_pop_2">
	      <div role="form" class="wpcf7" id="wpcf7-f38-o2" lang="ru-RU" dir="ltr">
	         <div class="screen-reader-response"></div>
	         <form action="/#wpcf7-f38-o2" method="post" class="wpcf7-form" novalidate="novalidate">
	            <div style="display: none;">
	               <input type="hidden" name="_wpcf7" value="38" />
	               <input type="hidden" name="_wpcf7_version" value="4.9.2" />
	               <input type="hidden" name="_wpcf7_locale" value="ru_RU" />
	               <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f38-o2" />
	               <input type="hidden" name="_wpcf7_container_post" value="0" />
	            </div>
	            <div class="form-group">
	               <label for="name">Как Вас зовут?</label><br />
	               <span class="wpcf7-form-control-wrap text-368"><input type="text" name="text-368" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="name" aria-required="true" aria-invalid="false" placeholder="Имя, фамилия" /></span>
	            </div>
	            <div class="form-group">
	               <label for="phone">Мобильный телефон:</label><br />
	               <span class="wpcf7-form-control-wrap tel-223"><input type="tel" name="tel-223" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control" id="phone" aria-required="true" aria-invalid="false" placeholder="+7 (___) ___-__-__" /></span>
	            </div>
	            <div class="form-group">
	               <label for="email">Электронная почта:</label><br />
	               <span class="wpcf7-form-control-wrap email-522"><input type="email" name="email-522" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email form-control" id="email" aria-invalid="false" placeholder="________@_______.___" /></span>
	            </div>
	            <p> <button type="submit" class="btn btn-default">Отправить заявку</button></p>
	            <input type='hidden' class='wpcf7-pum' value='{"closepopup":false,"closedelay":0,"openpopup":false,"openpopup_id":0}' />
	            <div class="wpcf7-response-output wpcf7-display-none"></div>
	         </form>
	      </div>
	   </div>
	</div>
		
	<section class="calk calkbg text-center" id="rasschet">
	   <div class="container">
	      <div class="row">
	         <div class="col-md-12">
	            <h2>Рассчитайте стоимость банковской гарантии</h2>
	            <form>
	               <ul class="calk-list">
	                  <li>
	                     <div class="form-group">
	                        <label for="summag">Сумма гарантии</label>
	                        <input type="text" class="form-control" min="1" max="15000000" onchange="isright(this);" placeholder="1 000 000" id="summag">
	                        <span>руб.</span>
	                     </div>
	                     <div class="form-group">
	                        <label for="srokg">Срок гарантии</label>
	                        <input type="text" class="form-control" min="1" max="1096" onchange="isright(this);" placeholder="365" id="srokg">
	                        <span>дней</span>
	                     </div>
	                  </li>

	                  <li>
	                     <div class="form-group">
	                        <button type="submit" class="btn btn-default btn-default-calk">Рассчитать</button>
	                     </div>
	                  </li>
	                  <li class="li-hr">
	                     <hr>
	                  </li>
	               </ul>
	               <ul class="calk-list-rezult">
	                  <li><span class="text">Стоимость банковской гарантии
	                     для Вас составит: </span>
	                  </li>
	                  <li><span class="summ">0 руб.</span></li>
	                  <li>
	                    <a href="#contact_form_pop_2" class="zayavka-btn fancybox">Отправить заявку</a>
	                  </li>
	                  <li>
	                     <a name="clear"></a>
	                  </li>
	               </ul>
	            </form>
	         </div>
	      </div>
	   </div>
	</section>


	<script src="main.js"></script>
	<script src="script.js"></script>
	</body>
	
	</html>

